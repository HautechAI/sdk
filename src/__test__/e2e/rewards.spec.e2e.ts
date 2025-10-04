import { describe, it, expect } from 'vitest';
import { createTestSdk } from '../test-utils';

// Rewards API E2E Tests
// Notes: Requires valid Hautech backend credentials in .env as per project guidelines

describe('Rewards API E2E Tests', () => {
    const sdk = createTestSdk();

    it('should get rewards balance for self', async () => {
        const result = await sdk.rewards.get();

        expect(result).toBeDefined();
        expect(result.balance).toBeDefined();
        expect(typeof result.balance).toBe('string');
    });

    it('should get available amount for withdraw for self', async () => {
        const result = await sdk.rewards.getAvailable();

        expect(result).toBeDefined();
        expect(result.balance).toBeDefined();
        expect(typeof result.balance).toBe('string');
    });
});
