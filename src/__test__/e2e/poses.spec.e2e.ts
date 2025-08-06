import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import * as path from 'path';
import { v4 } from 'uuid';

describe('Poses API E2E Tests', () => {
    let sdk = createTestSdk();
    let uploadedImageId: string;
    let testPoseId: string;

    beforeAll(async () => {
        const imagePath = path.join(__dirname, 'assets', 'pose.png');

        const image = await sdk.images.createFromFile(imagePath);
        uploadedImageId = image.id;

        const estimationResponse = await sdk.operations.run.poseEstimation.v1({
            input: {
                imageId: uploadedImageId,
            },
        });
        const estimationResponseData = await sdk.operations.wait(estimationResponse);

        testPoseId = String(estimationResponseData.output.data?.poseId);
    });

    describe('Poses List Operations', () => {
        it('should list poses', async () => {
            const result = await sdk.poses.list({});
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            const firstPose = result.data[0];
            expect(firstPose.id).toBeDefined();
            expect(firstPose.createdAt).toBeDefined();
            expect(firstPose.updatedAt).toBeDefined();
            expect(firstPose.creatorId).toBeDefined();
        });

        it('should list poses with limit parameter', async () => {
            const result = await sdk.poses.list({ limit: 5 });
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toBeLessThanOrEqual(5);
        });

        it('should list poses with orderBy parameter', async () => {
            const result = await sdk.poses.list({ orderBy: 'createdAt_ASC' });
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
        });
    });

    describe('Poses Retrieval Operations', () => {
        it('should get a specific pose if one exists', async () => {
            const result = await sdk.poses.get(testPoseId);
            expect(result).toBeDefined();
            expect(result!.id).toBe(testPoseId);
            expect(result!.createdAt).toBeDefined();
            expect(result!.updatedAt).toBeDefined();
            expect(result!.creatorId).toBeDefined();
            expect(result!.metadata).toBeDefined();
        });
    });

    describe('Poses Metadata Operations', () => {
        it('should update pose metadata if pose exists', async () => {
            const updatedMetadata = {
                name: 'Updated Test Pose E2E',
                description: 'Updated description for e2e testing',
                testType: 'e2e',
                updated: true,
            };

            await expect(sdk.poses.updateMetadata(testPoseId, { overwrite: updatedMetadata })).resolves.not.toThrow();

            // Verify the metadata was updated
            const updatedPose = await sdk.poses.get(testPoseId);
            expect(updatedPose).toBeDefined();
            expect((updatedPose!.metadata as any)?.name).toBe('Updated Test Pose E2E');
            expect((updatedPose!.metadata as any)?.description).toBe('Updated description for e2e testing');
            expect((updatedPose!.metadata as any)?.updated).toBe(true);
        });
    });

    describe('Poses Preview Operations', () => {
        it('should set pose preview if pose and image exist', async () => {
            await expect(sdk.poses.setPreview(testPoseId, { previewImageId: uploadedImageId })).resolves.not.toThrow();
        });
    });

    describe('Error Handling', () => {
        it('should return null for non-existent pose ID', async () => {
            const invalidId = v4();

            const result = await sdk.poses.get(invalidId);
            expect(result).toBeNull();
        });

        it('should handle invalid metadata update gracefully', async () => {
            const invalidId = 'non-existent-pose-id';

            try {
                await sdk.poses.updateMetadata(invalidId, { overwrite: {} });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid preview image ID gracefully', async () => {
            try {
                await sdk.poses.setPreview(testPoseId, { previewImageId: 'invalid-image-id' });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
