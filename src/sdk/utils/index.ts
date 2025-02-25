import { SDKOptions } from '../../types';

const utils = (options: SDKOptions) => {
    return {
        seed: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    };
};

export type AddMetadata<T extends { metadata: unknown }, M> = Omit<T, 'metadata'> & { metadata: M };

export default utils;
