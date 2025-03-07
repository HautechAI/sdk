import { describe, it, expect } from '@jest/globals';
import { SDK } from '../src';
import { recreateSdk } from './utils';

declare module '../src' {
    interface CollectionsMetadata {
        field: string;
    }
}

describe('Collections', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(async () => {
        await sdk.close();
    });

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

    it('should be able to add items', async () => {
        const collection = await sdk.collections.create();
        const stack = await sdk.stacks.create();

        await sdk.collections.items.add({
            collectionId: collection.id,
            itemIds: [stack.id],
        });

        const items = await sdk.collections.items.list({ collectionId: collection.id });
        expect(items.map((item) => item.id)).toEqual([stack.id]);
    });

    it('should be able to remove items', async () => {
        const collection = await sdk.collections.create();
        const stack = await sdk.stacks.create();

        await sdk.collections.items.add({
            collectionId: collection.id,
            itemIds: [stack.id],
        });

        const items = await sdk.collections.items.list({ collectionId: collection.id });
        expect(items.map((item) => item.id)).toEqual([stack.id]);

        await sdk.collections.items.remove({
            collectionId: collection.id,
            itemIds: [stack.id],
        });

        const items2 = await sdk.collections.items.list({ collectionId: collection.id });
        expect(items2.map((item) => item.id)).toEqual([]);
    });
});
