import { useApi, wrapApiCallNullable } from '../../api-utils';
import { CoreApi } from '../../api-utils';

export const useWorkflowsApi = (hautechApi: CoreApi) =>
    useApi({
        create: hautechApi.workflowsControllerCreateWorkflowV1,
        get: wrapApiCallNullable(hautechApi.workflowsControllerGetWorkflowV1),
        list: hautechApi.workflowsControllerListWorkflowsV1,
        update: hautechApi.workflowsControllerUpdateWorkflowV1,
    });
