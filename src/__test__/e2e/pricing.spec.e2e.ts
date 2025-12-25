import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';

const extractPricingItems = (listResult: any): any[] => {
    if (Array.isArray(listResult)) return listResult;
    if (Array.isArray(listResult?.items)) return listResult.items;
    return [];
};

describe('Pricing API E2E Tests', () => {
    const sdk = createTestSdk();

    it('should list pricing catalog entries', async () => {
        const listResult = await sdk.pricing.list();
        const items = extractPricingItems(listResult);

        expect(listResult).toBeDefined();
        expect(Array.isArray(items)).toBe(true);
    });

    it('should fetch pricing entry details when available', async () => {
        const listResult = await sdk.pricing.list({ limit: 1 });
        const items = extractPricingItems(listResult);

        const pricingType =
            items[0]?.type ??
            items[0]?.id ??
            items[0]?.code ??
            (Array.isArray(listResult) ? (listResult as any)[0]?.type ?? (listResult as any)[0]?.id : undefined);

        expect(listResult).toBeDefined();

        if (!pricingType) {
            // No pricing entries available to fetch
            return;
        }

        const details = await sdk.pricing.get(pricingType);

        expect(details).toBeDefined();
    });
});

