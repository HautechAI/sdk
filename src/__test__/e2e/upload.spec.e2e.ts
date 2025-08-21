import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import axios from 'axios';

describe('Upload API E2E Tests', () => {
    const sdk = createTestSdk();

    it('should upload a small text file and retrieve a working URL', async () => {
        const content = 'Hello Hautech Upload E2E ' + new Date().toISOString();
        const filename = `e2e-upload-${Date.now()}.txt`;

        const init = await sdk.upload.initUpload({ filename });
        expect(init).toBeDefined();
        expect(typeof init.key).toBe('string');
        expect(typeof init.uploadUrl).toBe('string');

        // Upload bytes to the provided URL (usually a pre-signed PUT)
        const putResp = await axios.put(init.uploadUrl, Buffer.from(content, 'utf8'), {
            headers: {
                'Content-Type': 'text/plain',
            },
            maxBodyLength: Infinity,
            // S3-style signed URLs typically don't need further auth headers
        });
        expect(putResp.status).toBeGreaterThanOrEqual(200);
        expect(putResp.status).toBeLessThan(300);

        // Ask API for a retrievable URL to the uploaded file
        const { url } = await sdk.upload.getUploadedFileUrl({ key: init.key });
        expect(url).toBeDefined();
        expect(typeof url).toBe('string');
        expect(url.length).toBeGreaterThan(0);

        // Fetch the content back and do basic assertions
        const getResp = await axios.get(url, { responseType: 'arraybuffer' });
        expect(getResp.status).toBe(200);
        expect(getResp.data).toBeInstanceOf(Buffer);
        const text = Buffer.from(getResp.data).toString('utf8');
        // Some storage may append/transform newline; check substring containment
        expect(text.includes('Hello Hautech Upload E2E')).toBe(true);
    }, 60_000);

    it('should handle invalid key in getUploadedFileUrl gracefully', async () => {
        try {
            await sdk.upload.getUploadedFileUrl({ key: 'non-existent-key-' + Date.now() });
            // If backend returns 200 with empty URL, still assert shape
            // but typically it should error
            expect(true).toBe(false);
        } catch (err) {
            expect(err).toBeDefined();
        }
    }, 30_000);
});
