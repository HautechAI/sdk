import { describe, it, expect } from '@jest/globals';
import { recreateSdk } from './utils';
import { SDK } from '../src';

describe('Balances', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('should return balance on get self', async () => {
        const balance = await sdk.balances.get();
        expect(balance).toBeDefined();
    });

    it('should add balance on add', async () => {
        const account = await sdk.accounts.create();
        const balanceBefore = await sdk.balances.getByAccountId({ accountId: account.id });
        expect(balanceBefore).toEqual('0.00000000');

        await sdk.balances.add({ accountId: account.id, amount: '100' });
        const balanceAfter = await sdk.balances.getByAccountId({ accountId: account.id });
        expect(balanceAfter).toEqual('100.00000000');
    });
});
