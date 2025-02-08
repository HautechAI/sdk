import { describe, it, expect } from '@jest/globals';
import { recreateSdk } from './utils';
import { SDK } from '../src';

describe('Pipelines', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('should create collection pipeline', async () => {
        const pipelineTemplate = sdk.pipelines.constructTemplate((pipeline) => {
            const stack = pipeline.defer.stacks.create({});

            const collection = pipeline.defer.collections.create({});
            const gotCollection = pipeline.defer.collections.get({ collectionId: collection.result.id });

            pipeline.defer.collections.items.add({
                collectionId: gotCollection.result.id,
                itemIds: [stack.result.id],
            });
            pipeline.defer.collections.items.list({
                collectionId: gotCollection.result.id,
            });
            pipeline.defer.collections.items.remove({
                collectionId: gotCollection.result.id,
                itemIds: [stack.result.id],
            });
            // pipeline.defer.collections.updateMetadata({
            //     id: gotCollection.result.id,
            //     update: { overwrite: { name: 'test' } },
            // });
            return pipeline;
        });

        const pipeline = await sdk.pipelines.create({ template: pipelineTemplate });
        expect(pipeline).toBeDefined();

        const finishedPipeline = await sdk.pipelines.wait({ id: pipeline.id });
        expect(finishedPipeline).toBeDefined();
    });
});
