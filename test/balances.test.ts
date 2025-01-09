import { createClientSDK } from '../src';
import { describe, it, expect } from '@jest/globals';

describe('Balances', () => {
    it('should return balance on get', async () => {
        const client = createClientSDK({
            authToken: () => process.env.SDK_TOKEN!,
            endpoint: process.env.API_CORE_URL!,
        });

        const balance = await client.balances.get();
        expect(balance).toBeDefined();
    });
});
