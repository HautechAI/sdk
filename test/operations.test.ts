import { describe, it, expect } from '@jest/globals';
import { sdk } from './utils';

describe('Operations', () => {
    it('should create construct prompt operation', async () => {
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
    });
});
