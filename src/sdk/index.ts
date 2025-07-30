import { SDKOptions } from '../types';
import { decodeJwt } from 'jose';
import { getConfig } from '../config';
import { wrapApiCallDeep } from '../api';
import { apiDefinitions } from './api-definitions';

export const createSDK = (options: SDKOptions) => {
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

    return wrapApiCallDeep(apiDefinitions, config);
};

export type SDK = ReturnType<typeof createSDK>;
