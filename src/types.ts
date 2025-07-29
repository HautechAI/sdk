export interface SDKOptions {
    authToken: () => string | Promise<string>;
    baseUrl?: string;
    baseWsUrl?: string;
}
