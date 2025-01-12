import { MethodsPermissions } from '../types';

export const defaultPermissions: MethodsPermissions = {
    access: { add: true, read: true, remove: true },
    accounts: { create: false, read: false },
    balances: { read: true, self: { read: true, update: false }, update: false },
    collections: {
        children: { add: true, read: true, remove: true },
        create: true,
        parents: { add: true, read: true, remove: true },
        read: true,
        stacks: { add: true, remove: true },
        update: true,
    },
    groups: { accounts: { add: false, read: true, remove: false }, create: false, delete: false, read: true },
    images: { create: true, read: true },
    operations: { create: true, read: true, metadata: { update: true } },
    pipelines: { create: true, read: true, update: true },
    poses: { create: true, read: true },
    stacks: { create: true, operations: { add: true, remove: true }, read: true, metadata: { update: true } },
    storage: { create: true, delete: true, read: true, update: true },
};

export const defaultRootPermissions: MethodsPermissions = {
    access: { add: true, read: true, remove: true },
    accounts: { create: true, read: true },
    balances: { read: true, self: { read: true, update: true }, update: true },
    collections: {
        children: { add: true, read: true, remove: true },
        create: true,
        parents: { add: true, read: true, remove: true },
        read: true,
        stacks: { add: true, remove: true },
        update: true,
    },
    groups: { accounts: { add: true, read: true, remove: true }, create: true, delete: true, read: true },
    images: { create: true, read: true },
    operations: { create: true, read: true, metadata: { update: true } },
    pipelines: { create: true, read: true, update: true },
    poses: { create: true, read: true },
    stacks: { create: true, operations: { add: true, remove: true }, read: true, metadata: { update: true } },
    storage: { create: true, delete: true, read: true, update: true },
};
