import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import { sdk } from './utils';

describe('Pipelines', () => {
    it('should create pipeline', async () => {
        const pipeline = await sdk.pipelines.create({
            tasks: (pipe) => {
                const collection = pipe.defer.collections.create({});
                const gotCollection = pipe.defer.collections.get({ collectionId: collection.result.id });
                return pipe;
            },
        });
        expect(pipeline).toBeDefined();

        const finishedPipeline = await sdk.pipelines.wait({ id: pipeline.id });
        expect(finishedPipeline).toBeDefined();
    });
});
