import { OperationEntity, OperationsApi } from '../../autogenerated';
import { w3cwebsocket as WebSocketClient } from 'websocket';
import { HautechError } from '../errors';

// This is pretty much a dirty solution until we need to rework this part.
export class OperationsListener {
    useWebsocket: {
        endpoint: string;
        token: () => string | Promise<string>;
    } | null = null;
    ws: WebSocketClient | null = null;
    operations: () => Promise<OperationsApi>;
    allowPollingFallback: boolean;

    constructor({
        ws,
        operations,
        allowPollingFallback = false,
    }: {
        ws: {
            endpoint: string;
            token: () => string | Promise<string>;
        } | null;
        operations: () => Promise<OperationsApi>;
        allowPollingFallback: boolean;
    }) {
        if (!ws) allowPollingFallback = true;

        if (ws) {
            this.useWebsocket = {
                endpoint: ws?.endpoint,
                token: ws?.token,
            };
        }

        this.operations = operations;
        this.allowPollingFallback = allowPollingFallback;
    }

    operationsStore: Record<string, OperationEntity> = {};

    async getOperation(id: string): Promise<OperationEntity | null> {
        const fallbackToPolling = this.allowPollingFallback && !(this.ws?.readyState === WebSocketClient.OPEN);
        if (!this.operationsStore[id] || fallbackToPolling) {
            const api = await this.operations();
            const operation = await api.operationsControllerGetOperationV1(id);
            if (operation.status == 200) this.updateOperation(id, operation.data);
        }
        return this.operationsStore[id] || null;
    }

    private updateOperation(id: string, operation: OperationEntity) {
        const stored = this.operationsStore[id];
        if (!stored || stored.updatedAt < operation.updatedAt) {
            this.operationsStore[id] = operation;
        }
    }

    async subscribe() {
        if (!this.useWebsocket) return;
        try {
            const token = await this.useWebsocket.token();
            this.ws = new WebSocketClient(this.useWebsocket.endpoint, ['1', token]);

            this.ws.onopen = () => {
                this.onOpen();
            };

            this.ws.onerror = (err) => {
                console.error('HautechAI SDK encountered a WebSocket error: ', err);
            };

            this.ws.onmessage = (msg) => {
                if (typeof msg.data === 'string') {
                    this.onMessage(msg.data);
                } else if (msg.data instanceof Buffer) {
                    this.onMessage(msg.data.toString('utf8'));
                } else {
                    this.onMessage(Buffer.from(msg.data).toString('utf8'));
                }
            };

            this.ws.onclose = (event) => {
                this.onClose(event.code, event.reason);
            };
        } catch (err) {
            throw new HautechError(`SDK failed to open websocket: ${err}`);
        }
    }

    onOpen() {
        if (!this.ws) throw new HautechError('Semantics error: this is a bug.');

        this.ws.send(
            JSON.stringify({
                event: 'subscribe',
                data: {
                    channel: 'own_resources',
                },
            }),
        );
    }

    public websocketEnabled() {
        return this.ws?.readyState === WebSocketClient.OPEN;
    }

    onMessage(msg: string) {
        if (!this.ws) throw new HautechError('Semantics error: this is a bug.');

        const { event, data } = JSON.parse(msg) as any;
        switch (event) {
            case 'subscription:created':
                break;
            case 'operation:created':
            case 'operation:updated':
                this.updateOperation(data.id, data);
                break;
        }
    }

    onClose(number: number, reason: string) {
        if (!this.ws) throw new HautechError('Semantics error: this is a bug.');
        // Reset dirty state.
        this.operationsStore = {};
        this.ws = null;
    }

    async close() {
        this.ws?.close();
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
}
