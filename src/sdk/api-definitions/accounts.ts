import { useApi, wrapApiCallNullable } from '../../api-utils';
import { CoreApi } from '../../api-utils';

export const useAccountsApi = (hautechApi: CoreApi) =>
    useApi({
        create: hautechApi.accountsControllerCreateAccountV1,
        get: wrapApiCallNullable(hautechApi.accountsControllerGetAccountV1),
        self: hautechApi.accountsControllerGetSelfV1,
        edit: hautechApi.accountsControllerUpdateAccountV1,
        getByAlias: wrapApiCallNullable(hautechApi.accountsControllerGetAccountByAliasV1),
        list: hautechApi.accountsControllerListAccountsV1,
    });
