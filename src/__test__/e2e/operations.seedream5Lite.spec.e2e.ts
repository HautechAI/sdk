import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';

const requiredEnvVars = ['APP_ID', 'APP_KEY_ID', 'APP_KEY_SECRET', 'API_CORE_URL'];
const hasRequiredEnv = requiredEnvVars.every((key) => Boolean(process.env[key]));

const describeIfEnv = hasRequiredEnv ? describe : describe.skip;

describeIfEnv('Seedream v5 Lite operations E2E', () => {
    const sdk = createTestSdk();
    let baseImageId: string;

    beforeAll(async () => {
        const image = await sdk.images.createFromUrl('https://picsum.photos/1024/1024');
        baseImageId = image.id;
    });

    it('runs seedream.5_lite_t2i.v1 successfully', async () => {
        const operation = await sdk.operations.run.imagine.seedream['5_lite_t2i'].v1({
            input: {
                prompt: 'A cinematic photo of a sunset skyline over futuristic architecture',
            },
        });

        expect(operation.id).toBeDefined();
        expect(operation.status).toBeDefined();
        expect(operation.type).toBe('seedream.5_lite_t2i.v1');

        const completed = await sdk.operations.wait(operation, 120000);
        expect(completed.type).toBe('seedream.5_lite_t2i.v1');
        expect(completed.output).toBeDefined();
        expect(completed.output?.kind).toBe('image');
    });

    it('runs seedream.5_lite_edit.v1 successfully', async () => {
        const operation = await sdk.operations.run.imagine.seedream['5_lite_edit'].v1({
            input: {
                prompt: 'Transform into a dreamy watercolor illustration',
                imageIds: [baseImageId],
            },
        });

        expect(operation.id).toBeDefined();
        expect(operation.status).toBeDefined();
        expect(operation.type).toBe('seedream.5_lite_edit.v1');

        const completed = await sdk.operations.wait(operation, 120000);
        expect(completed.type).toBe('seedream.5_lite_edit.v1');
        expect(completed.output).toBeDefined();
        expect(completed.output?.kind).toBe('image');
    });
});
