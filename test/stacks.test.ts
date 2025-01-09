import { describe, it, expect } from '@jest/globals';
import { sdk } from './sdk';

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
});
