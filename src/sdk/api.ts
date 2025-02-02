import { AxiosPromise } from 'axios';
import { BaseAPI } from '../autogenerated/base';
import { SDKOptions } from '../types';
import { Configuration } from '../autogenerated';

const getBaseUrl = (options: SDKOptions) => options.endpoint ?? 'https://api.hautech.ai';

export const useAutogeneratedAPI = <T extends BaseAPI>(baseProps: {
    API: new (configuration?: Configuration, basePath?: string, axios?: any) => T;
    options: SDKOptions;
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

        try {
            const response = await props.run(api);
            if (props.returnUndefinedOn404 && response.status === 404) return undefined as any;
            if (response.status < 200 || response.status >= 300) throw new Error(response.statusText);
            return props.transform ? props.transform(response.data) : (response.data as unknown as ReturnType);
        } catch (error: any) {
            if (props.returnUndefinedOn404 && error?.response?.status === 404) return undefined as any;
            throw error;
        }
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
