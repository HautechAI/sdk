import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { v4 } from 'uuid';

describe('Operations API E2E Tests', () => {
    let sdk = createTestSdk();
    let createdOperationId: string;

    beforeAll(async () => {
        const echoOperation = await sdk.operations.run.echo.v1({
            input: {
                text: 'Test operation for e2e testing',
            },
        });
        createdOperationId = echoOperation.id;
    });

    describe('Operations CRUD Operations', () => {
        it('should get a specific operation by ID', async () => {
            const result = await sdk.operations.get(createdOperationId);
            expect(result).toBeDefined();
            expect(result!.id).toBe(createdOperationId);
            expect(result!.status).toBeDefined();
            expect(result!.createdAt).toBeDefined();
            expect(result!.updatedAt).toBeDefined();
        });

        it('should get a non-existent operation', async () => {
            const result = await sdk.operations.get(v4());
            expect(result).toBeNull();
        });

        it('should list operations', async () => {
            const result = await sdk.operations.list();
            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            const createdOperation = result.data.find((operation) => operation.id === createdOperationId);
            if (createdOperation) {
                expect(createdOperation.id).toBe(createdOperationId);
            }
        });

        it('should list operations with pagination', async () => {
            const result = await sdk.operations.list({
                limit: 2,
                cursor: undefined, // First page
            });

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toEqual(2);
            expect(result.pageInfo).toBeDefined();

            const nextPageResult = await sdk.operations.list({
                limit: 2,
                cursor: result.pageInfo.nextCursor,
            });

            expect(nextPageResult).toBeDefined();
            expect(nextPageResult.data).toBeDefined();
            expect(Array.isArray(nextPageResult.data)).toBe(true);
            expect(nextPageResult.data.length).toBeLessThanOrEqual(2);
            expect(nextPageResult.pageInfo).toBeDefined();
        });

        it('should get multiple operations by IDs', async () => {
            const op1 = await sdk.operations.run.echo.v1({
                input: {
                    text: 'op1',
                },
            });

            const op2 = await sdk.operations.run.echo.v1({
                input: {
                    text: 'op2',
                },
            });

            const operationIds = [op1.id, op2.id];

            const result = await sdk.operations.getMany({
                ids: operationIds,
            });

            expect(result).toBeDefined();
            expect(result.length).toEqual(2);
        });

        it('should update operation metadata', async () => {
            const updatedMetadata = {
                testType: 'e2e',
                description: 'Updated operation metadata',
                lastModified: new Date().toISOString(),
            };

            const result = await sdk.operations.updateMetadata(createdOperationId, {
                overwrite: updatedMetadata,
            });

            expect(result).toBeDefined();
            expect(result.id).toBe(createdOperationId);
        });
    });

    describe('Operations Run Tests', () => {
        it('should run echo operation', async () => {
            const testMessage = 'Hello from e2e test';

            const result = await sdk.operations.run.echo.v1({
                input: {
                    text: testMessage,
                },
            });

            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.status).toBeDefined();
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();

            expect(['pending', 'finished', 'failed'].includes(result.status)).toBe(true);
        });

        it('should run math operation', async () => {
            const result = await sdk.operations.run.math.v1({
                input: {
                    code: '1+1',
                },
            });

            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.status).toBeDefined();
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();

            expect(['pending', 'finished', 'failed'].includes(result.status)).toBe(true);
        });

        it('should wait for operation completion', async () => {
            const operation = await sdk.operations.run.math.v1({
                input: {
                    code: '1+1',
                },
            });

            expect(operation).toBeDefined();
            expect(operation.id).toBeDefined();

            const completedOperation = await sdk.operations.wait(operation, 10000);

            expect(completedOperation).toBeDefined();
            expect(completedOperation.id).toBe(operation.id);
            expect(completedOperation.status).toBe('finished');
            expect(completedOperation.output.data).toEqual(2);
        });

        it('should run google nano banana operation', async () => {
            const result = await sdk.operations.run.google.nano_banana.v1({
                input: {
                    imageIds: ['test-image-id-1'],
                    prompt: 'Generate banana-style transformation',
                },
            });

            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.status).toBeDefined();
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();

            expect(['pending', 'finished', 'failed'].includes(result.status)).toBe(true);
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid operation ID gracefully', async () => {
            const invalidId = 'invalid-operation-id';

            try {
                await sdk.operations.get(invalidId);
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid operation IDs for getMany', async () => {
            const invalidIds = ['invalid-id-1', 'invalid-id-2'];

            try {
                await sdk.operations.getMany({
                    ids: invalidIds,
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });

        it('should handle invalid operation update', async () => {
            const invalidId = 'invalid-operation-id';

            try {
                await sdk.operations.updateMetadata(invalidId, {
                    overwrite: { test: 'data' },
                });
                expect(true).toBe(false); // Should not reach here
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });
});
