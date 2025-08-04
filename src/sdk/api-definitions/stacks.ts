import { wrapApiCallNullable } from '../../api-utils';
import { CoreApi } from '../../api-utils';

export const useStacksApi = (hautechApi: CoreApi) => ({
    create: hautechApi.stacksControllerCreateStackV1,
    list: hautechApi.stacksControllerListStacksV1,
    get: wrapApiCallNullable(hautechApi.stacksControllerGetStackV1),
    updateMetadata: hautechApi.stacksControllerUpdateMetadataV1,
    items: {
        add: hautechApi.stacksControllerAddItemsV1,
        remove: hautechApi.stacksControllerRemoveItemsV1,
    },
});
