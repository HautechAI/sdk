import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';

describe('LoRA Operation E2E Tests', () => {
    const sdk = createTestSdk();

    it('should start a lora training operation and wait for status change', async () => {
        // Now use the uploaded file URL in the lora training operation
        const createdOperation = await sdk.operations.run.lora.training({
            input: {
                modelType: 'flux',
                input: {
                    input_images: 'https://hautech-public-dev.s3.us-east-1.amazonaws.com/dataset.zip',
                    training_steps: 100,
                },
            },
        });

        // wait should resolve once status changes from initial or reaches a terminal state
        const waited = await sdk.operations.wait(createdOperation, 120_000);
        expect(waited).toBeDefined();
        expect(waited.id).toBe(createdOperation.id);
        expect(typeof waited.status).toBe('string');

        // Also verify we can fetch it by id
        const got = await sdk.operations.get(createdOperation.id);
        expect(got).toBeDefined();
        expect(got!.id).toBe(createdOperation.id);
        expect(got!.status).toBe('finished');
    }, 120_000);
});
