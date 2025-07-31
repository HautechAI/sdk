import { wrapApiCallNullable } from '../../api';
import { CoreApi } from '../../api';

export const useWorkflowsApi = (hautechApi: CoreApi) => ({
    create: hautechApi.workflowsControllerCreateWorkflowV1,
    get: wrapApiCallNullable(hautechApi.workflowsControllerGetWorkflowV1),
    list: hautechApi.workflowsControllerListWorkflowsV1,
    update: hautechApi.workflowsControllerUpdateWorkflowV1,
});