import { AxiosResponse } from 'axios';
import { apiDefinitions, getWsClientDefinitions, pipelineDefinitions } from './sdk/api';
import { io } from 'socket.io-client';

export interface SDKOptions {
    authToken: () => string | Promise<string>;
    baseUrl?: string;
    baseWsUrl?: string;
    wsConfig?: Parameters<typeof io>[1];
}

export type ApiDefinitionTree<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : T[K] extends object ? ApiDefinitionTree<T[K]> : never;
};

export type DeepWrap<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => Promise<AxiosResponse<infer R>>
        ? (...args: A) => Promise<R>
        : T[K] extends (...args: any[]) => any
          ? T[K]
          : T[K] extends object
            ? DeepWrap<T[K]>
            : T[K];
};

export type SDK = DeepWrap<typeof apiDefinitions & ReturnType<typeof getWsClientDefinitions>>;
export type PipelineSDK = DeepWrap<typeof pipelineDefinitions>;
