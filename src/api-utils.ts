import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as qs from 'qs';
import { ApiDefinitionTree, DeepWrap, SDK, DirectorySDK } from './types';

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

const createApiCallWrapper = <C extends { baseUrl: string; authToken: () => string | Promise<string> }>(
    getBaseURL: (config: C) => string,
) => {
    return <Fn extends (...args: any[]) => Promise<AxiosResponse<any>>>(fn: Fn, config: C) => {
        const wrapped = async function (this: SDK, ...args: Parameters<Fn>) {
            const token = await config.authToken();
            const baseOptions: AxiosRequestConfig = {
                baseURL: getBaseURL(config),
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const finalArgs = [...args];
            const lastParamIndex = fn.length - 1;

            if (looksLikeAxiosRequestOptions(args[lastParamIndex])) {
                finalArgs[lastParamIndex] = {
                    ...args[lastParamIndex],
                    ...baseOptions,
                    headers: {
                        ...(args[lastParamIndex]?.headers ?? {}),
                        Authorization: `Bearer ${token}`,
                    },
                };
            } else {
                while (finalArgs.length < fn.length - 1) {
                    finalArgs.push(undefined);
                }
                finalArgs.push(baseOptions);
            }

            try {
                const res = await fn.call(this, ...finalArgs);
                return typeof res === 'object' && 'headers' in res ? res.data : res;
            } catch (err: any) {
                if (axios.isAxiosError(err)) {
                    let responseData: string;

                    try {
                        responseData =
                            err.response?.data?.message ??
                            (typeof err.response?.data === 'string'
                                ? err.response.data
                                : JSON.stringify(err.response?.data));
                    } catch {
                        responseData = '[unserializable data]';
                    }

                    err.message = `Request error: ${err.message || 'Unknown error'}.\n${responseData}`;
                }
                throw err;
            }
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

export const wrapApiCallDeep = <T, C extends { baseUrl: string; authToken: () => string | Promise<string> }>(
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

export const wrapDirectoryApiCallDeep = <T, C extends { baseUrl: string; authToken: () => string | Promise<string> }>(
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
