import { describe, it, expect } from '@jest/globals';
import { randomString, sdk } from './utils';

describe('Storage', () => {
    it('should create record', async () => {
        const key = randomString();
        const value = 'test';

        const record = await sdk.storage.create({ key, value });
        expect(record).toBeDefined();
    });
});
