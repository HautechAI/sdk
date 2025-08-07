import { SDKOptions } from './types';
import { io } from 'socket.io-client';

export interface Config {
    baseUrl: string;
    baseWsUrl: string;
    authToken: () => string | Promise<string>;
    wsConfig?: Parameters<typeof io>[1];
}

export const getConfig = (options: SDKOptions): Config => ({
    ...options,
    baseUrl: options.baseUrl ?? 'https://api.hautech.ai',
    baseWsUrl: options.baseWsUrl ?? options.baseUrl ?? 'https://api.hautech.ai',
});
