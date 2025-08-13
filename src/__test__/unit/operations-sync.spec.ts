import { describe, it, expect } from 'vitest';
import { useOperationsApi } from '../../sdk/api-definitions/operations';

describe('Operations Sync', () => {
    it('should expose all new operations that were synced from production API', () => {
        const operationsApi = useOperationsApi();

        // Test newly added operations are accessible
        expect(operationsApi.run.imagen4.v1).toBeDefined();
        expect(operationsApi.run.imagine.flux_1_1_pro_ultra.v1).toBeDefined();
        expect(operationsApi.run.animate.luma.photon.v1).toBeDefined();
        expect(operationsApi.run.seedream3.v1).toBeDefined();
        expect(operationsApi.run.upscale.topaz.v1).toBeDefined();
        expect(operationsApi.run.veo3.v1).toBeDefined();
        expect(operationsApi.run.veo3.fast.v1).toBeDefined();

        // Verify existing operations still work
        expect(operationsApi.run.gpt.v1).toBeDefined();
        expect(operationsApi.run.math.v1).toBeDefined();
        expect(operationsApi.run.echo.v1).toBeDefined();
        expect(operationsApi.run.imagine.kate.v1).toBeDefined();
        expect(operationsApi.run.upscale.v1).toBeDefined();

        // Verify management operations still work
        expect(operationsApi.get).toBeDefined();
        expect(operationsApi.getMany).toBeDefined();
        expect(operationsApi.list).toBeDefined();
        expect(operationsApi.updateMetadata).toBeDefined();
        expect(operationsApi.wait).toBeDefined();
    });

    it('should have correct function types for new operations', () => {
        const operationsApi = useOperationsApi();

        // All operations should be functions
        expect(typeof operationsApi.run.imagen4.v1).toBe('function');
        expect(typeof operationsApi.run.imagine.flux_1_1_pro_ultra.v1).toBe('function');
        expect(typeof operationsApi.run.animate.luma.photon.v1).toBe('function');
        expect(typeof operationsApi.run.seedream3.v1).toBe('function');
        expect(typeof operationsApi.run.upscale.topaz.v1).toBe('function');
        expect(typeof operationsApi.run.veo3.v1).toBe('function');
        expect(typeof operationsApi.run.veo3.fast.v1).toBe('function');
    });
});