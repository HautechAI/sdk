import { io } from 'socket.io-client';
import { Config } from '../config';

import type { Socket } from 'socket.io-client';
import { EntityEventKeys, EntityEventPayload, SubscribePayload, WsEventEntity, WsEventMap } from './ws-events.types';

export const useWsClient = (config: Config) => new WsClient(config);

export class WsClient {
    private socket?: Socket;

    constructor(public config: Config) {}

    private getSocket(): Socket {
        if (!this.socket) {
            this.socket = io(this.config.baseWsUrl, {
                ...(this.config.wsConfig || {}),
                auth: (cb) => {
                    Promise.resolve(this.config.authToken()).then((token) => {
                        cb({
                            token,
                        });
                    });
                },
            });
        }

        return this.socket;
    }

    public onConnect(cb: () => Promise<void>): void {
        const ws = this.getSocket();

        if (ws.connected) {
            cb();
            return;
        }

        ws.on('connect', async () => {
            await cb();
        });
    }

    public subscribe<T extends keyof WsEventMap>(topic: T, cb: (data: WsEventMap[T]) => void): void {
        this.getSocket().on(topic, cb as any);
    }

    public subscribeEntityById<T extends WsEventEntity>(
        entity: T,
        id: string,
        cb: (data: EntityEventPayload<T>) => void,
    ): void {
        this.getSocket().emit('entity:subscribe', {
            entity,
            id,
        } satisfies SubscribePayload);

        this.subscribe<EntityEventKeys<T>>(`${entity}:${id}` as EntityEventKeys<T>, cb);
    }

    public unsubscribeEntityById<T extends WsEventEntity>(
        entity: T,
        id: string,
        cb?: (data: EntityEventPayload<T>) => void,
    ): void {
        this.getSocket().emit('entity:unsubscribe', {
            entity,
            id,
        } satisfies SubscribePayload);
        this.unsubscribe<EntityEventKeys<T>>(`${entity}:${id}` as EntityEventKeys<T>, cb as any);
    }

    public onError(cb: (error: Error) => void): void {
        this.getSocket().on('connect_error', (err: Error) => {
            cb(err);
        });

        this.getSocket().on('server_error', (err: Error) => {
            cb(err);
        });
    }

    public unsubscribe<T extends keyof WsEventMap>(topic: T, cb?: (data: WsEventMap[T]) => void): void {
        if (cb) {
            this.getSocket().off(topic, cb as any);
        } else {
            this.getSocket().off(topic);
        }
    }

    public offError(cb?: (error: Error) => void): void {
        if (cb) {
            this.getSocket().off('connect_error', cb);
            this.getSocket().off('server_error', cb);
        } else {
            this.getSocket().off('connect_error');
            this.getSocket().off('server_error');
        }
    }
}
