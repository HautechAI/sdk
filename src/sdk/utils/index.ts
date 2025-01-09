import { ClientSDKOptions } from '../../types';

const utils = (options: ClientSDKOptions) => {
    return {
        seed: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    };
};

export default utils;
