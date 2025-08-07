import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { v4 } from 'uuid';

describe('Workflows API E2E Tests', () => {
    let sdk = createTestSdk();
    let createdWorkflowId: string;

    beforeAll(async () => {
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
        createdWorkflowId = result.id;
    });

    describe('Workflows CRUD Operations', () => {
        it('should create a new workflow', async () => {
            const workflowData = {
                data: {
                    name: 'Test Create Workflow',
                    description: 'A separate workflow to test creation',
                    steps: [{ id: 1, name: 'test-step', type: 'action' }],
                },
                version: '2.0.0',
                metadata: {
                    testType: 'create-test',
                    createdBy: 'create-test',
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
            expect(result.creatorId).toBeDefined();

            expect(result.id).not.toBe(createdWorkflowId);
        });

        it('should list workflows', async () => {
            const result = await sdk.workflows.list();
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            const createdWorkflow = result.data.find((workflow) => workflow.id === createdWorkflowId);
            expect(createdWorkflow).toBeDefined();
            expect((createdWorkflow?.data as any)?.name).toBe('Test Workflow E2E');
            expect(createdWorkflow?.version).toBe('1.0.0');
        });

        it('should get a specific workflow', async () => {
            expect(createdWorkflowId).toBeDefined();

            const result = await sdk.workflows.get(createdWorkflowId);
            expect(result).toBeDefined();
            expect(result!.id).toBe(createdWorkflowId);
            expect((result!.data as any).name).toBe('Test Workflow E2E');
            expect((result!.data as any).description).toBe('A test workflow for e2e testing');
            expect(result!.version).toBe('1.0.0');
            expect((result!.metadata as any).testType).toBe('e2e');
            expect((result!.metadata as any).createdBy).toBe('automated-test');
            expect(result!.createdAt).toBeDefined();
            expect(result!.updatedAt).toBeDefined();
            expect(result!.creatorId).toBeDefined();
        });

        it('should get a not exist workflow', async () => {
            expect(createdWorkflowId).toBeDefined();

            const result = await sdk.workflows.get(v4());
            expect(result).toEqual(null);
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

            const updatedWorkflow = await sdk.workflows.get(createdWorkflowId);
            expect((updatedWorkflow!.data as any).name).toBe('Updated Test Workflow E2E');
            expect((updatedWorkflow!.data as any).description).toBe('Updated description for e2e testing');
            expect(updatedWorkflow!.version).toBe('1.1.0');
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid workflow ID gracefully', async () => {
            const invalidId = 'non-existent-workflow-id';

            try {
                await sdk.workflows.get(invalidId);
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid workflow data gracefully', async () => {
            const invalidWorkflowData = {
                data: null,
                version: null,
            };

            try {
                await sdk.workflows.create(invalidWorkflowData as any);
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
