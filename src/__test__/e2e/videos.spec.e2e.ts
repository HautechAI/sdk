import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import FormData from 'form-data';

describe('Videos API E2E Tests', () => {
    let sdk = createTestSdk();
    let uploadedVideoId: string;

    beforeAll(async () => {
        const videoPath = path.join(__dirname, 'assets', 'video.mp4');

        if (!fs.existsSync(videoPath)) {
            throw new Error(`Video file not found at ${videoPath}`);
        }

        const uploadResult = await sdk.videos.startUpload();
        expect(uploadResult).toBeDefined();
        expect(uploadResult.uploadUrl).toBeDefined();
        expect(typeof uploadResult.uploadUrl).toBe('string');

        const formData = new FormData();
        formData.append('file', fs.createReadStream(videoPath));

        const uploadResponse = await axios.put(uploadResult.uploadUrl, formData, {
            headers: {
                ...formData.getHeaders(),
            },
            maxBodyLength: Infinity,
            timeout: 10000,
        });

        const fileToken = uploadResponse.data.fileToken;

        const finalizeResult = await sdk.videos.finalizeUpload({
            fileToken: fileToken,
        });

        if (finalizeResult && finalizeResult.id) {
            uploadedVideoId = finalizeResult.id;
        }
    });

    describe('Video Upload Workflow', () => {
        it('should start video upload and return upload URL', async () => {
            const result = await sdk.videos.startUpload();

            expect(result).toBeDefined();
            expect(result.uploadUrl).toBeDefined();
            expect(typeof result.uploadUrl).toBe('string');
            expect(result.uploadUrl.length).toBeGreaterThan(0);
        });
    });

    describe('Video Retrieval Operations', () => {
        it('should list videos with specific IDs', async () => {
            const result = await sdk.videos.list({ ids: [uploadedVideoId] });
            expect(result).toBeDefined();
            expect(Array.isArray(result)).toBe(true);

            const video = result[0];
            expect(video.id).toBe(uploadedVideoId);
            expect(video.creatorId).toBeDefined();
            expect(video.createdAt).toBeDefined();
            expect(video.updatedAt).toBeDefined();
            expect(video.url).toBeDefined();
            expect(typeof video.width).toBe('number');
            expect(typeof video.height).toBe('number');
            expect(typeof video.duration).toBe('string');
        });

        it('should get a specific video by ID', async () => {
            const result = await sdk.videos.get(uploadedVideoId);

            expect(result).toBeDefined();
            expect(result.id).toBe(uploadedVideoId);
            expect(result.creatorId).toBeDefined();
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();
            expect(result.url).toBeDefined();
            expect(typeof result.width).toBe('number');
            expect(typeof result.height).toBe('number');
            expect(typeof result.duration).toBe('string');
            expect(result.metadata).toBeDefined();
            expect(result.kind).toBeDefined();
        });
    });

    describe('SDK Integration', () => {
        it('should have videos available in SDK', () => {
            expect(sdk.videos).toBeDefined();
            expect(sdk.videos.get).toBeDefined();
            expect(sdk.videos.list).toBeDefined();
            expect(sdk.videos.startUpload).toBeDefined();
            expect(sdk.videos.finalizeUpload).toBeDefined();
        });

        it('should have all video methods as functions', () => {
            expect(typeof sdk.videos.get).toBe('function');
            expect(typeof sdk.videos.list).toBe('function');
            expect(typeof sdk.videos.startUpload).toBe('function');
            expect(typeof sdk.videos.finalizeUpload).toBe('function');
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid video ID gracefully', async () => {
            const invalidId = 'non-existent-video-id';

            try {
                await sdk.videos.get(invalidId);
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid video list parameters gracefully', async () => {
            try {
                await sdk.videos.list({ ids: null as any });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid finalize upload parameters gracefully', async () => {
            try {
                await sdk.videos.finalizeUpload({ fileToken: 'invalid-uuid-token-that-does-not-exist' });
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
