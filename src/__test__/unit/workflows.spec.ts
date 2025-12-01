import { describe, expect, it, beforeEach, vi } from 'vitest';
import axios from 'axios';
import { useWorkflowsApi } from '../../sdk/api-definitions/workflows';

describe('Workflows API Tests', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getByAlias', () => {
        it('should get a workflow by alias', async () => {
            const mockResponse = {
                id: 'workflow-id-123',
                ownerId: 'owner-id-123',
                alias: 'my-workflow-alias',
                name: 'My Workflow',
                description: 'A test workflow',
                metadata: {},
                data: {},
                pipelineTemplate: {},
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z',
            };

            vi.spyOn(axios, 'request').mockResolvedValue({ data: mockResponse } as any);

            const workflowsApi = useWorkflowsApi();
            const result = await workflowsApi.getByAlias('my-workflow-alias');

            expect(result.data).toEqual(mockResponse);
            expect(axios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/v1/workflows/public/alias/my-workflow-alias',
                    method: 'GET',
                }),
            );
        });

        it('should return null data when workflow alias is not found', async () => {
            vi.spyOn(axios, 'request').mockRejectedValue({
                response: { status: 404 },
                isAxiosError: true,
            });

            const workflowsApi = useWorkflowsApi();
            const result = await workflowsApi.getByAlias('non-existent-alias');

            expect(result.data).toBeNull();
        });
    });
});
