import { SDKOptions } from '../../types';

const utils = (options: SDKOptions) => {
    return {
        seed: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    };
};

export default utils;
