import { describe, it, expect } from '@jest/globals';
import { SDK } from '../src';
import { recreateSdk } from './utils';

describe('Groups', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('should create group', async () => {
        const group = await sdk.groups.create();
        expect(group).toBeDefined();

        const sameGroup = await sdk.groups.get({ id: group.id });
        expect(sameGroup).toEqual(group);
    });

    it('should delete group', async () => {
        const group = await sdk.groups.create();
        expect(group).toBeDefined();

        const sameGroup = await sdk.groups.get({ id: group.id });
        expect(sameGroup).toEqual(group);

        await sdk.groups.delete({ id: group.id });
    });

    it('should add account to group', async () => {
        const account = await sdk.accounts.create();
        expect(account).toBeDefined();

        const group = await sdk.groups.create();
        expect(group).toBeDefined();

        await sdk.groups.accounts.add({ accountId: account.id, groupId: group.id, role: 'member' });
    });

    it('should delete account from group', async () => {
        const account = await sdk.accounts.create();
        expect(account).toBeDefined();

        const group = await sdk.groups.create();
        expect(group).toBeDefined();

        await sdk.groups.accounts.add({ accountId: account.id, groupId: group.id, role: 'member' });
        await sdk.groups.accounts.remove({ accountId: account.id, groupId: group.id, role: 'member' });
    });
});
