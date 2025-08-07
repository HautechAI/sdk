import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';

describe('Pipeline Defer Methods Tests', () => {
    let sdk = createTestSdk();

    describe('Access Defer Methods', () => {
        it('should create defer.access.grant method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const grantTask = pipeline.defer.access.grant({
                    principalType: 'account',
                    principalId: 'test-account-id',
                    resourceId: 'test-resource-id',
                    access: 'can_view',
                });

                pipeline.output = grantTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['access', 'grant']);
        });

        it('should create defer.access.attach method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const attachTask = pipeline.defer.access.attach({
                    resourceId: 'test-resource-id',
                    parentResourceId: 'test-parent-resource-id',
                });

                pipeline.output = attachTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['access', 'attach']);
        });
    });

    describe('Accounts Defer Methods', () => {
        it('should create defer.accounts.create method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const createTask = pipeline.defer.accounts.create({
                    alias: 'test-user',
                });

                pipeline.output = createTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'create']);
        });

        it('should create defer.accounts.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.accounts.get({
                    id: 'test-account-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'get']);
        });

        it('should create defer.accounts.self method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const selfTask = pipeline.defer.accounts.self('test-account-id');

                pipeline.output = selfTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'self']);
        });

        it('should create defer.accounts.list method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const listTask = pipeline.defer.accounts.list({
                    limit: 10,
                });

                pipeline.output = listTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'list']);
        });

        it('should create defer.accounts.update method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const updateTask = pipeline.defer.accounts.update({
                    id: 'test-account-id',
                    alias: 'updated-alias',
                });

                pipeline.output = updateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'update']);
        });

        it('should create defer.accounts.balance.add method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const addBalanceTask = pipeline.defer.accounts.balance.add({
                    amount: '100',
                    accountId: 'test-account-id',
                });

                pipeline.output = addBalanceTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'balance', 'add']);
        });

        it('should create defer.accounts.balance.self method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const selfBalanceTask = pipeline.defer.accounts.balance.self('test-account-id');

                pipeline.output = selfBalanceTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'balance', 'self']);
        });

        it('should create defer.accounts.balance.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getBalanceTask = pipeline.defer.accounts.balance.get({
                    accountId: 'test-account-id',
                });

                pipeline.output = getBalanceTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['accounts', 'balance', 'get']);
        });
    });

    describe('Collections Defer Methods', () => {
        it('should create defer.collections.create method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const createTask = pipeline.defer.collections.create({
                    metadata: { name: 'Test Collection' },
                });

                pipeline.output = createTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['collections', 'create']);
        });

        it('should create defer.collections.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.collections.get({
                    collectionId: 'test-collection-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['collections', 'get']);
        });

        it('should create defer.collections.list method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const listTask = pipeline.defer.collections.list({
                    limit: 10,
                });

                pipeline.output = listTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['collections', 'list']);
        });

        it('should create defer.collections.metadata.update method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const updateTask = pipeline.defer.collections.metadata.update({
                    id: 'test-collection-id',
                    update: { overwrite: { key: 'value' } },
                });

                pipeline.output = updateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['collections', 'metadata', 'update']);
        });

        it('should create defer.collections.items.add method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const addTask = pipeline.defer.collections.items.add({
                    collectionId: 'test-collection-id',
                    itemIds: ['test-item-id'],
                });

                pipeline.output = addTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['collections', 'items', 'add']);
        });

        it('should create defer.collections.items.list method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const listTask = pipeline.defer.collections.items.list({
                    collectionId: 'test-collection-id',
                });

                pipeline.output = listTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['collections', 'items', 'list']);
        });

        it('should create defer.collections.items.remove method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const removeTask = pipeline.defer.collections.items.remove({
                    collectionId: 'test-collection-id',
                    itemIds: ['test-item-id'],
                });

                pipeline.output = removeTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['collections', 'items', 'remove']);
        });
    });

    describe('Groups Defer Methods', () => {
        it('should create defer.groups.create method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const createTask = pipeline.defer.groups.create('test-group-id');

                pipeline.output = createTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['groups', 'create']);
        });

        it('should create defer.groups.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.groups.get({
                    id: 'test-group-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['groups', 'get']);
        });

        it('should create defer.groups.delete method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const deleteTask = pipeline.defer.groups.delete({
                    id: 'test-group-id',
                });

                pipeline.output = deleteTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['groups', 'delete']);
        });

        it('should create defer.groups.accounts.add method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const addTask = pipeline.defer.groups.accounts.add({
                    accountId: 'test-account-id',
                    groupId: 'test-group-id',
                    role: 'member',
                });

                pipeline.output = addTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['groups', 'accounts', 'add']);
        });

        it('should create defer.groups.accounts.remove method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const removeTask = pipeline.defer.groups.accounts.remove({
                    accountId: 'test-account-id',
                    groupId: 'test-group-id',
                    role: 'member',
                });

                pipeline.output = removeTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['groups', 'accounts', 'remove']);
        });
    });

    describe('Images Defer Methods', () => {
        it('should create defer.images.getMany method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getManyTask = pipeline.defer.images.getMany({
                    ids: ['image1', 'image2'],
                });

                pipeline.output = getManyTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['images', 'getMany']);
        });

        it('should create defer.images.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.images.get({
                    id: 'test-image-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['images', 'get']);
        });

        it('should create defer.images.representations.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.images.representations.get({
                    imageId: 'test-image-id',
                    type: 'sam.v1',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['images', 'representations', 'get']);
        });
    });

    describe('Videos Defer Methods', () => {
        it('should create defer.videos.getMany method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getManyTask = pipeline.defer.videos.getMany({
                    ids: ['video1', 'video2'],
                });

                pipeline.output = getManyTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['videos', 'getMany']);
        });

        it('should create defer.videos.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.videos.get({
                    id: 'test-video-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['videos', 'get']);
        });
    });

    describe('Operations Defer Methods', () => {
        it('should create defer.operations.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.operations.get({
                    id: 'test-operation-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'get']);
        });

        it('should create defer.operations.getMany method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getManyTask = pipeline.defer.operations.getMany({
                    ids: ['op1', 'op2'],
                });

                pipeline.output = getManyTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'getMany']);
        });

        it('should create defer.operations.list method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const listTask = pipeline.defer.operations.list({
                    limit: 10,
                });

                pipeline.output = listTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'list']);
        });

        it('should create defer.operations.metadata.update method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const updateTask = pipeline.defer.operations.metadata.update({
                    id: 'test-operation-id',
                    update: { overwrite: { key: 'value' } },
                });

                pipeline.output = updateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'metadata', 'update']);
        });
    });

    describe('Poses Defer Methods', () => {
        it('should create defer.poses.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.poses.get({
                    id: 'test-pose-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['poses', 'get']);
        });

        it('should create defer.poses.list method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const listTask = pipeline.defer.poses.list({
                    limit: 10,
                });

                pipeline.output = listTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['poses', 'list']);
        });

        it('should create defer.poses.preview.set method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const setTask = pipeline.defer.poses.preview.set({
                    poseId: 'test-pose-id',
                    previewImageId: 'test-preview-image-id',
                });

                pipeline.output = setTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['poses', 'preview', 'set']);
        });

        it('should create defer.poses.metadata.update method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const updateTask = pipeline.defer.poses.metadata.update({
                    id: 'test-pose-id',
                    update: { overwrite: { key: 'value' } },
                });

                pipeline.output = updateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['poses', 'metadata', 'update']);
        });
    });

    describe('Stacks Defer Methods', () => {
        it('should create defer.stacks.create method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const createTask = pipeline.defer.stacks.create({
                    metadata: { name: 'Test Stack' },
                });

                pipeline.output = createTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['stacks', 'create']);
        });

        it('should create defer.stacks.get method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getTask = pipeline.defer.stacks.get({
                    id: 'test-stack-id',
                });

                pipeline.output = getTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['stacks', 'get']);
        });

        it('should create defer.stacks.list method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const listTask = pipeline.defer.stacks.list({
                    limit: 10,
                });

                pipeline.output = listTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['stacks', 'list']);
        });

        it('should create defer.stacks.metadata.update method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const updateTask = pipeline.defer.stacks.metadata.update({
                    id: 'test-stack-id',
                    update: { overwrite: { key: 'value' } },
                });

                pipeline.output = updateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['stacks', 'metadata', 'update']);
        });

        it('should create defer.stacks.items.add method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const addTask = pipeline.defer.stacks.items.add({
                    stackId: 'test-stack-id',
                    itemIds: ['test-item-id'],
                });

                pipeline.output = addTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['stacks', 'items', 'add']);
        });

        it('should create defer.stacks.items.remove method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const removeTask = pipeline.defer.stacks.items.remove({
                    stackId: 'test-stack-id',
                    itemIds: ['test-item-id'],
                });

                pipeline.output = removeTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['stacks', 'items', 'remove']);
        });
    });

    describe('Storage Defer Methods', () => {
        it('should create defer.storage.create method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const createTask = pipeline.defer.storage.create({
                    key: 'test-file.txt',
                    value: 'test content',
                });

                pipeline.output = createTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['storage', 'create']);
        });

        it('should create defer.storage.delete method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const deleteTask = pipeline.defer.storage.delete({
                    key: 'test-storage-key',
                });

                pipeline.output = deleteTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['storage', 'delete']);
        });

        it('should create defer.storage.getMany method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const getManyTask = pipeline.defer.storage.getMany({
                    keys: ['storage1', 'storage2'],
                });

                pipeline.output = getManyTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['storage', 'getMany']);
        });

        it('should create defer.storage.update method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const updateTask = pipeline.defer.storage.update({
                    key: 'test-storage-key',
                    value: 'updated content',
                });

                pipeline.output = updateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['storage', 'update']);
        });
    });
});
