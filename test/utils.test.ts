import { describe, it, expect } from '@jest/globals';
import { SDK } from '../src';
import { recreateSdk } from './utils';

describe('Utils', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('should return seed', () => {
        const seed = sdk.utils.seed();
        expect(seed).toBeDefined();
    });
});
