import { ClientSDKOptions, ListProps } from '../../types';
import createOperationUpdater from './updater';
import {
    InputAngleEnum,
    InputBackgroundEnum,
    InputEthnicityEnum,
    InputGenderEnum,
    InputPhotoTypeEnum,
    OperationsApi,
} from '../../internal';
import { useInternalAPI } from '../../api';

const operations = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: OperationsApi, options });
    const updates = createOperationUpdater(options);

    return {
        create: {
            constructPrompt: {
                v1: (props: {
                    angle?: InputAngleEnum;
                    background?: InputBackgroundEnum;
                    ethnicity?: InputEthnicityEnum;
                    gender?: InputGenderEnum;
                    photoType?: InputPhotoTypeEnum;
                    productDescription?: string;
                    prompt?: string;
                }) =>
                    api.call({
                        run: (methods) =>
                            methods.operationsControllerRunConstructPromptV1V1({
                                angle: props.angle,
                                background: props.background,
                                ethnicity: props.ethnicity,
                                gender: props.gender,
                                photoType: props.photoType,
                                productDescription: props.productDescription,
                                prompt: props.prompt,
                            }),
                    }),
            },
        },
        get: (props: { id: string }) =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.operationsControllerGetOperationV1(props.id),
            }),
        getMany: (props: { ids: string[] }) =>
            api.call({
                run: (methods) => methods.operationsControllerGetOperationsV1({ ids: props.ids }),
            }),
        list: (props: ListProps = {}) =>
            api.call({
                run: (methods) =>
                    methods.operationsControllerListOperationsV1(props.orderBy, props.limit, props.cursor),
            }),
        update: async (props: { id: string; metadata?: any }) =>
            api.call({
                run: (methods) => methods.operationsControllerUpdateMetadataV1(props.id, { overwrite: props.metadata }),
            }),
        updates,
        wait: async (props: { id: string; timeoutInSeconds?: number }) =>
            new Promise((resolve, reject) => {
                const initialDelay = 5000;
                const delay = 2000;

                const listenToOperation = (operation: { id: string }) => {
                    if (operation.id === props.id) {
                        clearTimeout(timeoutId);
                        resolve(operation);
                        updates.unsubscribe({ callback: listenToOperation });
                    }
                };
                updates.subscribe({ callback: listenToOperation });

                let timeoutId: NodeJS.Timeout;
                const poll = async () => {
                    const operation = await api.call({
                        run: (methods) => methods.operationsControllerGetOperationV1(props.id),
                    });
                    if (operation.status !== 'pending') return resolve(operation);
                    timeoutId = setTimeout(poll, delay);
                    updates.unsubscribe({ callback: listenToOperation });
                };
                timeoutId = setTimeout(poll, initialDelay);
            }),
    };
};

export default operations;
