import { ClientSDKOptions, ListProps } from '../../types';
import { CollectionsApi } from '../../internal';
import { useInternalAPI } from '../api';

const collections = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: CollectionsApi, options });
    return {
        create: async (props: { metadata?: any } = {}) =>
            api.call({
                run: (methods) => methods.collectionsControllerCreateCollectionV1({ metadata: props.metadata }),
            }),
        get: async (props: { id: string }) =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.collectionsControllerGetCollectionV1(props.id),
            }),
        items: {
            add: async (props: { collectionId: string; itemIds: string[] }) =>
                api.call({
                    run: (methods) =>
                        methods.collectionsControllerAddItemsV1(props.collectionId, { itemIds: props.itemIds }),
                }),
            list: async (props: { collectionId: string } & ListProps) =>
                api.call({
                    run: (methods) =>
                        methods.collectionsControllerListItemsV1(
                            props.collectionId,
                            props.cursor,
                            props.orderBy,
                            props.limit,
                        ),
                }),
            remove: async (props: { collectionId: string; itemIds: string[] }) =>
                api.call({
                    run: (methods) =>
                        methods.collectionsControllerRemoveItemsV1(props.collectionId, { itemIds: props.itemIds }),
                }),
        },
        list: async (props: ListProps = {}) =>
            api.call({
                run: (methods) =>
                    methods.collectionsControllerListCollectionsV1(props.orderBy, props.limit, props.cursor),
            }),
        updateMetadata: async (props: { id: string; metadata?: any }) =>
            api.call({
                run: (methods) =>
                    methods.collectionsControllerUpdateMetadataV1(props.id, { overwrite: props.metadata }),
            }),
    };
};

export default collections;
