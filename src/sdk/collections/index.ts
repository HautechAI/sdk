import { SDKOptions, ListProps, ListResponse } from '../../types';
import {
    CollectionEntity,
    CollectionsApi,
    CollectionsControllerListItemsV1KindEnum,
    ResourceEntity,
} from '../../autogenerated';
import { useAutogeneratedAPI } from '../api';
import { transformToListResponse } from '../transformers';
import { CollectionsMetadata } from '../index';
import { AddMetadata } from '../utils';

type CollectionEntityWithMetadata = AddMetadata<CollectionEntity, CollectionsMetadata>;

const collections = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: CollectionsApi, options });
    return {
        create: async (props: { metadata?: CollectionsMetadata } = {}): Promise<CollectionEntityWithMetadata> =>
            api.call({
                run: (methods) => methods.collectionsControllerCreateCollectionV1({ metadata: props.metadata }),
            }),
        get: async (props: { id: string }): Promise<CollectionEntityWithMetadata | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.collectionsControllerGetCollectionV1(props.id),
            }),
        items: {
            add: async (props: { collectionId: string; itemIds: string[] }): Promise<void> =>
                api.call({
                    run: (methods) =>
                        methods.collectionsControllerAddItemsV1(props.collectionId, { itemIds: props.itemIds }),
                }),
            list: async (
                props: { collectionId: string; kind?: CollectionsControllerListItemsV1KindEnum } & ListProps,
            ): Promise<ListResponse<ResourceEntity>> =>
                api.call({
                    run: (methods) =>
                        methods.collectionsControllerListItemsV1(
                            props.collectionId,
                            props.cursor,
                            props.orderBy,
                            props.limit,
                            props.kind,
                        ),
                    transform: transformToListResponse,
                }),
            remove: async (props: { collectionId: string; itemIds: string[] }): Promise<void> =>
                api.call({
                    run: (methods) =>
                        methods.collectionsControllerRemoveItemsV1(props.collectionId, { itemIds: props.itemIds }),
                }),
        },
        list: async (props: ListProps = {}): Promise<ListResponse<CollectionEntityWithMetadata>> =>
            api.call({
                run: (methods) =>
                    methods.collectionsControllerListCollectionsV1(props.orderBy, props.limit, props.cursor),
                transform: transformToListResponse,
            }),
        updateMetadata: async (props: { id: string; metadata?: Partial<CollectionsMetadata> }): Promise<void> =>
            api.call({
                run: (methods) =>
                    methods.collectionsControllerUpdateMetadataV1(props.id, { overwrite: props.metadata ?? {} }),
            }),
    };
};

export default collections;
