import { wrapApiCallNullable } from '../../api-utils';
import { CoreApi } from '../../api-utils';

export const useGroupsApi = (hautechApi: CoreApi) => ({
    create: hautechApi.groupsControllerCreateGroupV1,
    get: wrapApiCallNullable(hautechApi.groupsControllerGetGroupV1),
    delete: hautechApi.groupsControllerDeleteGroupV1,
    accounts: {
        add: hautechApi.groupsControllerAddAccountV1,
        remove: hautechApi.groupsControllerRemoveAccountV1,
    },
});
