import { describe, it, expect } from 'vitest';
import { createTestSdk } from '../test-utils';

describe('Access E2E - listShared', () => {
    const sdk = createTestSdk();

    it('should return a list structure (resources array)', async () => {
        const res = await sdk.access.listShared();
        // Basic shape assertions
        expect(res).toBeDefined();
        expect(res).toHaveProperty('resources');
        expect(Array.isArray(res.resources)).toBe(true);
    });

    it('should accept pagination params (limit, cursor)', async () => {
        const res = await sdk.access.listShared({ limit: 1 });
        expect(res).toBeDefined();
        expect(res).toHaveProperty('resources');
        expect(Array.isArray(res.resources)).toBe(true);
    });
});
