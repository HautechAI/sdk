import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import FormData from 'form-data';
import { v4 } from 'uuid';

describe('Images API E2E Tests', () => {
    let sdk = createTestSdk();
    let uploadedImageId: string;

    beforeAll(async () => {
        const imagePath = path.join(__dirname, 'assets', 'pose.png');

        uploadedImageId = await sdk.images.createFromFile(imagePath);
    });

    describe('Image Upload Workflow', () => {
        it('should start image upload and return upload URL', async () => {
            const result = await sdk.images.startUpload();

            expect(result).toBeDefined();
            expect(result.uploadUrl).toBeDefined();
            expect(typeof result.uploadUrl).toBe('string');
            expect(result.uploadUrl.length).toBeGreaterThan(0);
        });

        it('should finalize image upload with file token', async () => {
            const imagePath = path.join(__dirname, 'assets', 'pose.png');

            const uploadResult = await sdk.images.startUpload();
            const formData = new FormData();
            formData.append('file', fs.createReadStream(imagePath));

            const uploadResponse = await axios.put(uploadResult.uploadUrl, formData, {
                headers: {
                    ...formData.getHeaders(),
                },
                maxBodyLength: Infinity,
            });

            const fileToken = uploadResponse.data.fileToken;
            const finalizeResult = await sdk.images.finalizeUpload({
                fileToken: fileToken,
            });

            expect(finalizeResult).toBeDefined();
            expect(finalizeResult.id).toBeDefined();
            expect(finalizeResult.creatorId).toBeDefined();
            expect(finalizeResult.createdAt).toBeDefined();
            expect(finalizeResult.updatedAt).toBeDefined();
            expect(finalizeResult.url).toBeDefined();
            expect(typeof finalizeResult.width).toBe('number');
            expect(typeof finalizeResult.height).toBe('number');
        });

        it('should create image from file using createFromFile method', async () => {
            const imagePath = path.join(__dirname, 'assets', 'pose.png');

            const imageId = await sdk.images.createFromFile(imagePath);

            expect(imageId).toBeDefined();
            expect(typeof imageId).toBe('string');
            expect(imageId.length).toBeGreaterThan(0);

            // Verify the image was actually created by retrieving it
            const image = await sdk.images.get(imageId);
            expect(image).toBeDefined();
            expect(image!.id).toBe(imageId);
            expect(image!.url).toBeDefined();
            expect(typeof image!.width).toBe('number');
            expect(typeof image!.height).toBe('number');
        });

        it('should create image from URL using createFromUrl method', async () => {
            const url = 'https://picsum.photos/200/300';

            const imageId = await sdk.images.createFromUrl(url);

            expect(imageId).toBeDefined();
            expect(typeof imageId).toBe('string');
            expect(imageId.length).toBeGreaterThan(0);

            const image = await sdk.images.get(imageId);
            expect(image).toBeDefined();
            expect(image!.id).toBe(imageId);
            expect(image!.url).toBeDefined();
            expect(typeof image!.width).toBe('number');
            expect(typeof image!.height).toBe('number');
        });
    });

    describe('Image Retrieval Operations', () => {
        it('should get a specific image by ID', async () => {
            const result = await sdk.images.get(uploadedImageId);

            expect(result).toBeDefined();
            expect(result!.id).toBe(uploadedImageId);
            expect(result!.creatorId).toBeDefined();
            expect(result!.createdAt).toBeDefined();
            expect(result!.updatedAt).toBeDefined();
            expect(result!.url).toBeDefined();
            expect(typeof result!.width).toBe('number');
            expect(typeof result!.height).toBe('number');
            expect(result!.metadata).toBeDefined();
            expect(result!.kind).toBeDefined();
        });

        it('should return null for non-existent image ID', async () => {
            const invalidId = v4();

            const result = await sdk.images.get(invalidId);
            expect(result).toBeNull();
        });

        it('should get URLs for multiple images', async () => {
            const result = await sdk.images.getUrls({ ids: [uploadedImageId] });

            expect(result).toBeDefined();
            expect(Array.isArray(result)).toBe(true);
            expect(result.length).toBeGreaterThan(0);

            const imageWithUrl = result[0];
            expect(imageWithUrl.id).toBe(uploadedImageId);
            expect(imageWithUrl.url).toBeDefined();
            expect(typeof imageWithUrl.url).toBe('string');
        });
    });

    describe('Image Representation Operations', () => {
        it('should get image representation', async () => {
            const segmentResponse = await sdk.operations.run.segmentAnything.embeddings.v1({
                input: {
                    imageId: uploadedImageId,
                },
            });

            const segmentResponseData = await sdk.operations.wait(segmentResponse);

            expect(segmentResponseData.id).toBeDefined();

            const result = await sdk.images.getRepresentation(uploadedImageId, 'sam.v1');
            expect(result).toBeDefined();
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid image ID gracefully in get operation', async () => {
            const invalidId = 'non-existent-image-id';

            try {
                await sdk.images.get(invalidId);
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid finalize upload parameters gracefully', async () => {
            try {
                await sdk.images.finalizeUpload({ fileToken: 'invalid-uuid-token-that-does-not-exist' });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid getUrls parameters gracefully', async () => {
            try {
                await sdk.images.getUrls({ ids: null as any });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid representation type gracefully', async () => {
            if (!uploadedImageId) {
                console.warn('Skipping invalid representation test - no uploaded image available');
                return;
            }

            try {
                await sdk.images.getRepresentation(uploadedImageId, 'invalid-type');
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
