import { io } from 'socket.io-client';
import { Config } from '../config';

import type { Socket } from 'socket.io-client';
import { WsEventMap } from './ws-events';

export const useWsClient = (config: Config) => new WsClient(config);

export class WsClient {
    private socket?: Socket;

    constructor(private config: Config) {}

    private getSocket(): Socket {
        if (!this.socket) {
            this.socket = io(this.config.baseWsUrl, {
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

    public subscribe<T extends keyof WsEventMap>(topic: T, cb: (data: WsEventMap[T]) => void): void;
    public subscribe<T>(topic: string, cb: (data: T) => void): void;
    public subscribe<T>(topic: string, cb: (data: T) => void): void {
        this.getSocket().on(topic, cb);
    }

    public onError(cb: (error: Error) => void): void {
        this.getSocket().on('connect_error', (err: Error) => {
            cb(err);
        });

        this.getSocket().on('server_error', (err: Error) => {
            cb(err);
        });
    }

    public unsubscribe<T extends keyof WsEventMap>(topic: T, cb?: (data: WsEventMap[T]) => void): void;
    public unsubscribe<T>(topic: string, cb?: (data: T) => void): void;
    public unsubscribe<T>(topic: string, cb?: (data: T) => void): void {
        if (cb) {
            this.getSocket().off(topic, cb);
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
