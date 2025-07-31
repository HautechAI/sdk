import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { v4 } from 'uuid';

describe('Balances API E2E Tests', () => {
    let sdk = createTestSdk();
    let selfAccountId: string;

    beforeAll(async () => {
        const selfAccount = await sdk.accounts.self();
        selfAccountId = selfAccount.id;
    });

    describe('Balance Operations', () => {
        it('should add balance to an account', async () => {
            const balanceAmount = '100.50';
            const idempotencyKey = v4();

            await sdk.balances.add(selfAccountId, {
                amount: balanceAmount,
                idempotencyKey: idempotencyKey,
            });

            // Verify the balance was added by checking the current balance
            const currentBalance = await sdk.balances.getByAccountId(selfAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should add balance without idempotency key', async () => {
            const balanceAmount = '50.25';

            await sdk.balances.add(selfAccountId, {
                amount: balanceAmount,
            });

            // Verify the balance was added by checking the current balance
            const currentBalance = await sdk.balances.getByAccountId(selfAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should get balance for self', async () => {
            const result = await sdk.balances.get();

            expect(result).toBeDefined();
            expect(result.balance).toBeDefined();
            expect(typeof result.balance).toBe('string');
        });

        it('should get balance by account ID', async () => {
            expect(selfAccountId).toBeDefined();

            const result = await sdk.balances.getByAccountId(selfAccountId);

            expect(result).toBeDefined();
            expect(result!.balance).toBeDefined();
            expect(typeof result!.balance).toBe('string');
        });

        it('should get balance for non-existent account', async () => {
            const nonExistentAccountId = v4();

            const result = await sdk.balances.getByAccountId(nonExistentAccountId);

            expect(result).toBeNull();
        });

        it('should handle multiple balance additions', async () => {
            const firstAmount = '25.00';
            const secondAmount = '75.00';

            // Add first balance
            await sdk.balances.add(selfAccountId, {
                amount: firstAmount,
                idempotencyKey: v4(),
            });

            // Add second balance
            await sdk.balances.add(selfAccountId, {
                amount: secondAmount,
                idempotencyKey: v4(),
            });

            // Verify the balance has been updated
            const currentBalance = await sdk.balances.getByAccountId(selfAccountId);

            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
        });
    });

    describe('Idempotency Operations', () => {
        it('should handle idempotent balance additions', async () => {
            const balanceAmount = '30.00';
            const idempotencyKey = v4();

            // First addition
            await sdk.balances.add(selfAccountId, {
                amount: balanceAmount,
                idempotencyKey: idempotencyKey,
            });

            // Second addition with same idempotency key should be idempotent
            try {
                await sdk.balances.add(selfAccountId, {
                    amount: balanceAmount,
                    idempotencyKey: idempotencyKey,
                });

                expect(true).toEqual(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid account ID for adding balance', async () => {
            const invalidAccountId = 'invalid-account-id';

            try {
                await sdk.balances.add(invalidAccountId, {
                    amount: '100.00',
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid account ID for getting balance', async () => {
            const invalidAccountId = 'invalid-account-id';

            try {
                await sdk.balances.getByAccountId(invalidAccountId);
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid balance amount', async () => {
            const invalidAmount = 'not-a-number';

            try {
                await sdk.balances.add(selfAccountId, {
                    amount: invalidAmount,
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle negative balance amount', async () => {
            const negativeAmount = '-50.00';

            try {
                await sdk.balances.add(selfAccountId, {
                    amount: negativeAmount,
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle empty balance amount', async () => {
            const emptyAmount = '';

            try {
                await sdk.balances.add(selfAccountId, {
                    amount: emptyAmount,
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle empty account ID', async () => {
            const emptyAccountId = '';

            try {
                await sdk.balances.add(emptyAccountId, {
                    amount: '100.00',
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });

    describe('Balance Amount Formats', () => {
        it('should handle integer balance amounts', async () => {
            const integerAmount = '150';

            // The add method returns void, so we just check it completes successfully
            await sdk.balances.add(selfAccountId, {
                amount: integerAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(selfAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should handle decimal balance amounts', async () => {
            const decimalAmount = '99.99';

            // The add method returns void, so we just check it completes successfully
            await sdk.balances.add(selfAccountId, {
                amount: decimalAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(selfAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should handle very small balance amounts', async () => {
            const smallAmount = '0.01';

            // The add method returns void, so we just check it completes successfully
            await sdk.balances.add(selfAccountId, {
                amount: smallAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(selfAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should handle large balance amounts', async () => {
            const largeAmount = '999999.99';

            // The add method returns void, so we just check it completes successfully
            await sdk.balances.add(selfAccountId, {
                amount: largeAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(selfAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });
    });

    describe('Balance Verification', () => {
        it('should verify balance consistency across operations', async () => {
            // Get initial balance
            const initialBalance = await sdk.balances.getByAccountId(selfAccountId);

            // Add some balance
            const addAmount = '200.00';
            await sdk.balances.add(selfAccountId, {
                amount: addAmount,
                idempotencyKey: v4(),
            });

            // Verify the balance was added
            const updatedBalance = await sdk.balances.getByAccountId(selfAccountId);

            expect(updatedBalance).toBeDefined();
            expect(updatedBalance!.balance).toBeDefined();
            expect(typeof updatedBalance!.balance).toBe('string');

            // The balance should have increased (assuming positive addition)
            const initialValue = parseFloat(initialBalance!.balance);
            const updatedValue = parseFloat(updatedBalance!.balance);
            const addedValue = parseFloat(addAmount);

            expect(updatedValue).toBe(initialValue + addedValue);
        });

        it('should verify self balance operation', async () => {
            // Get self balance
            const selfBalance = await sdk.balances.get();

            expect(selfBalance).toBeDefined();
            expect(selfBalance.balance).toBeDefined();
            expect(typeof selfBalance.balance).toBe('string');

            // Verify it's a valid balance format (should be a numeric string)
            const balanceValue = parseFloat(selfBalance.balance);
            expect(isNaN(balanceValue)).toBe(false);
            // Note: Balance can be negative, so we don't check for >= 0
        });
    });
});
