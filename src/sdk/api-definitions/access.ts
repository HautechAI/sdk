import { CoreApi } from '../../api-utils';

export const useAccessApi = (hautechApi: CoreApi) => ({
    attach: hautechApi.accessControllerAttachAccessV1,
    detach: hautechApi.accessControllerDetachAccessV1,
    grant: hautechApi.accessControllerGrantAccessV1,
    revoke: hautechApi.accessControllerRevokeAccessV1,
    list: hautechApi.accessControllerAccessV1,
});
