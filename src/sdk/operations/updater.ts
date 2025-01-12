import { ClientSDKOptions } from '../../types';
import { createWebsocket } from '../api';
import { OperationEntity } from '../../internal';

const createOperationUpdater = (options: ClientSDKOptions) => {
    const eventListeners: ((operation: OperationEntity) => void)[] = [];
    const eventListener = (operation: OperationEntity) => {
        eventListeners.forEach((listener) => listener(operation));
    };

    let websocketInited = false;
    const initWebsocket = () => {
        createWebsocket({ callback: eventListener, options, topic: 'operation' });
        websocketInited = true;
    };

    return {
        subscribe: (props: { callback: (operation: OperationEntity) => void }) => {
            eventListeners.push(props.callback);
            if (!websocketInited) initWebsocket();
        },
        unsubscribe: (props: { callback: (operation: OperationEntity) => void }) => {
            eventListeners.splice(eventListeners.indexOf(props.callback), 1);
        },
    };
};

export default createOperationUpdater;
