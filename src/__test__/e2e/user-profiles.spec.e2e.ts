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
        expect(list.length).at.least(1);
    });

    it('should update profile fields (handle, name, email, pictureUrl)', async () => {
        const self = await sdk.userProfiles.self();
        const newHandle = `e2e-handle-${uuidv4()}`;
        const newName = `${self.name || 'E2E User'} Updated`;
        const newEmail = `e2e+${uuidv4()}@example.com`;
        const newPictureUrl = `https://example.com/${uuidv4()}.png`;

        const updated = await sdk.userProfiles.update(self.id, {
            handle: newHandle,
            name: newName,
            email: newEmail,
            pictureUrl: newPictureUrl,
        });

        expect(updated).toBeDefined();
        expect(updated.id).toBe(self.id);
        expect(updated.handle).toBe(newHandle);
        expect(updated.name).toBe(newName);
        expect(updated.email).toBe(newEmail);
        expect(updated.pictureUrl).toBe(newPictureUrl);

        const selfAfter = await sdk.userProfiles.self();
        expect(selfAfter.handle).toBe(newHandle);
        expect(selfAfter.name).toBe(newName);
        expect(selfAfter.email).toBe(newEmail);
        expect(selfAfter.pictureUrl).toBe(newPictureUrl);
    });

    it('should resolve handle via public lookup when available', async () => {
        const selfProfile = await sdk.userProfiles.self();
        expect(selfProfile).toBeDefined();
        expect(selfProfile.handle).toBeDefined();

        const byHandle = await sdk.userProfiles.getByHandle(selfProfile.handle!);
        expect(byHandle).not.toBeNull();
        expect(byHandle!.handle).toBe(selfProfile.handle);
    });
});
