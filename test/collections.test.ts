import { describe, it, expect } from '@jest/globals';
import { sdk } from './sdk';

describe('Collections', () => {
    it('should create collection', async () => {
        const collection = await sdk.collections.create();
        expect(collection).toBeDefined();

        const sameCollection = await sdk.collections.get({ id: collection.id });
        expect(sameCollection).toEqual(collection);
    });

    it('should list collections', async () => {
        const collections = await sdk.collections.list();
        expect(collections).toBeDefined();
    });
});
