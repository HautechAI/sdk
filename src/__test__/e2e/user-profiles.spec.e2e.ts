import { beforeAll, describe, expect, it } from 'vitest';
import { createTestDirectorySdk } from '../test-utils';
import { v4 as uuidv4 } from 'uuid';

describe('User Profiles E2E (Directory API)', () => {
    const sdkRoot = createTestDirectorySdk();
    let sdk: ReturnType<typeof createTestDirectorySdk>;

    beforeAll(async () => {
        const externalId = `e2e-${uuidv4()}`;
        await sdkRoot.userProfiles.create({
            externalId,
            name: `E2E User ${externalId}`,
        });

        sdk = createTestDirectorySdk(externalId, {
            userProfiles: {
                create: true,
                read: true,
                update: true,
                list: true,
            },
        });
    });

    it('should fetch self profile', async () => {
        const selfProfile = await sdk.userProfiles.self();
        expect(selfProfile).toBeDefined();
        expect(selfProfile.id).toBeDefined();
    });

    it('should list user profiles (and likely include self)', async () => {
        const list = await sdkRoot.userProfiles.list();
        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBeGreaterThanOrEqual(1);
    });

    it('should update profile fields (name)', async () => {
        const self = await sdk.userProfiles.self();
        const newName = `${self.name || 'E2E User'} Updated`;

        const updated = await sdkRoot.userProfiles.update(self.id, {
            name: newName,
        });

        expect(updated).toBeDefined();
        expect(updated.id).toBe(self.id);
        expect(updated.name).toBe(newName);

        const selfAfter = await sdk.userProfiles.self();
        expect(selfAfter.name).toBe(newName);
    });

    it('should resolve handle via public lookup when available', async () => {
        const selfProfile = await sdk.userProfiles.self();
        expect(selfProfile).toBeDefined();
        expect(selfProfile.handle).toBeDefined();

        const byHandle = await sdk.userProfiles.getByHandle(selfProfile.handle!);
        expect(byHandle).not.toBeNull();
        expect(byHandle!.handle).toBe(selfProfile.handle);
    });

    it('should get user profile by ID', async () => {
        const selfProfile = await sdk.userProfiles.self();
        expect(selfProfile).toBeDefined();
        expect(selfProfile.id).toBeDefined();

        const byId = await sdk.userProfiles.getById(selfProfile.id);
        expect(byId).not.toBeNull();
        expect(byId!.id).toBe(selfProfile.id);
        expect(byId!.handle).toBe(selfProfile.handle);
    });

    it('should return null for non-existent user ID', async () => {
        const nonExistentId = uuidv4();
        const result = await sdk.userProfiles.getById(nonExistentId);
        expect(result).toBeNull();
    });
});
