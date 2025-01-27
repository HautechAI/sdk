// This file is auto-generated. Do not edit manually.
export type MethodsPermissions = {
    access: {
        add: boolean;
        read: boolean;
        remove: boolean;
    };
    accounts: {
        create: boolean;
        read: boolean;
    };
    balances: {
        read: boolean;
        update: boolean;
        self: {
            read: boolean;
            update: boolean;
        };
    };
    collections: {
        create: boolean;
        read: boolean;
        update: boolean;
        items: {
            add: boolean;
            read: boolean;
            remove: boolean;
        };
    };
    groups: {
        create: boolean;
        read: boolean;
        delete: boolean;
        accounts: {
            add: boolean;
            remove: boolean;
            read: boolean;
        };
    };
    images: {
        create: boolean;
        read: boolean;
    };
    operations: {
        create: boolean;
        read: boolean;
        metadata: {
            update: boolean;
        };
    };
    pipelines: {
        create: boolean;
        read: boolean;
        update: boolean;
    };
    poses: {
        create: boolean;
        read: boolean;
    };
    stacks: {
        create: boolean;
        read: boolean;
        items: {
            add: boolean;
            remove: boolean;
        };
        metadata: {
            update: boolean;
        };
    };
    storage: {
        create: boolean;
        delete: boolean;
        read: boolean;
        update: boolean;
    };
};