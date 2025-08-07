import { SDKOptions } from './types';

export interface Config {
    baseUrl: string;
    baseWsUrl: string;
    authToken: () => string | Promise<string>;
}

export const getConfig = (options: SDKOptions): Config => ({
    baseUrl: options.baseUrl ?? 'https://api.hautech.ai',
    baseWsUrl: options.baseWsUrl ?? options.baseUrl ?? 'https://api.hautech.ai',
    authToken: options.authToken,
});
