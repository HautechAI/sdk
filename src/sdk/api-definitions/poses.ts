import { wrapApiCallNullable } from '../../api-utils';
import { CoreApi } from '../../api-utils';

export const usePosesApi = (hautechApi: CoreApi) => ({
    get: wrapApiCallNullable(hautechApi.posesControllerGetPoseV1),
    list: hautechApi.posesControllerListPosesV1,
    setPreview: hautechApi.posesControllerSetPosePreviewV1,
    updateMetadata: hautechApi.posesControllerUpdateMetadataV1,
});
