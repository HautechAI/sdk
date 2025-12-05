import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { useWsClient, WsClient } from '../../sdk/ws-client';
import { Config } from '../../config';
import { io } from 'socket.io-client';
import { WsEventMap } from '../../sdk/ws-events.types';

vi.mock('socket.io-client', () => ({
    io: vi.fn(),
}));

describe('WsClient', () => {
    let mockSocket: any;
    let mockConfig: Config;
    let wsClient: WsClient;

    beforeEach(() => {
        // Reset all mocks
        vi.clearAllMocks();

        // Create mock socket
        mockSocket = {
            on: vi.fn(),
            off: vi.fn(),
            emit: vi.fn(),
            disconnect: vi.fn(),
            connected: false,
        };

        // Mock io function
        (io as Mock).mockReturnValue(mockSocket);

        // Create mock config
        mockConfig = {
            baseUrl: 'https://api.test.com',
            baseWsUrl: 'wss://api.test.com',
            authToken: vi.fn().mockResolvedValue('test-token'),
            invalidateAuthToken: vi.fn(),
        };

        wsClient = new WsClient(mockConfig);
    });

    describe('constructor', () => {
        it('should create WsClient instance with config', () => {
            expect(wsClient).toBeInstanceOf(WsClient);
        });

        it('should not create socket immediately', () => {
            expect(io).not.toHaveBeenCalled();
        });
    });

    describe('getSocket', () => {
        it('should create socket with correct configuration on first call', () => {
            // Access private method through public method
            wsClient.onConnect(async () => {});

            expect(io).toHaveBeenCalledWith(mockConfig.baseWsUrl, {
                auth: expect.any(Function),
            });
        });

        it('should reuse existing socket on subsequent calls', () => {
            // First call
            wsClient.onConnect(async () => {});
            expect(io).toHaveBeenCalledTimes(1);

            // Second call
            wsClient.subscribe('pipeline:preview', () => {});
            expect(io).toHaveBeenCalledTimes(1);
        });

        it('should configure auth token callback correctly', async () => {
            wsClient.onConnect(async () => {});

            const authConfig = (io as Mock).mock.calls[0][1];
            const authCallback = authConfig.auth;

            const mockCb = vi.fn();
            await authCallback(mockCb);

            expect(mockConfig.authToken).toHaveBeenCalled();
            expect(mockCb).toHaveBeenCalledWith({
                token: 'test-token',
            });
        });
    });

    describe('onConnect', () => {
        it('should register connect event listener', () => {
            const callback = vi.fn();
            wsClient.onConnect(callback);

            expect(mockSocket.on).toHaveBeenCalledWith('connect', expect.any(Function));
        });

        it('should call callback when connect event is triggered', () => {
            const callback = vi.fn();
            wsClient.onConnect(callback);

            // Get the registered callback and call it
            const registeredCallback = mockSocket.on.mock.calls.find((call: any) => call[0] === 'connect')[1];
            registeredCallback();

            expect(callback).toHaveBeenCalled();
        });
    });

    describe('subscribe', () => {
        it('should register event listener for specified topic', () => {
            const callback = vi.fn();
            const topic = 'pipeline:preview';

            wsClient.subscribe(topic, callback);

            expect(mockSocket.on).toHaveBeenCalledWith(topic, callback);
        });
    });

    describe('onError', () => {
        it('should register connect_error event listener', () => {
            const callback = vi.fn();
            wsClient.onError(callback);

            expect(mockSocket.on).toHaveBeenCalledWith('connect_error', expect.any(Function));
        });

        it('should call callback with error when connect_error event is triggered', () => {
            const callback = vi.fn();
            wsClient.onError(callback);

            const testError = new Error('Connection failed');

            // Get the registered callback and call it with error
            const registeredCallback = mockSocket.on.mock.calls.find((call: any) => call[0] === 'connect_error')[1];
            registeredCallback(testError);

            expect(callback).toHaveBeenCalledWith(testError);
        });
    });

    describe('multiple method calls', () => {
        it('should handle multiple event listeners on same socket', () => {
            const connectCallback = vi.fn();
            const errorCallback = vi.fn();
            const subscribeCallback = vi.fn();

            wsClient.onConnect(connectCallback);
            wsClient.onError(errorCallback);
            wsClient.subscribe('pipeline:preview', subscribeCallback);

            expect(mockSocket.on).toHaveBeenCalledTimes(4);
            expect(mockSocket.on).toHaveBeenCalledWith('connect', expect.any(Function));
            expect(mockSocket.on).toHaveBeenCalledWith('connect_error', expect.any(Function));
            expect(mockSocket.on).toHaveBeenCalledWith('server_error', expect.any(Function));
            expect(mockSocket.on).toHaveBeenCalledWith('pipeline:preview', subscribeCallback);
        });
    });

    describe('error scenarios', () => {
        it('should handle socket creation with different config values', () => {
            const customConfig: Config = {
                baseUrl: 'https://custom.api.com',
                baseWsUrl: 'wss://custom.ws.com',
                authToken: vi.fn().mockResolvedValue('custom-token'),
                invalidateAuthToken: vi.fn(),
            };

            const customWsClient = new WsClient(customConfig);
            customWsClient.onConnect(async () => {});

            expect(io).toHaveBeenCalledWith('wss://custom.ws.com', {
                auth: expect.any(Function),
            });
        });
    });

    describe('typed events', () => {
        it('should handle typed operation created events for preview', () => {
            const callback = vi.fn<(data: WsEventMap['operation:preview']) => void>();

            wsClient.subscribe('operation:preview', callback);

            expect(mockSocket.on).toHaveBeenCalledWith('operation:preview', callback);

            // Simulate receiving a typed event
            const mockEvent: WsEventMap['operation:preview'] = {
                timestamp: '2023-01-01T00:00:00Z',
                type: 'created',
                data: {
                    id: 'op-456',
                    status: 'pending',
                    creatorId: 'user-123',
                    createdAt: '2023-01-01T00:00:00Z',
                    updatedAt: '2023-01-01T00:00:00Z',
                },
            };

            const registeredCallback = mockSocket.on.mock.calls.find((call: any) => call[0] === 'operation:preview')[1];
            registeredCallback(mockEvent);

            expect(callback).toHaveBeenCalledWith(mockEvent);
        });
    });

    describe('listener removal', () => {
        it('should remove specific subscription listener', () => {
            const subscribeCallback = vi.fn();

            wsClient.unsubscribe('operation:preview', subscribeCallback);

            expect(mockSocket.off).toHaveBeenCalledWith('operation:preview', subscribeCallback);
        });

        it('should remove all listeners for a topic when no callback provided', () => {
            wsClient.unsubscribe('operation:preview');

            expect(mockSocket.off).toHaveBeenCalledWith('operation:preview');
        });

        it('should remove specific error listener', () => {
            const errorCallback = vi.fn();

            wsClient.offError(errorCallback);

            expect(mockSocket.off).toHaveBeenCalledWith('connect_error', errorCallback);
            expect(mockSocket.off).toHaveBeenCalledWith('server_error', errorCallback);
        });

        it('should remove all error listeners when no callback provided', () => {
            wsClient.offError();

            expect(mockSocket.off).toHaveBeenCalledWith('connect_error');
            expect(mockSocket.off).toHaveBeenCalledWith('server_error');
        });
    });

    describe('entity by id subscriptions', () => {
        it('should subscribe to entity by id and emit subscribe payload', () => {
            const callback = vi.fn();
            const id = '123e4567-e89b-12d3-a456-426614174000';

            wsClient.subscribeEntityById('operation', id, callback);

            expect(mockSocket.emit).toHaveBeenCalledWith('entity:subscribe', {
                entity: 'operation',
                id,
            });
            expect(mockSocket.on).toHaveBeenCalledWith(`operation:${id}`, callback);
        });

        it('should unsubscribe from entity by id and emit unsubscribe payload', () => {
            const id = '123e4567-e89b-12d3-a456-426614174000';

            wsClient.unsubscribeEntityById('operation', id);

            expect(mockSocket.emit).toHaveBeenCalledWith('entity:unsubscribe', {
                entity: 'operation',
                id,
            });
            expect(mockSocket.off).toHaveBeenCalledWith(`operation:${id}`);
        });
    });
});

describe('useWsClient', () => {
    it('should create and return WsClient instance', () => {
        const mockConfig: Config = {
            baseUrl: 'https://api.test.com',
            baseWsUrl: 'wss://api.test.com',
            authToken: vi.fn().mockResolvedValue('test-token'),
            invalidateAuthToken: vi.fn(),
        };

        const client = useWsClient(mockConfig);

        expect(client).toBeInstanceOf(WsClient);
    });
});
