import access from './access';
import accounts from './accounts';
import balances from './balances';
import { ClientSDKOptions } from '../types';
import collections from './collections';
import groups from './groups';
import images from './images';
import { jwtDecode } from 'jwt-decode';
import operations from './operations';
import pipelines from './pipelines';
import poses from './poses';
import stacks from './stacks';
import storage from './storage';
import utils from './utils';

export const createClientSDK = (options: ClientSDKOptions) => {
    let token: string | undefined = undefined;
    const authToken = async (): Promise<string> => {
        if (token) {
            const decoded = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp && decoded.exp > currentTime) return token;
        }

        token = await options.authToken();
        return token;
    };
    const optionsWithTokenRefresher = { ...options, authToken };

    return {
        access: access(optionsWithTokenRefresher),
        accounts: accounts(optionsWithTokenRefresher),
        balances: balances(optionsWithTokenRefresher),
        collections: collections(optionsWithTokenRefresher),
        groups: groups(optionsWithTokenRefresher),
        images: images(optionsWithTokenRefresher),
        operations: operations(optionsWithTokenRefresher),
        pipelines: pipelines(optionsWithTokenRefresher),
        poses: poses(optionsWithTokenRefresher),
        stacks: stacks(optionsWithTokenRefresher),
        storage: storage(optionsWithTokenRefresher),
        utils: utils(optionsWithTokenRefresher),
    };
};
export type ClientSDK = ReturnType<typeof createClientSDK>;
