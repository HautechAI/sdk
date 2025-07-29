import { CoreApi, wrapApiCall } from '../../api';

export const useWorkflows = (api: CoreApi) => {
    return {
        create: wrapApiCall(api.workflows.workflowsControllerCreateWorkflowV1),
        get: wrapApiCall(api.workflows.workflowsControllerGetWorkflowV1),
        list: wrapApiCall(api.workflows.workflowsControllerListWorkflowsV1),
        update: wrapApiCall(api.workflows.workflowsControllerUpdateWorkflowV1),
    };
};
