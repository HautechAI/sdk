import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { WsClient, useWsClient } from './ws-client';
import { Config } from '../config';
import { io } from 'socket.io-client';
import { OperationEvent } from './ws-events';

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
            wsClient.subscribe('test-topic', () => {});
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
            const topic = 'test-topic';

            wsClient.subscribe(topic, callback);

            expect(mockSocket.on).toHaveBeenCalledWith(topic, callback);
        });

        it('should handle generic type parameter', () => {
            interface TestData {
                id: number;
                name: string;
            }

            const callback = vi.fn<(data: TestData) => void>();
            wsClient.subscribe<TestData>('test-topic', callback);

            expect(mockSocket.on).toHaveBeenCalledWith('test-topic', callback);
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
            wsClient.subscribe('test-topic', subscribeCallback);

            expect(mockSocket.on).toHaveBeenCalledTimes(4);
            expect(mockSocket.on).toHaveBeenCalledWith('connect', expect.any(Function));
            expect(mockSocket.on).toHaveBeenCalledWith('connect_error', expect.any(Function));
            expect(mockSocket.on).toHaveBeenCalledWith('server_error', expect.any(Function));
            expect(mockSocket.on).toHaveBeenCalledWith('test-topic', subscribeCallback);
        });
    });

    describe('error scenarios', () => {
        it('should handle socket creation with different config values', () => {
            const customConfig: Config = {
                baseUrl: 'https://custom.api.com',
                baseWsUrl: 'wss://custom.ws.com',
                authToken: vi.fn().mockResolvedValue('custom-token'),
            };

            const customWsClient = new WsClient(customConfig);
            customWsClient.onConnect(async () => {});

            expect(io).toHaveBeenCalledWith('wss://custom.ws.com', {
                auth: expect.any(Function),
            });
        });
    });

    describe('typed events', () => {
        it('should handle typed operation created events', () => {
            const callback = vi.fn<(data: OperationEvent) => void>();

            wsClient.subscribe('operation:created', callback);

            expect(mockSocket.on).toHaveBeenCalledWith('operation:created', callback);

            // Simulate receiving a typed event
            const mockEvent: OperationEvent = {
                timestamp: '2023-01-01T00:00:00Z',
                data: {
                    id: 'op-456',
                    kind: 'operation',
                    input: {},
                    output: {},
                    status: 'pending',
                    type: 'test-operation',
                    creatorId: 'user-123',
                    metadata: {},
                    createdAt: '2023-01-01T00:00:00Z',
                    updatedAt: '2023-01-01T00:00:00Z',
                },
            };

            const registeredCallback = mockSocket.on.mock.calls.find((call: any) => call[0] === 'operation:created')[1];
            registeredCallback(mockEvent);

            expect(callback).toHaveBeenCalledWith(mockEvent);
        });

        it('should handle typed operation updated events', () => {
            const callback = vi.fn<(data: OperationEvent) => void>();

            wsClient.subscribe('operation:updated', callback);

            expect(mockSocket.on).toHaveBeenCalledWith('operation:updated', callback);

            // Simulate receiving a typed event
            const mockEvent: OperationEvent = {
                timestamp: '2023-01-01T00:00:00Z',
                data: {
                    id: 'op-789',
                    kind: 'operation',
                    input: {},
                    output: {},
                    status: 'finished',
                    type: 'updated-operation',
                    creatorId: 'user-456',
                    metadata: {},
                    createdAt: '2023-01-01T00:00:00Z',
                    updatedAt: '2023-01-01T00:05:00Z',
                },
            };

            const registeredCallback = mockSocket.on.mock.calls.find((call: any) => call[0] === 'operation:updated')[1];
            registeredCallback(mockEvent);

            expect(callback).toHaveBeenCalledWith(mockEvent);
        });

        it('should maintain backward compatibility with generic types', () => {
            interface CustomEvent {
                customField: string;
                value: number;
            }

            const callback = vi.fn<(data: CustomEvent) => void>();
            wsClient.subscribe<CustomEvent>('custom:event', callback);

            expect(mockSocket.on).toHaveBeenCalledWith('custom:event', callback);

            const mockEvent: CustomEvent = {
                customField: 'test',
                value: 42,
            };

            const registeredCallback = mockSocket.on.mock.calls.find((call: any) => call[0] === 'custom:event')[1];
            registeredCallback(mockEvent);

            expect(callback).toHaveBeenCalledWith(mockEvent);
        });
    });

    describe('listener removal', () => {
        it('should remove specific subscription listener', () => {
            const subscribeCallback = vi.fn();
            
            wsClient.unsubscribe('test-topic', subscribeCallback);
            
            expect(mockSocket.off).toHaveBeenCalledWith('test-topic', subscribeCallback);
        });

        it('should remove all listeners for a topic when no callback provided', () => {
            wsClient.unsubscribe('test-topic');
            
            expect(mockSocket.off).toHaveBeenCalledWith('test-topic');
        });

        it('should remove typed subscription listeners', () => {
            const callback = vi.fn<(data: OperationEvent) => void>();
            
            wsClient.unsubscribe('operation:created', callback);
            
            expect(mockSocket.off).toHaveBeenCalledWith('operation:created', callback);
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
});

describe('useWsClient', () => {
    it('should create and return WsClient instance', () => {
        const mockConfig: Config = {
            baseUrl: 'https://api.test.com',
            baseWsUrl: 'wss://api.test.com',
            authToken: vi.fn().mockResolvedValue('test-token'),
        };

        const client = useWsClient(mockConfig);

        expect(client).toBeInstanceOf(WsClient);
    });
});
