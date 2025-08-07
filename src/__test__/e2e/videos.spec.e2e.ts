import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import * as path from 'path';

describe('Videos API E2E Tests', () => {
    let sdk = createTestSdk();
    let uploadedVideoId: string;

    beforeAll(async () => {
        const videoPath = path.join(__dirname, 'assets', 'video.mp4');

        const videoEntity = await sdk.videos.createFromFile(videoPath);
        uploadedVideoId = videoEntity.id;
    });

    describe('Video Upload Workflow', () => {
        it('should start video upload and return upload URL', async () => {
            const result = await sdk.videos.startUpload();

            expect(result).toBeDefined();
            expect(result.uploadUrl).toBeDefined();
            expect(typeof result.uploadUrl).toBe('string');
            expect(result.uploadUrl.length).toBeGreaterThan(0);
        });

        it('should create video from file using createFromFile method', async () => {
            const videoPath = path.join(__dirname, 'assets', 'video.mp4');

            const videoEntity = await sdk.videos.createFromFile(videoPath);

            expect(videoEntity).toBeDefined();
            expect(videoEntity.id).toBeDefined();
            expect(typeof videoEntity.id).toBe('string');
            expect(videoEntity.id.length).toBeGreaterThan(0);
            expect(videoEntity.url).toBeDefined();
            expect(typeof videoEntity.width).toBe('number');
            expect(typeof videoEntity.height).toBe('number');
            expect(typeof videoEntity.duration).toBe('number');

            const video = await sdk.videos.get(videoEntity.id);
            expect(video).toBeDefined();
            expect(video!.id).toBe(videoEntity.id);
        });

        it('should create video from URL using createFromUrl method', async () => {
            const url = 'https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';

            const videoEntity = await sdk.videos.createFromUrl(url);

            expect(videoEntity).toBeDefined();
            expect(videoEntity.id).toBeDefined();
            expect(typeof videoEntity.id).toBe('string');
            expect(videoEntity.id.length).toBeGreaterThan(0);
            expect(videoEntity.url).toBeDefined();
            expect(typeof videoEntity.width).toBe('number');
            expect(typeof videoEntity.height).toBe('number');
            expect(typeof videoEntity.duration).toBe('number');

            const video = await sdk.videos.get(videoEntity.id);
            expect(video).toBeDefined();
            expect(video!.id).toBe(videoEntity.id);
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
            expect(result!.id).toBe(uploadedVideoId);
            expect(result!.creatorId).toBeDefined();
            expect(result!.createdAt).toBeDefined();
            expect(result!.updatedAt).toBeDefined();
            expect(result!.url).toBeDefined();
            expect(typeof result!.width).toBe('number');
            expect(typeof result!.height).toBe('number');
            expect(typeof result!.duration).toBe('string');
            expect(result!.metadata).toBeDefined();
            expect(result!.kind).toBeDefined();
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
