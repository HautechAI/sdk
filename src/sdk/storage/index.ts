import { SDKOptions } from '../../types';
import { StorageApi } from '../../autogenerated';
import { useAutogeneratedAPI } from '../api';

const storage = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: StorageApi, options });
    return {
        create: async (props: { key: string; value: any }): Promise<any> =>
            api.call({
                run: (methods) =>
                    methods.storageControllerCreateRecordV1({
                        key: props.key,
                        value: props.value,
                    }),
            }),
        delete: async (props: { key: string }): Promise<void> =>
            api.call({
                run: (methods) => methods.storageControllerDeleteRecordV1({ key: props.key }),
            }),
        getMany: async (props: { keys: string[] }): Promise<Record<string, any>> =>
            api.call({
                run: (methods) => methods.storageControllerGetRecordsV1({ keys: props.keys }),
                transform: (response) =>
                    response.reduce(
                        (acc, item) => {
                            acc[item.key] = item.value;
                            return acc;
                        },
                        {} as Record<string, any>,
                    ),
            }),
        update: async (props: { key: string; value: any }): Promise<any> =>
            api.call({
                run: (methods) => methods.storageControllerUpdateRecordV1({ key: props.key, value: props.value }),
            }),
    };
};

export default storage;
