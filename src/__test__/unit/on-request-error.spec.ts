import { describe, expect, it, vi, afterEach } from 'vitest';
import { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { wrapApiCall, wrapApiCallNullable } from '../../api-utils';

const createAxiosResponse = <T>(data: T, status = 200): AxiosResponse<T> => ({
    data,
    status,
    statusText: 'OK',
    headers: {},
    config: {
        headers: new (require('axios').AxiosHeaders)(),
    } as any,
});

const createAxiosError = (status: number, message = 'error', data?: unknown): AxiosError => {
    const response: AxiosResponse = {
        data: data ?? { message },
        status,
        statusText: 'Error',
        headers: {},
        config: {
            headers: new (require('axios').AxiosHeaders)(),
        } as any,
    };

    const error = new AxiosError(message, undefined, {
        headers: new (require('axios').AxiosHeaders)(),
    } as any, undefined, response);
    error.response = response;
    error.status = status;
    return error;
};

const createConfig = (overrides: Partial<Parameters<typeof wrapApiCall>[1]> = {}) => {
    const authToken = overrides.authToken ?? vi.fn().mockResolvedValue('token-1');
    const invalidateAuthToken = overrides.invalidateAuthToken ?? vi.fn();

    return {
        baseUrl: 'https://api.example.com',
        authToken,
        onRequestError: overrides.onRequestError,
        invalidateAuthToken,
    } as any as Parameters<typeof wrapApiCall>[1];
};

describe('onRequestError hook', () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it('retries once on 401 and invalidates the token cache when handler requests retry', async () => {
        const axiosFn = vi
            .fn()
            .mockRejectedValueOnce(createAxiosError(401, 'unauthorized'))
            .mockResolvedValueOnce(createAxiosResponse({ ok: true }));

        const authToken = vi
            .fn()
            .mockResolvedValueOnce('token-initial')
            .mockResolvedValueOnce('token-refreshed');

        const handler = vi.fn().mockImplementation(async ({ error }, { request, attempt }) => {
            expect(error.status).toBe(401);
            expect(request.headers?.Authorization).toBe('Bearer token-initial');
            expect(attempt).toBe(1);
            return { retry: true, invalidateToken: true };
        });

        const config = createConfig({ authToken, onRequestError: handler });

        const wrapped = wrapApiCall(axiosFn as any, config) as any;

        const result = await wrapped();

        expect(result).toEqual({ ok: true });
        expect(authToken).toHaveBeenCalledTimes(2);
        expect(config.invalidateAuthToken).toHaveBeenCalledTimes(1);
        expect(handler).toHaveBeenCalledTimes(1);

        const firstAttemptConfig = axiosFn.mock.calls[0][axiosFn.mock.calls[0].length - 1] as AxiosRequestConfig;
        const secondAttemptConfig = axiosFn.mock.calls[1][axiosFn.mock.calls[1].length - 1] as AxiosRequestConfig;

        expect(firstAttemptConfig.headers?.Authorization).toBe('Bearer token-initial');
        expect(secondAttemptConfig.headers?.Authorization).toBe('Bearer token-refreshed');
    });

    it('runs the error handler once for concurrent 401 responses', async () => {
        const axiosFn = vi
            .fn()
            .mockRejectedValueOnce(createAxiosError(401, 'unauthorized-1'))
            .mockRejectedValueOnce(createAxiosError(401, 'unauthorized-2'))
            .mockResolvedValueOnce(createAxiosResponse({ ok: true }))
            .mockResolvedValueOnce(createAxiosResponse({ ok: true }));

        const authToken = vi
            .fn()
            .mockResolvedValueOnce('token-a')
            .mockResolvedValueOnce('token-b')
            .mockResolvedValueOnce('token-c')
            .mockResolvedValueOnce('token-d');

        const onRequestError = vi.fn().mockResolvedValue({ retry: true, invalidateToken: true });

        const config = createConfig({ authToken, onRequestError });

        const wrapped = wrapApiCall(axiosFn as any, config) as any;

        const [first, second] = await Promise.all([wrapped(), wrapped()]);

        expect(first).toEqual({ ok: true });
        expect(second).toEqual({ ok: true });
        expect(onRequestError).toHaveBeenCalledTimes(1);
        expect(authToken).toHaveBeenCalledTimes(4);
    });

    it('respects backoffMs before retrying', async () => {
        vi.useFakeTimers();

        const axiosFn = vi
            .fn()
            .mockRejectedValueOnce(createAxiosError(500, 'server-error'))
            .mockResolvedValueOnce(createAxiosResponse({ ok: true }));

        const onRequestError = vi.fn().mockResolvedValue({ retry: true, backoffMs: 500 });
        const config = createConfig({ onRequestError });

        const wrapped = wrapApiCall(axiosFn as any, config) as any;
        const promise = wrapped();

        await Promise.resolve();
        expect(axiosFn).toHaveBeenCalledTimes(1);

        await vi.advanceTimersByTimeAsync(400);
        expect(axiosFn).toHaveBeenCalledTimes(1);

        await vi.advanceTimersByTimeAsync(100);
        await promise;

        expect(axiosFn).toHaveBeenCalledTimes(2);
        expect(onRequestError).toHaveBeenCalledTimes(1);
    });

    it('propagates non-401 errors when handler does not retry', async () => {
        const axiosError = createAxiosError(500, 'server');
        const axiosFn = vi
            .fn()
            .mockRejectedValueOnce(axiosError);

        const onRequestError = vi.fn().mockResolvedValue({ retry: false });
        const config = createConfig({ onRequestError });

        const wrapped = wrapApiCall(axiosFn as any, config) as any;

        await expect(wrapped()).rejects.toMatchObject({
            message: expect.stringContaining('Request error: server'),
        });

        expect(onRequestError).toHaveBeenCalledTimes(1);
    });

    it('preserves nullable 404 handling when using wrapApiCallNullable', async () => {
        const axiosFn = vi
            .fn()
            .mockRejectedValueOnce(createAxiosError(404, 'not-found', { message: 'not found' }));

        const nullableWrapped = wrapApiCallNullable(axiosFn as any);
        const onRequestError = vi.fn();
        const config = createConfig({ onRequestError });
        const wrapped = wrapApiCall(nullableWrapped as any, config) as any;

        const result = await wrapped();

        expect(result).toBeNull();
        expect(onRequestError).not.toHaveBeenCalled();
        expect(config.invalidateAuthToken).not.toHaveBeenCalled();
    });

    it('invalidates token cache when handler opts not to retry', async () => {
        const axiosFn = vi
            .fn()
            .mockRejectedValueOnce(createAxiosError(401, 'unauthorized'))
            .mockResolvedValueOnce(createAxiosResponse({ ok: true }));

        let issuedToken = 'token-initial';
        const authToken = vi.fn().mockImplementation(async () => issuedToken);
        const invalidateAuthToken = vi.fn().mockImplementation(() => {
            issuedToken = 'token-refreshed';
        });
        const onRequestError = vi.fn().mockResolvedValue({ retry: false, invalidateToken: true });

        const config = createConfig({ authToken, onRequestError, invalidateAuthToken });
        const wrapped = wrapApiCall(axiosFn as any, config) as any;

        await expect(wrapped()).rejects.toMatchObject({ message: expect.stringContaining('unauthorized') });
        expect(invalidateAuthToken).toHaveBeenCalledTimes(1);

        const secondResult = await wrapped();

        expect(secondResult).toEqual({ ok: true });
        expect(authToken).toHaveBeenCalledTimes(2);

        const firstAttemptConfig = axiosFn.mock.calls[0][axiosFn.mock.calls[0].length - 1] as AxiosRequestConfig;
        const secondAttemptConfig = axiosFn.mock.calls[1][axiosFn.mock.calls[1].length - 1] as AxiosRequestConfig;

        expect(firstAttemptConfig.headers?.Authorization).toBe('Bearer token-initial');
        expect(secondAttemptConfig.headers?.Authorization).toBe('Bearer token-refreshed');
    });

    it('invalidates token cache even when retry fails', async () => {
        const axiosFn = vi
            .fn()
            .mockRejectedValueOnce(createAxiosError(401, 'unauthorized'))
            .mockRejectedValueOnce(createAxiosError(500, 'server-error'));

        let issuedToken = 'token-initial';
        const authToken = vi.fn().mockImplementation(async () => issuedToken);
        const invalidateAuthToken = vi.fn().mockImplementation(() => {
            issuedToken = 'token-refreshed';
        });
        const onRequestError = vi
            .fn()
            .mockResolvedValueOnce({ retry: true, invalidateToken: true })
            .mockResolvedValueOnce({ retry: false, invalidateToken: true });

        const config = createConfig({ authToken, onRequestError, invalidateAuthToken });
        const wrapped = wrapApiCall(axiosFn as any, config) as any;

        await expect(wrapped()).rejects.toMatchObject({ message: expect.stringContaining('server-error') });

        expect(onRequestError).toHaveBeenCalledTimes(2);
        expect(invalidateAuthToken).toHaveBeenCalledTimes(2);
        expect(authToken).toHaveBeenCalledTimes(2);

        const firstAttemptConfig = axiosFn.mock.calls[0][axiosFn.mock.calls[0].length - 1] as AxiosRequestConfig;
        const secondAttemptConfig = axiosFn.mock.calls[1][axiosFn.mock.calls[1].length - 1] as AxiosRequestConfig;

        expect(firstAttemptConfig.headers?.Authorization).toBe('Bearer token-initial');
        expect(secondAttemptConfig.headers?.Authorization).toBe('Bearer token-refreshed');
    });
});
