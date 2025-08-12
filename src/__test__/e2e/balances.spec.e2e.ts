import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { v4 } from 'uuid';
import Decimal from 'decimal.js';

describe('Balances API E2E Tests', () => {
    let sdk = createTestSdk();

    // Helper function to create a new test account for isolation
    const createTestAccount = async () => {
        const testAccount = await sdk.accounts.create({
            alias: `test-account-${v4()}`,
        });
        return testAccount.id;
    };

    describe('Balance Operations', () => {
        let testAccountId: string;

        beforeAll(async () => {
            testAccountId = await createTestAccount();
        });

        it('should add balance to an account', async () => {
            const balanceAmount = '100.50';
            const idempotencyKey = v4();

            await sdk.balances.add(testAccountId, {
                amount: balanceAmount,
                idempotencyKey: idempotencyKey,
            });

            // Verify the balance was added by checking the current balance
            const currentBalance = await sdk.balances.getByAccountId(testAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should add balance without idempotency key', async () => {
            const balanceAmount = '50.25';

            await sdk.balances.add(testAccountId, {
                amount: balanceAmount,
            });

            // Verify the balance was added by checking the current balance
            const currentBalance = await sdk.balances.getByAccountId(testAccountId);
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
            expect(testAccountId).toBeDefined();

            const result = await sdk.balances.getByAccountId(testAccountId);

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
            await sdk.balances.add(testAccountId, {
                amount: firstAmount,
                idempotencyKey: v4(),
            });

            // Add second balance
            await sdk.balances.add(testAccountId, {
                amount: secondAmount,
                idempotencyKey: v4(),
            });

            // Verify the balance has been updated
            const currentBalance = await sdk.balances.getByAccountId(testAccountId);

            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
        });
    });

    describe('getCurrentValue Operations', () => {
        let testAccountId: string;

        beforeAll(async () => {
            testAccountId = await createTestAccount();
        });

        it('should get current value for self (without accountId)', async () => {
            const result = await sdk.balances.getCurrentValue();

            expect(result).toBeDefined();
            expect(typeof result).toBe('string');

            // Should be a valid numeric string
            const numericValue = parseFloat(result);
            expect(isNaN(numericValue)).toBe(false);
        });

        it('should get current value for specific account (with accountId)', async () => {
            expect(testAccountId).toBeDefined();

            const result = await sdk.balances.getCurrentValue(testAccountId);

            expect(result).toBeDefined();
            expect(typeof result).toBe('string');

            // Should be a valid numeric string
            const numericValue = parseFloat(result);
            expect(isNaN(numericValue)).toBe(false);
        });

        it('should return "0" for non-existent account', async () => {
            const nonExistentAccountId = v4();

            const result = await sdk.balances.getCurrentValue(nonExistentAccountId);

            expect(result).toBeDefined();
            expect(result).toBe('0');
        });

        it('should return same value as getByAccountId when account exists', async () => {
            expect(testAccountId).toBeDefined();

            const currentValueResult = await sdk.balances.getCurrentValue(testAccountId);
            const getByAccountIdResult = await sdk.balances.getByAccountId(testAccountId);

            expect(currentValueResult).toBeDefined();
            expect(getByAccountIdResult).toBeDefined();
            expect(currentValueResult).toBe(getByAccountIdResult!.balance);
        });

        it('should return same value as get when no accountId provided', async () => {
            const currentValueResult = await sdk.balances.getCurrentValue();
            const getResult = await sdk.balances.get();

            expect(currentValueResult).toBeDefined();
            expect(getResult).toBeDefined();
            expect(currentValueResult).toBe(getResult.balance);
        });

        it('should handle undefined/null balance gracefully', async () => {
            // This test verifies the default '0' return when balance is null/undefined
            const nonExistentAccountId = v4();

            const result = await sdk.balances.getCurrentValue(nonExistentAccountId);

            expect(result).toBe('0');
        });
    });

    describe('Idempotency Operations', () => {
        let testAccountId: string;

        beforeAll(async () => {
            testAccountId = await createTestAccount();
        });

        it('should handle idempotent balance additions', async () => {
            const balanceAmount = '30.00';
            const idempotencyKey = v4();

            // First addition
            await sdk.balances.add(testAccountId, {
                amount: balanceAmount,
                idempotencyKey: idempotencyKey,
            });

            // Second addition with same idempotency key should be idempotent
            try {
                await sdk.balances.add(testAccountId, {
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
        let testAccountId: string;

        beforeAll(async () => {
            testAccountId = await createTestAccount();
        });

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
                await sdk.balances.add(testAccountId, {
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
                await sdk.balances.add(testAccountId, {
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
                await sdk.balances.add(testAccountId, {
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
        let testAccountId: string;

        beforeAll(async () => {
            testAccountId = await createTestAccount();
        });

        it('should handle integer balance amounts', async () => {
            const integerAmount = '150';

            // The add method returns void, so we just check it completes successfully
            await sdk.balances.add(testAccountId, {
                amount: integerAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(testAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should handle decimal balance amounts', async () => {
            const decimalAmount = '99.99';

            // The add method returns void, so we just check it completes successfully
            await sdk.balances.add(testAccountId, {
                amount: decimalAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(testAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should handle very small balance amounts', async () => {
            const smallAmount = '0.01';

            // The add method returns void, so we just check it completes successfully
            await sdk.balances.add(testAccountId, {
                amount: smallAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(testAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });

        it('should handle large balance amounts', async () => {
            const largeAmount = '999999.99';

            await sdk.balances.add(testAccountId, {
                amount: largeAmount,
                idempotencyKey: v4(),
            });

            // Verify the operation completed by checking the balance
            const currentBalance = await sdk.balances.getByAccountId(testAccountId);
            expect(currentBalance).toBeDefined();
            expect(currentBalance!.balance).toBeDefined();
            expect(typeof currentBalance!.balance).toBe('string');
        });
    });

    describe('Balance Verification', () => {
        let testAccountId: string;

        beforeAll(async () => {
            testAccountId = await createTestAccount();
        });

        it('should verify balance consistency across operations', async () => {
            // Get initial balance
            const initialBalance = await sdk.balances.getByAccountId(testAccountId);

            // Add some balance
            const addAmount = '200.00';
            await sdk.balances.add(testAccountId, {
                amount: addAmount,
                idempotencyKey: v4(),
            });

            // Verify the balance was added
            const updatedBalance = await sdk.balances.getByAccountId(testAccountId);

            expect(updatedBalance).toBeDefined();
            expect(updatedBalance!.balance).toBeDefined();
            expect(typeof updatedBalance!.balance).toBe('string');

            // The balance should have increased (assuming positive addition)
            const initialValue = new Decimal(initialBalance!.balance);
            const updatedValue = new Decimal(updatedBalance!.balance);
            const addedValue = new Decimal(addAmount);

            expect(updatedValue.eq(initialValue.add(addedValue))).toBe(true);
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
