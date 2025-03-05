import { describe, it, expect } from '@jest/globals';
import { SDK } from '../src';
import { recreateSdk } from './utils';

declare module '../src' {
    interface CollectionMetadata {
        field: string;
    }
    interface OperationMetadata {
        field: string;
    }
    interface PipelineMetadata {
        field: string;
    }
    interface StackMetadata {
        field: string;
    }
}

describe('typed metadata', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('collections', async () => {
        const collection = await sdk.collections.create({ metadata: { field: 'test' } });
        const createdCollection = await sdk.collections.get({ id: collection.id });
        expect(createdCollection?.metadata?.field).toEqual('test');

        await sdk.collections.list();
    });

    it('operations', async () => {
        const operation = await sdk.operations.run.haute.linda.v1({
            input: {
                aspectRatio: '1:1',
                imageWeight: 0.5,
                inferenceSteps: 20,
                guidanceScale: 7,
                negativePrompt: 'A ugly image of a cat',
                prompt: 'A beautiful image of a cat',
                productImageId: 'test',
                seed: 123,
                strength: 0.5,
            },
            metadata: { field: 'test' },
        });
        const createPipeline = await sdk.operations.get({ id: operation.id });
        expect(createPipeline?.metadata?.field).toEqual('test');

        await sdk.operations.list();
    });

    it('pipelines', async () => {
        const tmpl = sdk.pipelines.constructTemplate((pipeline) => {
            return pipeline;
        });

        const pipeline = await sdk.pipelines.create({ metadata: { field: 'test' }, template: tmpl });
        const createdPipeline = await sdk.pipelines.get({ id: pipeline.id });
        expect(createdPipeline?.metadata?.field).toEqual('test');
    });
});
