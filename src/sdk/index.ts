import { SDKOptions } from '../types';
import { decodeJwt } from 'jose';
import { getConfig } from '../config';
import { useApi } from '../api';
import { useWorkflows } from './api-definitions/workflows';
import { useVideos } from './api-definitions/videos';

export const createSDK = (options: SDKOptions) => {
    let token: string | undefined = undefined;
    const config = getConfig(options);

    const getAuthToken = async (): Promise<string> => {
        if (token) {
            const decoded = decodeJwt(token);
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp && decoded.exp > currentTime) return token;
        }

        token = await config.authToken();
        return token;
    };

    const api = useApi({
        baseUrl: config.baseUrl,
        accessToken: getAuthToken(),
    });

    return {
        workflows: useWorkflows(api),
        videos: useVideos(api),
    };
};

export type SDK = ReturnType<typeof createSDK>;
