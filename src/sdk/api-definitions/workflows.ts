import { Config } from '../../config';
import { api, wrapApiCall } from '../../api';

export const useWorkflows = (config: Config) => ({
    create: wrapApiCall(api.workflowsControllerCreateWorkflowV1, config),
    get: wrapApiCall(api.workflowsControllerGetWorkflowV1, config),
    list: wrapApiCall(api.workflowsControllerListWorkflowsV1, config),
    update: wrapApiCall(api.workflowsControllerUpdateWorkflowV1, config),
});
