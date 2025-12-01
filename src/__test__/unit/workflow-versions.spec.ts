import { describe, expect, it, beforeEach, vi } from 'vitest';
import axios from 'axios';
import { useWorkflowVersionsApi } from '../../sdk/api-definitions/workflow-versions';

describe('Workflow Versions API Tests', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('publish', () => {
        it('should publish a new workflow version', async () => {
            const mockResponse = {
                id: 'version-id-123',
                workflowId: 'workflow-id-123',
                ownerId: 'owner-id-123',
                publisherId: 'publisher-id-123',
                versionNumber: 1,
                workflowVersion: '1.0.0',
                changelog: 'Initial release',
                metadata: {},
                customExecutionPriceSnapshot: null,
                estimatedExecutionPriceSnapshot: null,
                publishedAt: '2024-01-01T00:00:00Z',
                data: {},
                pipelineTemplate: {},
            };

            vi.spyOn(axios, 'request').mockResolvedValue({ data: mockResponse } as any);

            const workflowVersionsApi = useWorkflowVersionsApi();
            const result = await workflowVersionsApi.publish('workflow-id-123', { changelog: 'Initial release' });

            expect(result).toEqual(mockResponse);
            expect(axios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/v1/workflow-versions/workflows/workflow-id-123',
                    method: 'POST',
                    data: { changelog: 'Initial release' },
                }),
            );
        });
    });

    describe('list', () => {
        it('should list workflow versions', async () => {
            const mockResponse = [
                {
                    id: 'version-id-1',
                    workflowId: 'workflow-id-123',
                    ownerId: 'owner-id-123',
                    publisherId: 'publisher-id-123',
                    versionNumber: 1,
                    workflowVersion: '1.0.0',
                    changelog: 'Initial release',
                    metadata: {},
                    customExecutionPriceSnapshot: null,
                    estimatedExecutionPriceSnapshot: null,
                    publishedAt: '2024-01-01T00:00:00Z',
                },
                {
                    id: 'version-id-2',
                    workflowId: 'workflow-id-123',
                    ownerId: 'owner-id-123',
                    publisherId: 'publisher-id-123',
                    versionNumber: 2,
                    workflowVersion: '1.1.0',
                    changelog: 'Bug fixes',
                    metadata: {},
                    customExecutionPriceSnapshot: null,
                    estimatedExecutionPriceSnapshot: null,
                    publishedAt: '2024-01-02T00:00:00Z',
                },
            ];

            vi.spyOn(axios, 'request').mockResolvedValue({ data: mockResponse } as any);

            const workflowVersionsApi = useWorkflowVersionsApi();
            const result = await workflowVersionsApi.list('workflow-id-123');

            expect(result).toEqual(mockResponse);
            expect(axios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/v1/workflow-versions/workflows/workflow-id-123',
                    method: 'GET',
                }),
            );
        });
    });

    describe('get', () => {
        it('should get a specific workflow version', async () => {
            const mockResponse = {
                id: 'version-id-123',
                workflowId: 'workflow-id-123',
                ownerId: 'owner-id-123',
                publisherId: 'publisher-id-123',
                versionNumber: 1,
                workflowVersion: '1.0.0',
                changelog: 'Initial release',
                metadata: {},
                customExecutionPriceSnapshot: null,
                estimatedExecutionPriceSnapshot: null,
                publishedAt: '2024-01-01T00:00:00Z',
            };

            vi.spyOn(axios, 'request').mockResolvedValue({ data: mockResponse } as any);

            const workflowVersionsApi = useWorkflowVersionsApi();
            const result = await workflowVersionsApi.get('version-id-123');

            expect(result).toEqual(mockResponse);
            expect(axios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/v1/workflow-versions/version-id-123',
                    method: 'GET',
                }),
            );
        });
    });

    describe('getByNumber', () => {
        it('should get a workflow version by number', async () => {
            const mockResponse = {
                id: 'version-id-123',
                workflowId: 'workflow-id-123',
                ownerId: 'owner-id-123',
                publisherId: 'publisher-id-123',
                versionNumber: 2,
                workflowVersion: '1.1.0',
                changelog: 'Bug fixes',
                metadata: {},
                customExecutionPriceSnapshot: null,
                estimatedExecutionPriceSnapshot: null,
                publishedAt: '2024-01-02T00:00:00Z',
                data: {},
                pipelineTemplate: {},
            };

            vi.spyOn(axios, 'request').mockResolvedValue({ data: mockResponse } as any);

            const workflowVersionsApi = useWorkflowVersionsApi();
            const result = await workflowVersionsApi.getByNumber('workflow-id-123', 2);

            expect(result).toEqual(mockResponse);
            expect(axios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/v1/workflow-versions/workflows/workflow-id-123/version/2',
                    method: 'GET',
                }),
            );
        });
    });

    describe('delete', () => {
        it('should delete a workflow version', async () => {
            vi.spyOn(axios, 'request').mockResolvedValue({ data: undefined } as any);

            const workflowVersionsApi = useWorkflowVersionsApi();
            await workflowVersionsApi.delete('version-id-123');

            expect(axios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/v1/workflow-versions/version-id-123',
                    method: 'DELETE',
                }),
            );
        });
    });
});
