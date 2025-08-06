import { CoreApi, useApi, wrapApiCallNullable, wrapCustomMethod } from '../../api-utils';
import { SDK } from '../../types';

export const useBalancesApi = (hautechApi: CoreApi) =>
    useApi({
        add: hautechApi.balancesControllerAddBalanceV1,
        get: hautechApi.balancesControllerGetBalanceForSelfV1,
        getByAccountId: wrapApiCallNullable(hautechApi.balancesControllerGetBalanceV1),
        getCurrentValue: wrapCustomMethod(async function (this: any, accountId?: string): Promise<string> {
            const sdk: SDK = this;

            if (accountId) {
                const balance = await sdk.balances.getByAccountId(accountId);

                return balance?.balance || '0';
            } else {
                const balance = await sdk.balances.get();
                return balance?.balance || '0';
            }
        }),
    });
