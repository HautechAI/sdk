import { wrapApiCallNullable } from '../../api';
import { CoreApi } from '../../api';

export const useBalancesApi = (hautechApi: CoreApi) => ({
    add: hautechApi.balancesControllerAddBalanceV1,
    get: hautechApi.balancesControllerGetBalanceForSelfV1,
    getByAccountId: wrapApiCallNullable(hautechApi.balancesControllerGetBalanceV1),
});
