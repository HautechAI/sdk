import { CoreApi } from '../../api';

export const useVideos = (api: CoreApi) => {
    return {
        get: api.videos.videosControllerGetVideoByIdV1,
        list: api.videos.videosControllerGetVideosV1,
        startUpload: api.videos.videosControllerStartUploadV1,
        finalizeUpload: api.videos.videosControllerFinalizeUploadV1,
    };
};
