import { api } from '../api';

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
};
