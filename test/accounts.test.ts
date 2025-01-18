import { describe, it, expect } from '@jest/globals';
import { randomString, sdk } from './utils';

describe('Accounts', () => {
    it('should create account', async () => {
        const alias = randomString();

        const account = await sdk.accounts.create({ alias });
        expect(account).toBeDefined();

        const sameAccount = await sdk.accounts.get({ id: account.id });
        expect(sameAccount).toEqual(account);

        const sameAccountByAlias = await sdk.accounts.getByAlias({ alias });
        expect(sameAccountByAlias).toEqual(account);
    });

    it('should return undefined if account not found', async () => {
        const account = await sdk.accounts.getByAlias({ alias: 'nonexistent' });
        expect(account).toBeUndefined();
    });
});
