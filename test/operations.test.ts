import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import { recreateSdk } from './utils';
import { SDK } from '../src';

describe('Operations', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('should create operation', async () => {
        const file = new Blob([fs.readFileSync('./test/image.jpeg')], { type: 'image/jpeg' });

        const image = await sdk.images.createFromFile({ file });
        expect(image).toBeDefined();

        const operation = await sdk.operations.run.haute.linda.v1({
            input: {
                aspectRatio: '1:1',
                imageWeight: 0.5,
                inferenceSteps: 20,
                guidanceScale: 7,
                negativePrompt: 'A ugly image of a cat',
                prompt: 'A beautiful image of a cat',
                productImageId: image.id,
                seed: 123,
                strength: 0.5,
            },
        });
        expect(operation).toBeDefined();

        const sameOperation = await sdk.operations.get({ id: operation.id });
        expect(sameOperation).toEqual(operation);
    });

    it('should list operations', async () => {
        const operations = await sdk.operations.list();
        expect(operations).toBeDefined();
    });

    it('should wait for the operation to finish', async () => {
        const sdk = recreateSdk();

        const file = new Blob([fs.readFileSync('./test/image.jpeg')], { type: 'image/jpeg' });

        const image = await sdk.images.createFromFile({ file });
        expect(image).toBeDefined();

        const operation = await sdk.operations.run.negateImage.v1({
            input: {
                imageId: image.id,
            },
        });
        expect(operation).toBeDefined();

        const waitedOperation = await sdk.operations.wait(operation);
        expect(waitedOperation).toBeDefined();

        sdk.close();
    });
});
