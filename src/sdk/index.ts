import accounts from './accounts';
import balances from './balances';
import { SDKOptions } from '../types';
import collections from './collections';
import groups from './groups';
import images from './images';
import jwt from 'jsonwebtoken';
import operations from './operations';
import stacks from './stacks';
import storage from './storage';
import utils from './utils';

export const createSDK = (options: SDKOptions) => {
    let token: string | undefined = undefined;
    const authToken = async (): Promise<string> => {
        if (token) {
            const decoded = jwt.decode(token) as jwt.JwtPayload;
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp && decoded.exp > currentTime) return token;
        }

        token = await options.authToken();
        return token;
    };
    const optionsWithTokenRefresher = { ...options, authToken };

    return {
        accounts: accounts(optionsWithTokenRefresher),
        balances: balances(optionsWithTokenRefresher),
        collections: collections(optionsWithTokenRefresher),
        groups: groups(optionsWithTokenRefresher),
        images: images(optionsWithTokenRefresher),
        operations: operations(optionsWithTokenRefresher),
        stacks: stacks(optionsWithTokenRefresher),
        storage: storage(optionsWithTokenRefresher),
        utils: utils(optionsWithTokenRefresher),
    };
};
export type SDK = ReturnType<typeof createSDK>;
