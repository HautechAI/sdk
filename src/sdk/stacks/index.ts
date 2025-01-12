import { ClientSDKOptions, ListProps } from '../../types';
import { StacksApi } from '../../internal';
import { useInternalAPI } from '../api';

const stacks = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: StacksApi, options });
    return {
        create: async (props: { metadata?: any } = {}) =>
            api.call({
                run: (methods) =>
                    methods.stacksControllerCreateStackV1({
                        metadata: props.metadata,
                    }),
            }),
        get: async (props: { id: string }) =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.stacksControllerGetStackV1(props.id),
            }),
        list: async (props: ListProps = {}) =>
            api.call({
                run: (methods) => methods.stacksControllerListStacksV1(props.orderBy, props.limit, props.cursor),
            }),
        operations: {
            add: async (props: { operationIds: string[]; stackId: string }): Promise<void> =>
                api.call({
                    run: (methods) =>
                        methods.stacksControllerAddOperationsV1(props.stackId, { operationIds: props.operationIds }),
                }),
            remove: async (props: { operationIds: string[]; stackId: string }) =>
                api.call({
                    run: (methods) =>
                        methods.stacksControllerRemoveOperationV1(props.stackId, { operationIds: props.operationIds }),
                }),
        },
        updateMetadata: async (props: { id: string; metadata?: any }) =>
            api.call({
                run: (methods) => methods.stacksControllerUpdateMetadataV1(props.id, { overwrite: props.metadata }),
            }),
    };
};

export default stacks;
