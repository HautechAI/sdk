import { AxiosResponse } from 'axios';
import api from './sdk/api-definitions';

export interface SDKOptions {
    authToken: () => string | Promise<string>;
    baseUrl?: string;
    baseWsUrl?: string;
}

export type DeepWrap<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => Promise<AxiosResponse<infer R>>
        ? (...args: A) => Promise<R>
        : T[K] extends (...args: any[]) => any
          ? T[K]
          : T[K] extends object
            ? DeepWrap<T[K]>
            : T[K];
};

export type SDK = DeepWrap<typeof api>;
