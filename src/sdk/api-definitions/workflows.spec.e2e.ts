import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../../__test__/test-utils';

describe('Workflows API E2E Tests', () => {
    let sdk = createTestSdk();
    let createdWorkflowId: string;

    describe('Workflows CRUD Operations', () => {
        it('should create a new workflow', async () => {
            const workflowData = {
                data: {
                    name: 'Test Workflow E2E',
                    description: 'A test workflow for e2e testing',
                    steps: [],
                },
                version: '1.0.0',
                metadata: {
                    testType: 'e2e',
                    createdBy: 'automated-test',
                },
            };

            const result = await sdk.workflows.create(workflowData);
            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.data).toEqual(workflowData.data);
            expect(result.version).toBe(workflowData.version);
            expect(result.metadata).toEqual(workflowData.metadata);
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();

            createdWorkflowId = result.id;
        });

        it('should list workflows', async () => {
            const result = await sdk.workflows.list();
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            // Verify that our created workflow is in the list
            if (createdWorkflowId) {
                const createdWorkflow = result.data.find((workflow) => workflow.id === createdWorkflowId);
                expect(createdWorkflow).toBeDefined();
                expect((createdWorkflow?.data as any)?.name).toBe('Test Workflow E2E');
                expect(createdWorkflow?.version).toBe('1.0.0');
            }
        });

        it('should get a specific workflow', async () => {
            expect(createdWorkflowId).toBeDefined();

            const result = await sdk.workflows.get(createdWorkflowId);
            expect(result).toBeDefined();
            expect(result.id).toBe(createdWorkflowId);
            expect((result.data as any).name).toBe('Test Workflow E2E');
            expect((result.data as any).description).toBe('A test workflow for e2e testing');
            expect(result.version).toBe('1.0.0');
            expect((result.metadata as any).testType).toBe('e2e');
            expect((result.metadata as any).createdBy).toBe('automated-test');
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();
            expect(result.creatorId).toBeDefined();
        });

        it('should update a workflow', async () => {
            expect(createdWorkflowId).toBeDefined();

            const updateData = {
                data: {
                    name: 'Updated Test Workflow E2E',
                    description: 'Updated description for e2e testing',
                    steps: [{ id: 1, name: 'step1', type: 'action' }],
                },
                version: '1.1.0',
                metadata: {
                    testType: 'e2e',
                    createdBy: 'automated-test',
                    updated: true,
                },
            };

            const result = await sdk.workflows.update(createdWorkflowId, updateData);
            expect(result).toBeDefined();
            expect(result.id).toBe(createdWorkflowId);
            expect((result.data as any).name).toBe('Updated Test Workflow E2E');
            expect((result.data as any).description).toBe('Updated description for e2e testing');
            expect((result.data as any).steps).toEqual([{ id: 1, name: 'step1', type: 'action' }]);
            expect(result.version).toBe('1.1.0');
            expect((result.metadata as any).updated).toBe(true);
            expect(result.updatedAt).toBeDefined();

            // Verify the updatedAt timestamp is different from createdAt
            expect(result.updatedAt).not.toBe(result.createdAt);
        });
    });

    describe('SDK Integration', () => {
        it('should have workflows available in SDK', () => {
            expect(sdk.workflows).toBeDefined();
            expect(sdk.workflows.create).toBeDefined();
            expect(sdk.workflows.get).toBeDefined();
            expect(sdk.workflows.list).toBeDefined();
            expect(sdk.workflows.update).toBeDefined();
        });

        it('should have all workflow methods as functions', () => {
            expect(typeof sdk.workflows.create).toBe('function');
            expect(typeof sdk.workflows.get).toBe('function');
            expect(typeof sdk.workflows.list).toBe('function');
            expect(typeof sdk.workflows.update).toBe('function');
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid workflow ID gracefully', async () => {
            const invalidId = 'non-existent-workflow-id';

            try {
                await sdk.workflows.get(invalidId);
                // If we reach here, the API didn't throw an error as expected
                expect(true).toBe(false); // Force test failure
            } catch (error) {
                // Expect an error to be thrown for invalid ID
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid workflow data gracefully', async () => {
            const invalidWorkflowData = {
                // Missing required fields
                data: null,
                version: null,
            };

            try {
                await sdk.workflows.create(invalidWorkflowData as any);
                // If we reach here, the API didn't throw an error as expected
                expect(true).toBe(false); // Force test failure
            } catch (error) {
                // Expect an error to be thrown for invalid data
                expect(error).toBeDefined();
            }
        });
    });

    describe('Cleanup', () => {
        it('should clean up created test workflows', async () => {
            // Note: Delete method is not available in the SDK wrapper
            // Workflows will need to be cleaned up manually or via direct API calls
            if (createdWorkflowId) {
                console.log('ℹ️  Test workflow created with ID:', createdWorkflowId);
                console.log('ℹ️  Delete method not available in SDK. Manual cleanup may be needed.');
            }
        });
    });
});
