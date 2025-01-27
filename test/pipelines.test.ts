import { describe, it, expect } from '@jest/globals';
import { sdk } from './utils';

describe('Pipelines', () => {
    it('should create pipeline', async () => {
        const pipelineTemplate = sdk.pipelines.constructTemplate((pipeline) => {
            const collection = pipeline.defer.collections.create({});
            const gotCollection = pipeline.defer.collections.get({ collectionId: collection.result.id });
            return pipeline;
        });

        const pipeline = await sdk.pipelines.create({ template: pipelineTemplate });
        expect(pipeline).toBeDefined();

        const finishedPipeline = await sdk.pipelines.wait({ id: pipeline.id });
        expect(finishedPipeline).toBeDefined();
    });
});
