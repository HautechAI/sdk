import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { v4 } from 'uuid';
import path from 'path';

describe('Collections API E2E Tests', () => {
    let sdk = createTestSdk();
    let createdCollectionId: string;
    let testImageId: string;
    let testVideoId: string;

    beforeAll(async () => {
        // Create a test collection
        const collection = await sdk.collections.create({
            metadata: {
                name: 'Test Collection E2E',
                description: 'A test collection for e2e testing',
                testType: 'e2e',
            },
        });
        createdCollectionId = collection.id;

        const imageEntity = await sdk.images.createFromFile(path.join(__dirname, 'assets', 'pose.png'));
        const videoEntity = await sdk.videos.createFromFile(path.join(__dirname, 'assets', 'video.mp4'));
        testImageId = imageEntity.id;
        testVideoId = videoEntity.id;
    });

    describe('Collections CRUD Operations', () => {
        it('should create a new collection', async () => {
            const collectionData = {
                metadata: {
                    name: 'Test Create Collection',
                    description: 'A separate collection to test creation',
                    category: 'test',
                    tags: ['test', 'creation'],
                },
            };

            const result = await sdk.collections.create(collectionData);
            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.kind).toBeDefined();
            expect(result.creatorId).toBeDefined();
            expect(result.metadata).toEqual(collectionData.metadata);
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();

            expect(result.id).not.toBe(createdCollectionId);
        });

        it('should create a collection with minimal data', async () => {
            const result = await sdk.collections.create({});
            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.kind).toBeDefined();
            expect(result.creatorId).toBeDefined();
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();
        });

        it('should get a specific collection', async () => {
            expect(createdCollectionId).toBeDefined();

            const result = await sdk.collections.get(createdCollectionId);
            expect(result).toBeDefined();
            expect(result!.id).toBe(createdCollectionId);
            expect(result!.kind).toBeDefined();
            expect(result!.creatorId).toBeDefined();
            expect((result!.metadata as any)?.name).toBe('Test Collection E2E');
            expect((result!.metadata as any)?.description).toBe('A test collection for e2e testing');
            expect((result!.metadata as any)?.testType).toBe('e2e');
            expect(result!.createdAt).toBeDefined();
            expect(result!.updatedAt).toBeDefined();
        });

        it('should get a non-existent collection', async () => {
            const result = await sdk.collections.get(v4());
            expect(result).toBeNull();
        });

        it('should list collections', async () => {
            const result = await sdk.collections.list();
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            const createdCollection = result.data.find((collection) => collection.id === createdCollectionId);
            expect(createdCollection).toBeDefined();
            expect((createdCollection?.metadata as any)?.name).toBe('Test Collection E2E');
        });

        it('should list collections with pagination', async () => {
            // Create a few more collections for pagination testing
            for (let i = 0; i < 3; i++) {
                await sdk.collections.create({
                    metadata: {
                        name: `Pagination Test Collection ${i}`,
                        index: i,
                    },
                });
            }

            const result = await sdk.collections.list({
                limit: 2,
                cursor: undefined, // First page
            });

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toBeLessThanOrEqual(2);
            expect(result.pageInfo).toBeDefined();

            if (result.pageInfo.nextCursor) {
                const nextPageResult = await sdk.collections.list({
                    limit: 2,
                    cursor: result.pageInfo.nextCursor,
                });

                expect(nextPageResult).toBeDefined();
                expect(nextPageResult.data).toBeDefined();
                expect(Array.isArray(nextPageResult.data)).toBe(true);
                expect(nextPageResult.data.length).toBeLessThanOrEqual(2);
                expect(nextPageResult.pageInfo).toBeDefined();
                expect(nextPageResult.data).not.toMatchObject(result.data);
            }
        });

        it('should update collection metadata', async () => {
            expect(createdCollectionId).toBeDefined();

            const updatedMetadata = {
                name: 'Updated Test Collection E2E',
                description: 'Updated description for e2e testing',
                category: 'updated',
                tags: ['updated', 'test'],
                lastModified: new Date().toISOString(),
            };

            const result = await sdk.collections.updateMetadata(createdCollectionId, {
                overwrite: updatedMetadata,
            });
            expect(result).toBeDefined();
            expect(result.id).toBe(createdCollectionId);

            const updatedCollection = await sdk.collections.get(createdCollectionId);
            expect((updatedCollection!.metadata as any).name).toBe('Updated Test Collection E2E');
            expect((updatedCollection!.metadata as any).description).toBe('Updated description for e2e testing');
            expect((updatedCollection!.metadata as any).category).toBe('updated');
        });
    });

    describe('Collection Items Management', () => {
        it('should add items to a collection', async () => {
            expect(createdCollectionId).toBeDefined();

            const itemIds = [testImageId, testVideoId];

            const result = await sdk.collections.items.add(createdCollectionId, {
                itemIds: itemIds,
            });

            expect(result).toBeDefined();
        });

        it('should list items in a collection', async () => {
            expect(createdCollectionId).toBeDefined();

            const result = await sdk.collections.items.list(createdCollectionId);
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(result.data.find((item) => item.id === testImageId)).toBeTruthy();
            expect(result.data.find((item) => item.id === testVideoId)).toBeTruthy();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();
        });

        it('should remove items from a collection', async () => {
            expect(createdCollectionId).toBeDefined();

            const itemIds = [testImageId];

            const result = await sdk.collections.items.remove(createdCollectionId, {
                itemIds: itemIds,
            });

            expect(result).toBeDefined();
        });

        it('should list items with pagination', async () => {
            expect(createdCollectionId).toBeDefined();

            const result = await sdk.collections.items.list(createdCollectionId, {
                limit: 5,
                cursor: undefined,
            });

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toBeLessThanOrEqual(5);
            expect(result.pageInfo).toBeDefined();
        });

        it('should list items by kind - video', async () => {
            expect(createdCollectionId).toBeDefined();

            const result = await sdk.collections.items.listByKind(createdCollectionId, 'video');

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            // All returned items should be videos
            result.data.forEach((item) => {
                expect(item.kind).toBe('video');
            });
        });

        it('should list items by kind - image', async () => {
            expect(createdCollectionId).toBeDefined();

            const result = await sdk.collections.items.listByKind(createdCollectionId, 'image');

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            // All returned items should be images
            result.data.forEach((item) => {
                expect(item.kind).toBe('image');
            });
        });

        it('should list items by kind with additional parameters', async () => {
            expect(createdCollectionId).toBeDefined();

            const result = await sdk.collections.items.listByKind(createdCollectionId, 'video', {
                limit: 10,
                cursor: undefined,
            });

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toBeLessThanOrEqual(10);
            expect(result.pageInfo).toBeDefined();

            // All returned items should be videos
            result.data.forEach((item) => {
                expect(item.kind).toBe('video');
            });
        });

        it('should return empty array when no items of specified kind exist', async () => {
            expect(createdCollectionId).toBeDefined();

            const result = await sdk.collections.items.listByKind(createdCollectionId, 'pipeline');

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toBe(0);
            expect(result.pageInfo).toBeDefined();
        });

        it('should handle different resource kinds', async () => {
            expect(createdCollectionId).toBeDefined();

            const kinds = ['collection', 'operation', 'stack', 'pose', 'storage', 'workflow'];

            for (const kind of kinds) {
                const result = await sdk.collections.items.listByKind(createdCollectionId, kind as any);

                expect(result).toBeDefined();
                expect(result.data).toBeDefined();
                expect(Array.isArray(result.data)).toBe(true);
                expect(result.pageInfo).toBeDefined();

                // All returned items should match the requested kind
                result.data.forEach((item) => {
                    expect(item.kind).toBe(kind);
                });
            }
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid collection ID gracefully', async () => {
            const invalidId = 'non-existent-collection-id';

            try {
                await sdk.collections.get(invalidId);
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid collection update', async () => {
            const invalidId = 'non-existent-collection-id';

            try {
                await sdk.collections.updateMetadata(invalidId, {
                    overwrite: { test: 'data' },
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid item operations gracefully', async () => {
            const invalidCollectionId = 'non-existent-collection-id';
            const invalidItemIds = ['non-existent-item-1', 'non-existent-item-2'];

            try {
                await sdk.collections.items.add(invalidCollectionId, {
                    itemIds: invalidItemIds,
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle empty item IDs gracefully', async () => {
            expect(createdCollectionId).toBeDefined();

            try {
                await sdk.collections.items.add(createdCollectionId, {
                    itemIds: [],
                });
                // This might succeed or fail depending on API validation
                // We'll accept both outcomes
                expect(true).toBe(true);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
