import { DirectorySDKOptions, OnRequestError, SDKOptions } from './types';
import { io } from 'socket.io-client';

export interface Config {
    baseUrl: string;
    baseWsUrl: string;
    authToken: () => string | Promise<string>;
    wsConfig?: Parameters<typeof io>[1];
    onRequestError?: OnRequestError;
    invalidateAuthToken: () => void;
}

export interface DirectoryConfig {
    baseUrl: string;
    authToken: () => string | Promise<string>;
    onRequestError?: OnRequestError;
    invalidateAuthToken: () => void;
}

export const getConfig = (options: SDKOptions): Config => ({
    ...options,
    baseUrl: options.baseUrl ?? 'https://api.hautech.ai',
    baseWsUrl: options.baseWsUrl ?? options.baseUrl ?? 'https://api.hautech.ai',
    onRequestError: options.onRequestError,
    invalidateAuthToken: () => undefined,
});

export const getDirectoryConfig = (options: DirectorySDKOptions): DirectoryConfig => ({
    baseUrl: options.baseUrl ?? 'https://api-directory.hautech.ai',
    authToken: options.authToken,
    onRequestError: options.onRequestError,
    invalidateAuthToken: () => undefined,
});
