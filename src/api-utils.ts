import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as qs from 'qs';
import {
    ApiDefinitionTree,
    DeepWrap,
    DirectorySDK,
    OnRequestError,
    OnRequestErrorResult,
    RequestContextInfo,
    RequestErrorInfo,
    ResponseInfo,
    SDK,
} from './types';

const looksLikeAxiosRequestOptions = (arg: unknown): arg is AxiosRequestConfig =>
    typeof arg === 'object' && arg !== null && ('headers' in arg || 'baseURL' in arg || 'timeout' in arg);

const isWrappedFn = (fn: any): fn is (...args: any[]) => Promise<AxiosResponse<any>> & { __isWrapped: true } => {
    return typeof fn === 'function' && fn.__isWrapped === true;
};

const isCustomWrappedFn = (
    fn: any,
): fn is ((...args: any[]) => Promise<AxiosResponse<any>>) & { __customMethodWrapper: true } => {
    return typeof fn === 'function' && fn.__customMethodWrapper === true;
};

const retryLocks = new WeakMap<object, Promise<OnRequestErrorResult | void>>();

const delay = (ms: number): Promise<void> =>
    ms > 0 ? new Promise((resolve) => setTimeout(resolve, ms)) : Promise.resolve();

const cloneRequestConfig = (request: AxiosRequestConfig): AxiosRequestConfig => ({
    ...request,
    headers: request.headers ? { ...request.headers } : request.headers,
});

const toResponseInfo = (response?: AxiosResponse): ResponseInfo | undefined => {
    if (!response) return undefined;
    return {
        status: response.status,
        headers: response.headers,
        data: response.data,
    } satisfies ResponseInfo;
};

const enhanceAxiosError = (error: AxiosError): void => {
    let responseData: string;

    try {
        const messageFromBody = (error.response?.data as any)?.message;
        if (typeof messageFromBody === 'string' && messageFromBody.length > 0) {
            responseData = messageFromBody;
        } else if (typeof error.response?.data === 'string') {
            responseData = error.response.data;
        } else if (error.response?.data !== undefined) {
            responseData = JSON.stringify(error.response.data);
        } else {
            responseData = '[no response data]';
        }
    } catch {
        responseData = '[unserializable data]';
    }

    error.message = `Request error: ${error.message || 'Unknown error'}.\n${responseData}`;
};

const runOnRequestError = async (
    config: { onRequestError?: OnRequestError },
    info: RequestErrorInfo,
    context: RequestContextInfo,
): Promise<OnRequestErrorResult | void> => {
    if (!config.onRequestError) {
        return undefined;
    }

    const status = info.error.response?.status;

    if (status === 401) {
        const existing = retryLocks.get(config);
        if (existing) {
            return existing;
        }

        const pending = (async () => config.onRequestError!(info, context))();
        retryLocks.set(config, pending);
        try {
            return await pending;
        } finally {
            retryLocks.delete(config);
        }
    }

    return await config.onRequestError(info, context);
};

type ApiCallConfig = {
    baseUrl: string;
    authToken: () => string | Promise<string>;
    onRequestError?: OnRequestError;
    invalidateAuthToken: () => void;
};

const MAX_ATTEMPTS = 2;

