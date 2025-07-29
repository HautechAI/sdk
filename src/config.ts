import { SDKOptions } from './types';

export const getConfig = (options: SDKOptions) => ({
    baseUrl: options.baseUrl ?? 'https://api.hautech.ai',
    baseWsUrl: options.baseWsUrl ?? 'wss://api.hautech.ai',
    authToken: options.authToken,
});
