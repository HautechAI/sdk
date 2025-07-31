import { wrapApiCallNullable } from '../../api';
import { CoreApi } from '../../api';

export const useCollectionsApi = (hautechApi: CoreApi) => ({
    create: hautechApi.collectionsControllerCreateCollectionV1,
    get: wrapApiCallNullable(hautechApi.collectionsControllerGetCollectionV1),
    list: hautechApi.collectionsControllerListCollectionsV1,
    updateMetadata: hautechApi.collectionsControllerUpdateMetadataV1,
    items: {
        add: hautechApi.collectionsControllerAddItemsV1,
        remove: hautechApi.collectionsControllerRemoveItemsV1,
        list: hautechApi.collectionsControllerListItemsV1,
    },
});
