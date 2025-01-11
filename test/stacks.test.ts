import { describe, it, expect } from '@jest/globals';
import { sdk } from './utils';

describe('Stacks', () => {
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

    it('should add operations to stacks', async () => {
        const operation = await sdk.operations.create.constructPrompt.v1({
            input: {
                age: 'adult',
                angle: 'front',
                background: 'beach',
                ethnicity: 'asian',
                gender: 'female',
                photoType: 'fullbody',
            },
        });
        expect(operation).toBeDefined();

        const stack = await sdk.stacks.create();
        expect(stack).toBeDefined();

        await sdk.stacks.operations.add({ stackId: stack.id, operationIds: [operation.id] });
    });
});
