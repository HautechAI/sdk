import { describe, it, expect } from '@jest/globals';
import { sdk } from './sdk';

describe('Accounts', () => {
    it('should create account', async () => {
        const alias = Math.random().toString(36).substring(2, 15);

        const account = await sdk.accounts.create({ alias });
        expect(account).toBeDefined();

        const sameAccount = await sdk.accounts.get({ id: account.id });
        expect(sameAccount).toEqual(account);

        const sameAccountByAlias = await sdk.accounts.getByAlias({ alias });
        expect(sameAccountByAlias).toEqual(account);
    });
});
