import { describe, it, expect } from '@jest/globals';
import { sdk } from './sdk';

describe('Utils', () => {
    it('should return seed', () => {
        const seed = sdk.utils.seed();
        expect(seed).toBeDefined();
    });
});
