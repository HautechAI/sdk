import { api, wrapApiCallNullable } from '../api';

export const apiDefinitions = {
    videos: {
        get: api.videosControllerGetVideoByIdV1,
        list: api.videosControllerGetVideosV1,
        startUpload: api.videosControllerStartUploadV1,
        finalizeUpload: api.videosControllerFinalizeUploadV1,
    },
    workflows: {
        create: api.workflowsControllerCreateWorkflowV1,
        get: api.workflowsControllerGetWorkflowV1,
        list: api.workflowsControllerListWorkflowsV1,
        update: api.workflowsControllerUpdateWorkflowV1,
    },
    storage: {
        create: api.storageControllerCreateRecordV1,
        getMany: api.storageControllerGetRecordsV1,
        delete: api.storageControllerDeleteRecordV1,
        update: api.storageControllerUpdateRecordV1,
    },
    stacks: {
        create: api.stacksControllerCreateStackV1,
        list: api.stacksControllerListStacksV1,
        get: wrapApiCallNullable(api.stacksControllerGetStackV1),
        updateMetadata: api.stacksControllerUpdateMetadataV1,
        items: {
            add: api.stacksControllerAddItemsV1,
            remove: api.stacksControllerRemoveItemsV1,
        },
    },
};
