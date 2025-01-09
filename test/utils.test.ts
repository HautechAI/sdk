import { describe, it, expect } from '@jest/globals';
import { sdk } from './utils';

describe('Utils', () => {
    it('should return seed', () => {
        const seed = sdk.utils.seed();
        expect(seed).toBeDefined();
    });
});
