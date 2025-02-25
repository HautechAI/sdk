import { SDKOptions, ListProps, ListResponse } from '../../types';
import { StackEntity, StacksApi } from '../../autogenerated';
import { useAutogeneratedAPI } from '../api';
import { transformToListResponse } from '../transformers';
import { StacksMetadata } from '../index';
import { AddMetadata } from '../utils';

type StackEntityWithMetadata = AddMetadata<StackEntity, StacksMetadata>;

const stacks = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: StacksApi, options });
    return {
        create: async (props: { metadata?: StacksMetadata } = {}): Promise<StackEntity> =>
            api.call({
                run: (methods) =>
                    methods.stacksControllerCreateStackV1({
                        metadata: props.metadata,
                    }),
            }),
        get: async (props: { id: string }): Promise<StackEntityWithMetadata | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.stacksControllerGetStackV1(props.id),
            }),
        list: async (props: ListProps = {}): Promise<ListResponse<StackEntityWithMetadata>> =>
            api.call({
                run: (methods) => methods.stacksControllerListStacksV1(props.orderBy, props.limit, props.cursor),
                transform: transformToListResponse,
            }),
        items: {
            add: async (props: { itemIds: string[]; stackId: string }): Promise<void> =>
                api.call({
                    run: (methods) => methods.stacksControllerAddItemsV1(props.stackId, { itemIds: props.itemIds }),
                }),
            remove: async (props: { itemIds: string[]; stackId: string }): Promise<void> =>
                api.call({
                    run: (methods) => methods.stacksControllerRemoveItemsV1(props.stackId, { itemIds: props.itemIds }),
                }),
        },
        updateMetadata: async (props: { id: string; metadata?: StacksMetadata }): Promise<void> =>
            api.call({
                run: (methods) =>
                    methods.stacksControllerUpdateMetadataV1(props.id, { overwrite: props.metadata ?? {} }),
            }),
    };
};

export default stacks;
