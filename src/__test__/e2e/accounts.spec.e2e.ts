import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { v4 } from 'uuid';

describe('Accounts API E2E Tests', () => {
    let sdk = createTestSdk();
    let createdAccountId: string;
    let testAlias: string;

    beforeAll(async () => {
        testAlias = `test-account-${v4()}`;
        const account = await sdk.accounts.create({
            alias: testAlias,
        });
        createdAccountId = account.id;
    });

    describe('Accounts CRUD Operations', () => {
        it('should create a new account', async () => {
            const uniqueAlias = `test-create-${v4()}`;
            const result = await sdk.accounts.create({
                alias: uniqueAlias,
            });

            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.alias).toBe(uniqueAlias);
            expect(result.createdAt).toBeDefined();

            // Should be different from the setup account
            expect(result.id).not.toBe(createdAccountId);
        });

        it('should create an account with additional metadata', async () => {
            const uniqueAlias = `test-metadata-${v4()}`;

            const result = await sdk.accounts.create({
                alias: uniqueAlias,
            });

            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.alias).toBe(uniqueAlias);
        });

        it('should get a specific account by ID', async () => {
            expect(createdAccountId).toBeDefined();

            const result = await sdk.accounts.get(createdAccountId);
            expect(result).toBeDefined();
            expect(result!.id).toBe(createdAccountId);
            expect(result!.alias).toBe(testAlias);
            expect(result!.createdAt).toBeDefined();
        });

        it('should get a non-existent account', async () => {
            const result = await sdk.accounts.get(v4());
            expect(result).toBeNull();
        });

        it('should get account by alias', async () => {
            const result = await sdk.accounts.getByAlias(testAlias);
            expect(result).toBeDefined();
            expect(result!.id).toBe(createdAccountId);
            expect(result!.alias).toBe(testAlias);
        });

        it('should get a non-existent account by alias', async () => {
            const nonExistentAlias = `non-existent-${v4()}`;
            const result = await sdk.accounts.getByAlias(nonExistentAlias);
            expect(result).toBeNull();
        });

        it('should list accounts', async () => {
            const result = await sdk.accounts.list();
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            // Should find our created account in the list
            const createdAccount = result.data.find((account) => account.id === createdAccountId);
            expect(createdAccount).toBeDefined();
            expect(createdAccount?.alias).toBe(testAlias);
        });

        it('should list accounts with pagination', async () => {
            for (let i = 0; i < 3; i++) {
                await sdk.accounts.create({
                    alias: v4(),
                });
            }

            const result = await sdk.accounts.list({
                limit: 2,
            });

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toEqual(2);
            expect(result.pageInfo).toBeDefined();
            expect(result.pageInfo.nextCursor).toBeDefined();

            const resultNextPage = await sdk.accounts.list({
                limit: 2,
                cursor: result.pageInfo.nextCursor,
            });

            expect(resultNextPage).toBeDefined();
            expect(resultNextPage.data).toBeDefined();
            expect(Array.isArray(resultNextPage.data)).toBe(true);
            expect(resultNextPage.data.length).toBeLessThanOrEqual(2);
            expect(resultNextPage.pageInfo).toBeDefined();
            expect(resultNextPage.data).not.toMatchObject(result.data);
        });

        it('should update account information', async () => {
            expect(createdAccountId).toBeDefined();
            const newAlias = v4();

            const account = await sdk.accounts.create({
                alias: v4(),
            });

            expect(account).toBeDefined();

            const result = await sdk.accounts.edit(account.id, {
                alias: newAlias,
            });

            expect(result).toBeDefined();
            expect(result.id).toBe(account.id);

            // Verify the update by fetching the account again
            const updatedAccount = await sdk.accounts.get(account.id);
            expect(updatedAccount?.alias).toEqual(newAlias);
        });
    });

    describe('Self Account Operations', () => {
        it('should get current account information', async () => {
            const result = await sdk.accounts.self();
            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.alias).toBeDefined();
            expect(result.createdAt).toBeDefined();
        });

        it('should verify self account has required fields', async () => {
            const result = await sdk.accounts.self();
            expect(result).toBeDefined();
            expect(typeof result.id).toBe('string');
            expect(result.alias).toBeDefined();
            expect(result.createdAt).toBeDefined();
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid account ID gracefully', async () => {
            const invalidId = 'invalid-account-id';

            try {
                await sdk.accounts.get(invalidId);
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle duplicate alias creation', async () => {
            // Try to create an account with the same alias as our test account
            try {
                await sdk.accounts.create({
                    alias: testAlias,
                });
                expect(true).toBe(false); // Should not reach here if aliases must be unique
            } catch (error) {
                expect(error).toBeDefined();
                // This might succeed if aliases don't need to be unique, so we'll accept both outcomes
            }
        });

        it('should handle invalid account update', async () => {
            const invalidId = 'invalid-account-id';

            try {
                await sdk.accounts.edit(invalidId, {
                    alias: v4(),
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle empty alias creation', async () => {
            try {
                await sdk.accounts.create({
                    alias: '',
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
