import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import { SDK } from '../src';
import { recreateSdk } from './utils';

describe('Stacks', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(async () => {
        await sdk.close();
    });

    it('should create stack', async () => {
        const stack = await sdk.stacks.create();
        expect(stack).toBeDefined();

        const sameStack = await sdk.stacks.get({ id: stack.id });
        expect(sameStack).toEqual(stack);
    });

    it('should list stacks', async () => {
        const stacks = await sdk.stacks.list();
        expect(stacks).toBeDefined();
    });

    it('should add and remove operations to stack', async () => {
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

        const stack = await sdk.stacks.create();
        expect(stack).toBeDefined();

        await sdk.stacks.items.add({ stackId: stack.id, itemIds: [operation.id] });

        const stackWithItem = await sdk.stacks.get({ id: stack.id });
        expect(stackWithItem?.items?.map((item) => item.id)).toEqual([operation.id]);

        await sdk.stacks.items.remove({ stackId: stack.id, itemIds: [operation.id] });

        const stackWithoutItem = await sdk.stacks.get({ id: stack.id });
        expect(stackWithoutItem?.items).toEqual([]);
    });
});
