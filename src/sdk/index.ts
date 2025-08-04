import { SDK, SDKOptions } from '../types';
import { decodeJwt } from 'jose';
import { getConfig } from '../config';
import { wrapApiCallDeep } from '../api-utils';
import { apiDefinitions, getWsClientDefinitions } from './api';

export const createSDK = (options: SDKOptions): SDK => {
    let token: string | undefined = undefined;
    const config = getConfig(options);

    const authToken = config.authToken;
    const getAuthToken = async (): Promise<string> => {
        if (token) {
            const decoded = decodeJwt(token);
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp && decoded.exp > currentTime) return token;
        }

        token = await authToken();
        return token;
    };

    config.authToken = getAuthToken;

    const sdk: Partial<SDK> = {};

    const fullSdk = wrapApiCallDeep(apiDefinitions, config, sdk);
    Object.assign(sdk, fullSdk);

    const wsSdk = getWsClientDefinitions(config);
    Object.assign(sdk, wsSdk);

    return sdk as SDK;
};
