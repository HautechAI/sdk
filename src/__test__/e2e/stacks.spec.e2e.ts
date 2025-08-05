import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import * as fs from 'fs';
import * as path from 'path';
import { v4 } from 'uuid';

describe('Stacks API E2E Tests', () => {
    let sdk = createTestSdk();
    let testStackId: string;
    let uploadedVideoId: string;

    beforeAll(async () => {
        const videoPath = path.join(__dirname, 'assets', 'video.mp4');

        const videoEntity = await sdk.videos.createFromFile(videoPath);
        uploadedVideoId = videoEntity.id;

        const result = await sdk.stacks.create({
            metadata: {
                name: 'Test Stack E2E',
                description: 'A test stack for e2e testing',
                testType: 'e2e',
            },
        });
        testStackId = result.id;
    });

    describe('Stacks CRUD Operations', () => {
        it('should create a new stack', async () => {
            const metadata = {
                name: 'Create Test Stack',
                description: 'A separate stack to test creation',
                testType: 'create-test',
            };

            const result = await sdk.stacks.create({ metadata });
            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.metadata).toEqual(metadata);
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();
            expect(result.creatorId).toBeDefined();

            expect(result.id).not.toBe(testStackId);
        });

        it('should list stacks', async () => {
            const result = await sdk.stacks.list();
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            const createdStack = result.data.find((stack) => stack.id === testStackId);
            expect(createdStack).toBeDefined();
            expect((createdStack?.metadata as any)?.name).toBe('Test Stack E2E');
        });

        it('should get a specific stack', async () => {
            expect(testStackId).toBeDefined();

            const result = await sdk.stacks.get(testStackId);
            expect(result).toBeDefined();
            expect(result?.id).toBe(testStackId);
            expect((result?.metadata as any)?.name).toBe('Test Stack E2E');
            expect((result?.metadata as any)?.description).toBe('A test stack for e2e testing');
            expect((result?.metadata as any)?.testType).toBe('e2e');
            expect(result?.createdAt).toBeDefined();
            expect(result?.updatedAt).toBeDefined();
            expect(result?.creatorId).toBeDefined();
        });

        it('should get a not exist stack', async () => {
            const result = await sdk.stacks.get(v4());
            expect(result).toEqual(null);
        });

        it('should update stack metadata', async () => {
            expect(testStackId).toBeDefined();

            const updatedMetadata = {
                name: 'Updated Test Stack E2E',
                description: 'Updated description for e2e testing',
                testType: 'e2e',
                updated: true,
            };

            await sdk.stacks.updateMetadata(testStackId, { overwrite: updatedMetadata });

            const updatedStack = await sdk.stacks.get(testStackId);
            expect((updatedStack?.metadata as any)?.name).toBe('Updated Test Stack E2E');
            expect((updatedStack?.metadata as any)?.description).toBe('Updated description for e2e testing');
            expect((updatedStack?.metadata as any)?.updated).toBe(true);
        });
    });

    describe('Stack Items Operations', () => {
        it('should add items to stack', async () => {
            expect(testStackId).toBeDefined();

            const itemIds = [uploadedVideoId];
            await expect(sdk.stacks.items.add(testStackId, { itemIds })).resolves.not.toThrow();
        });

        it('should remove items from stack', async () => {
            expect(testStackId).toBeDefined();

            const itemIds = [uploadedVideoId];
            await expect(sdk.stacks.items.remove(testStackId, { itemIds })).resolves.not.toThrow();
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid stack ID gracefully', async () => {
            const invalidId = 'non-existent-stack-id';

            try {
                await sdk.stacks.get(invalidId);
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid stack data gracefully', async () => {
            try {
                // @ts-expect-error
                await sdk.stacks.create({ metadata: null });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid item operations gracefully', async () => {
            const invalidStackId = 'non-existent-stack-id';
            const itemIds = ['item-1', 'item-2'];

            try {
                await sdk.stacks.items.add(invalidStackId, { itemIds });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
