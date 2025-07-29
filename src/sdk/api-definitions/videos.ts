import { api, wrapApiCall } from '../../api';
import { Config } from '../../config';

export const useVideos = (config: Config) => {
    return {
        get: wrapApiCall(api.videosControllerGetVideoByIdV1, config),
        list: wrapApiCall(api.videosControllerGetVideosV1, config),
        startUpload: wrapApiCall(api.videosControllerStartUploadV1, config),
        finalizeUpload: wrapApiCall(api.videosControllerFinalizeUploadV1, config),
    };
};