const createApiCallWrapper = <C extends ApiCallConfig>(getBaseURL: (config: C) => string) => {
    return <Fn extends (...args: any[]) => Promise<AxiosResponse<any>>>(fn: Fn, config: C) => {
        const wrapped = async function (this: SDK, ...args: Parameters<Fn>) {
            const originalArgs = [...args] as Parameters<Fn>;

            for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
                const token = await config.authToken();

                const baseOptions: AxiosRequestConfig = {
                    baseURL: getBaseURL(config),
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                const finalArgs = [...originalArgs];
                const lastParamIndex = fn.length - 1;

                if (looksLikeAxiosRequestOptions(originalArgs[lastParamIndex])) {
                    finalArgs[lastParamIndex] = {
                        ...originalArgs[lastParamIndex],
                        ...baseOptions,
                        headers: {
                            ...(originalArgs[lastParamIndex]?.headers ?? {}),
                            Authorization: `Bearer ${token}`,
                        },
                    } as any;
                } else {
                    while (finalArgs.length < fn.length - 1) {
                        finalArgs.push(undefined as any);
                    }
                    finalArgs.push(baseOptions as any);
                }

                const requestConfig = (finalArgs[finalArgs.length - 1] ?? {}) as AxiosRequestConfig;

                try {
                    const res = await fn.call(this, ...(finalArgs as Parameters<Fn>));
                    return typeof res === 'object' && 'headers' in res ? (res as AxiosResponse).data : res;
                } catch (err) {
                    if (!axios.isAxiosError(err)) {
                        throw err;
                    }

                    enhanceAxiosError(err);

                    const context: RequestContextInfo = {
                        attempt,
                        request: cloneRequestConfig(requestConfig),
                    };
                    const handlerResult = await runOnRequestError(
                        config,
                        {
                            error: err,
                            response: toResponseInfo(err.response),
                        } satisfies RequestErrorInfo,
                        context,
                    );

                    const hasAttemptsRemaining = attempt < MAX_ATTEMPTS;
                    if (handlerResult?.retry && hasAttemptsRemaining) {
                        if (handlerResult.invalidateToken) {
                            config.invalidateAuthToken();
                        }

                        const backoffMs = handlerResult.backoffMs ?? 0;
                        if (backoffMs > 0) {
                            await delay(backoffMs);
                        }

                        continue;
                    }

                    throw err;
                }
            }

            throw new Error('Request error handling exceeded maximum attempts');
        };

        (wrapped as any).__isWrapped = true;
        return wrapped;
    };
};

export const wrapApiCall = createApiCallWrapper((config) => config.baseUrl);
export const wrapDirectoryApiCall = createApiCallWrapper((config) => config.baseUrl);

export const wrapApiCallNullable = <Fn extends (...args: any[]) => Promise<AxiosResponse<any>>>(
    fn: Fn,
): ((
    ...args: Parameters<Fn>
) => Promise<Awaited<ReturnType<Fn>> extends AxiosResponse<infer R, infer T> ? AxiosResponse<R | null, T> : never>) => {
    const wrapped = async (
        ...args: Parameters<Fn>
    ): Promise<
        Awaited<ReturnType<Fn>> extends AxiosResponse<infer R, infer T> ? AxiosResponse<R | null, T> : never
    > => {
        try {
            const res = (await fn(...args)) as Awaited<ReturnType<Fn>>;
            if (res && 'data' in res) {
                return { ...res, data: res.data } as any;
            }
            return res as any;
        } catch (err: any) {
            if (axios.isAxiosError(err) && err.response?.status === 404) {
                return {
                    ...(err.response || {}),
                    data: null,
                } as any;
            }
            throw err;
        }
    };

    return wrapped;
};

export const wrapCustomMethod = <Fn extends (...args: any[]) => any | Promise<any>>(fn: Fn): Fn => {
    (fn as any).__customMethodWrapper = true;
    return fn;
};

export const wrapApiCallDeep = <T, C extends ApiCallConfig>(
    obj: T,
    config: C,
    sdkContext?: Partial<SDK | DirectorySDK>,
    wrapper: <Fn extends (...args: any[]) => Promise<AxiosResponse<any>>>(fn: Fn, config: C) => any = wrapApiCall,
): DeepWrap<T> => {
    if (!isWrappedFn(obj) && !isCustomWrappedFn(obj) && typeof obj === 'function') {
        const wrapped: any = wrapper(obj as any, config);
        return sdkContext ? wrapped.bind(sdkContext) : wrapped;
    }

    if (typeof obj === 'function') {
        return sdkContext ? obj.bind(sdkContext) : obj;
    }

    if (typeof obj === 'object' && obj !== null) {
        const result: any = {};
        for (const [key, value] of Object.entries(obj)) {
            result[key] = wrapApiCallDeep(value, config, sdkContext, wrapper);
        }
        return result;
    }

    return obj as any;
};

export const wrapDirectoryApiCallDeep = <T, C extends ApiCallConfig>(
    obj: T,
    config: C,
    sdkContext?: Partial<DirectorySDK>,
): DeepWrap<T> => wrapApiCallDeep(obj, config, sdkContext, wrapDirectoryApiCall);

export const axiosMutator: <R>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
) => Promise<AxiosResponse<R>> = async (config, options) => {
    return axios.request({
        ...config,
        ...options,
        paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: 'repeat' });
        },
    });
};

export const useApi = <T extends ApiDefinitionTree<T>>(api: T): ApiDefinitionTree<T> => api;
