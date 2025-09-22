import { DirectorySDKOptions, SDKOptions } from './types';
import { io } from 'socket.io-client';

export interface Config {
    baseUrl: string;
    baseWsUrl: string;
    authToken: () => string | Promise<string>;
    wsConfig?: Parameters<typeof io>[1];
}

export interface DirectoryConfig {
    baseUrl: string;
    authToken: () => string | Promise<string>;
}

export const getConfig = (options: SDKOptions): Config => ({
    ...options,
    baseUrl: options.baseUrl ?? 'https://api.hautech.ai',
    baseWsUrl: options.baseWsUrl ?? options.baseUrl ?? 'https://api.hautech.ai',
});

export const getDirectoryConfig = (options: DirectorySDKOptions): DirectoryConfig => ({
    baseUrl: options.baseUrl ?? 'https://api-directory.hautech.ai',
    authToken: options.authToken,
});
