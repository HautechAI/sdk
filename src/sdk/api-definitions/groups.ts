import { wrapApiCallNullable } from '../../api';
import { CoreApi } from '../../api';

export const useGroupsApi = (hautechApi: CoreApi) => ({
    create: hautechApi.groupsControllerCreateGroupV1,
    get: wrapApiCallNullable(hautechApi.groupsControllerGetGroupV1),
    delete: hautechApi.groupsControllerDeleteGroupV1,
    accounts: {
        add: hautechApi.groupsControllerAddAccountV1,
        remove: hautechApi.groupsControllerRemoveAccountV1,
    },
});
