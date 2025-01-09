import axios, { AxiosPromise } from 'axios';
import { BaseAPI } from './internal/base';
import { ClientSDKOptions } from './types';
import { Configuration } from './internal';
import Pusher from 'pusher-js';

const getBaseUrl = (options: ClientSDKOptions) => options.endpoint ?? 'https://api.hautech.ai';

export const useInternalAPI = <T extends BaseAPI>(baseProps: {
    API: new (configuration?: Configuration, basePath?: string, axios?: any) => T;
    options: ClientSDKOptions;
}) => {
    const getAPI = async () => {
        const config = {
            accessToken: await baseProps.options.authToken(),
            basePath: getBaseUrl(baseProps.options),
            isJsonMime: (mime: string) => true,
        };
        return new baseProps.API(config);
    };

    const call = async <ResponseEntity, ReturnType = ResponseEntity>(props: {
        returnUndefinedOn404?: boolean;
        run: (api: T) => AxiosPromise<ResponseEntity>;
        transform?: (response: ResponseEntity) => ReturnType;
    }): Promise<ReturnType> => {
        const api = await getAPI();
        const response = await props.run(api);

        if (props.returnUndefinedOn404 && response.status === 404) return undefined as any;
        if (response.status < 200 || response.status >= 300) throw new Error(response.statusText);
        return props.transform ? props.transform(response.data) : (response.data as unknown as ReturnType);
    };
    const callWithReturningUndefinedOn404 = async <ResponseEntity, ReturnType = ResponseEntity>(props: {
        run: (api: T) => AxiosPromise<ResponseEntity>;
        transform?: (response: ResponseEntity) => ReturnType;
    }): Promise<ReturnType | undefined> => call({ ...props, returnUndefinedOn404: true });

    return {
        call,
        callWithReturningUndefinedOn404,
    };
};

export const createAPI = (options: ClientSDKOptions) => {
    const baseUrl = getBaseUrl(options);

    const getFullUrl = (endpoint: string) => `${baseUrl}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
    const getHeaders = async () => ({ Authorization: `Bearer ${await options.authToken()}` });

    return {
        delete: async (endpoint: string, data: any = {}) => {
            const response = await axios.delete(getFullUrl(endpoint), { data, headers: await getHeaders() });
            return response.data;
        },
        get: async (endpoint: string, params: any = {}) => {
            const response = await axios.get(getFullUrl(endpoint), { headers: await getHeaders(), params });
            return response.data;
        },
        post: async (endpoint: string, data: any = {}) => {
            const response = await axios.post(getFullUrl(endpoint), data, { headers: await getHeaders() });
            return response.data;
        },
        put: async (endpoint: string, data: any = {}) => {
            const response = await axios.put(getFullUrl(endpoint), data, { headers: await getHeaders() });
            return response.data;
        },
    };
};

export const createWebsocket = async (props: {
    callback: (data: any) => void;
    options: ClientSDKOptions;
    topic: string;
}) => {
    const api = createAPI(props.options);
    const baseUrl = getBaseUrl(props.options);
    const pusherSettings = await api.get('/websocket/settings');

    const pusher = new Pusher(pusherSettings.key, {
        channelAuthorization: {
            endpoint: `${baseUrl}/websocket/auth`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${await props.options.authToken()}`,
            },
            transport: 'ajax',
        },
        cluster: pusherSettings.cluster,
        forceTLS: true,
    });

    const channel = pusher.subscribe(`private-user-${pusherSettings.userId?.replace('|', '_')}`);
    channel.bind('pusher:subscription_succeeded', () => console.log(`Subscribed to ${props.topic} updates`));
    channel.bind('pusher:subscription_error', (data: any) => console.error(data));
    channel.bind(props.topic, (data: any) => props.callback(data));
};
