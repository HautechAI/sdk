import { wrapApiCallNullable } from '../../api-utils';
import { CoreApi } from '../../api-utils';

export const useBalancesApi = (hautechApi: CoreApi) => ({
    add: hautechApi.balancesControllerAddBalanceV1,
    get: hautechApi.balancesControllerGetBalanceForSelfV1,
    getByAccountId: wrapApiCallNullable(hautechApi.balancesControllerGetBalanceV1),
});
