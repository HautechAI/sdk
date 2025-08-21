import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';

describe('LoRA API E2E Tests', () => {
    const sdk = createTestSdk();

    it('should list loras (limit=1) and have proper structure', async () => {
        const result = await sdk.lora.list({ limit: 1 });
        expect(result).toBeDefined();
        expect(Array.isArray(result.data)).toBe(true);
        expect(result.pageInfo).toBeDefined();
        if (result.data.length > 0) {
            const item = result.data[0];
            expect(typeof item.id).toBe('string');
            expect(typeof item.modelName).toBe('string');
            expect(typeof item.modelOwner).toBe('string');
            expect(typeof item.modelVersion).toBe('string');
            expect(typeof item.trainingId).toBe('string');
            expect(typeof item.destination).toBe('string');
            expect(typeof item.status).toBe('string');
            expect(typeof item.triggerWord).toBe('string');
            expect(typeof item.creatorId).toBe('string');
            expect(typeof item.createdAt).toBe('string');
            expect(typeof item.updatedAt).toBe('string');
        }
    }, 60_000);

    it('should start a lora training and wait for status change', async () => {
        const createdLora = await sdk.lora.start({
            inputImages: `https://picsum.photos/seed/${Date.now()}/512/512`,
            triggerWord: `e2e_${Date.now()}`,
            trainingSteps: 1,
        });

        // wait should resolve once status changes from initial or reaches a terminal state
        const waited = await sdk.lora.wait(createdLora, 60_000);
        expect(waited).toBeDefined();
        expect(waited.id).toBe(createdLora.id);
        expect(typeof waited.status).toBe('string');

        // Also verify we can fetch it by id
        const got = await sdk.lora.get(createdLora.id);
        expect(got).toBeDefined();
        expect(got!.id).toBe(createdLora.id);
    }, 120_000);
});
