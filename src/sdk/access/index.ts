import { AccessApi } from '../../internal';
import { ClientSDKOptions } from '../../types';
import { useInternalAPI } from '../../api';

const access = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: AccessApi, options });
    return {
        add: async (props: {
            accountId?: string;
            groupId?: string;
            resource: object;
            resourceId: string;
            role: object;
        }): Promise<void> =>
            api.call({
                run: (methods) =>
                    methods.accessControllerAddAccessV1({
                        accountId: props.accountId,
                        groupId: props.groupId,
                        resource: props.resource,
                        resourceId: props.resourceId,
                        role: props.role,
                    }),
            }),
        check: async (props: { action: string; resource: string; resourceId: string }): Promise<void> =>
            api.call({
                run: (methods) => methods.accessControllerCheckAccessV1(props.resource, props.resourceId, props.action),
            }),
        remove: async (props: {
            accountId?: string;
            groupId?: string;
            resource: object;
            resourceId: string;
            role: object;
        }): Promise<void> =>
            api.call({
                run: (methods) =>
                    methods.accessControllerRemoveAccessV1({
                        accountId: props.accountId,
                        groupId: props.groupId,
                        resource: props.resource,
                        resourceId: props.resourceId,
                        role: props.role,
                    }),
            }),
    };
};

export default access;
