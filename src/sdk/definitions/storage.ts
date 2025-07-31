import { CoreApi } from '../../api';

export const useStorageApi = (hautechApi: CoreApi) => ({
    create: hautechApi.storageControllerCreateRecordV1,
    getMany: hautechApi.storageControllerGetRecordsV1,
    delete: hautechApi.storageControllerDeleteRecordV1,
    update: hautechApi.storageControllerUpdateRecordV1,
});