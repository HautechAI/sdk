import { ClientSDKOptions } from '../../types';
import { StorageApi } from '../../internal';
import { useInternalAPI } from '../../api';

const storage = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: StorageApi, options });
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
        getMany: async (props: { keys: string[] }) =>
            api.call({
                run: (methods) => methods.storageControllerGetRecordsV1({ keys: props.keys }),
            }),
        update: async (props: { key: string; value: any }): Promise<any> =>
            api.call({
                run: (methods) => methods.storageControllerUpdateRecordV1({ key: props.key, value: props.value }),
            }),
    };
};

export default storage;
