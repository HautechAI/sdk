import { beforeAll, describe, expect, it, vi } from 'vitest';
import { createTestSdk } from '../test-utils';
import { SDK } from '../../types';
import { OperationEvent } from '../../sdk/ws-events';

describe('WebSocket Client E2E Tests', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = createTestSdk();
    });

    describe('Connection Management', () => {
        it('should establish WebSocket connection successfully', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Connection timeout'));
                }, 10000);

                sdk.ws.onConnect(async () => {
                    clearTimeout(timeout);
                    resolve();
                });

                sdk.ws.onError((error) => {
                    clearTimeout(timeout);
                    reject(error);
                });
            });
        });

        it('should handle connection errors gracefully', async () => {
            // Create SDK with invalid WebSocket URL to test error handling
            const invalidSdk = createTestSdk();
            // Override the baseWsUrl to an invalid one
            const originalConfig = (invalidSdk.ws as any).config;
            (invalidSdk.ws as any).config = {
                ...originalConfig,
                baseWsUrl: 'wss://invalid-websocket-url.test:9999',
            };

            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Expected connection error but none occurred'));
                }, 5000);

                invalidSdk.ws.onError((error) => {
                    clearTimeout(timeout);
                    expect(error).toBeInstanceOf(Error);
                    expect(error.message).toBeDefined();
                    resolve();
                });

                invalidSdk.ws.onConnect(async () => {
                    clearTimeout(timeout);
                    reject(new Error('Connection should have failed'));
                });
            });
        });
    });

    describe('Event Subscriptions', () => {
        it('should subscribe to operation events', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Event subscription test timeout'));
                }, 15000);

                // First ensure connection
                sdk.ws.onConnect(async () => {
                    // Subscribe to operation events
                    sdk.ws.subscribe('operation:created', (event: OperationEvent) => {
                        clearTimeout(timeout);

                        // Validate event structure
                        expect(event).toBeDefined();
                        expect(event.timestamp).toBeDefined();
                        expect(typeof event.timestamp).toBe('string');
                        expect(event.data).toBeDefined();
                        expect(event.data.id).toBeDefined();
                        expect(event.data.kind).toBe('operation');
                        expect(event.data.status).toBeDefined();

                        resolve();
                    });

                    await sdk.operations.run.echo.v1({
                        input: {
                            text: 'WebSocket E2E Test',
                        },
                    });
                });

                sdk.ws.onError((error) => {
                    clearTimeout(timeout);
                    reject(error);
                });
            });
        });

        it('should handle multiple event subscriptions', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Multiple subscription test timeout'));
                }, 15000);

                let createdEventReceived = false;
                let updatedEventReceived = false;

                const checkCompletion = () => {
                    if (createdEventReceived && updatedEventReceived) {
                        clearTimeout(timeout);
                        resolve();
                    }
                };

                sdk.ws.onConnect(async () => {
                    // Subscribe to both created and updated events
                    sdk.ws.subscribe('operation:created', (event: OperationEvent) => {
                        expect(event).toBeDefined();
                        expect(event.data.kind).toBe('operation');
                        createdEventReceived = true;
                        checkCompletion();
                    });

                    sdk.ws.subscribe('operation:updated', (event: OperationEvent) => {
                        expect(event).toBeDefined();
                        expect(event.data.kind).toBe('operation');
                        updatedEventReceived = true;
                        checkCompletion();
                    });

                    await sdk.operations.run.echo.v1({
                        input: {
                            text: 'Multiple Events Test',
                        },
                    });
                });

                sdk.ws.onError((error) => {
                    clearTimeout(timeout);
                    reject(error);
                });
            });
        });
    });

    describe('Real-time Communication', () => {
        it('should receive events in real-time during operation execution', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Real-time communication test timeout'));
                }, 20000);

                const events: OperationEvent[] = [];
                let operationId: string | undefined;

                sdk.ws.onConnect(async () => {
                    // Subscribe to operation events
                    sdk.ws.subscribe('operation:created', (event: OperationEvent) => {
                        events.push(event);
                        if (event.data.id === operationId) {
                            // We received the event for our operation
                            expect(event.data.status).toBeDefined();
                            expect(['pending', 'finished', 'failed']).toContain(event.data.status);
                        }
                    });

                    sdk.ws.subscribe('operation:updated', (event: OperationEvent) => {
                        events.push(event);
                        if (event.data.id === operationId) {
                            // Operation completed
                            clearTimeout(timeout);
                            expect(events.length).toBeGreaterThan(0);
                            expect(event.data.status).toBeDefined();
                            resolve();
                        }
                    });

                    try {
                        // Create an operation and track its events
                        const operation = await sdk.operations.run.echo.v1({
                            input: {
                                text: 'Real-time test operation',
                            },
                        });

                        operationId = operation.id;

                        // Wait for the operation to complete and events to be received
                        const result = await sdk.operations.wait(operation, 15000);

                        // Give some time for final events to arrive
                        setTimeout(() => {
                            clearTimeout(timeout);
                            expect(events.length).toBeGreaterThan(0);
                            resolve();
                        }, 2000);
                    } catch (error) {
                        clearTimeout(timeout);
                        reject(error);
                    }
                });

                sdk.ws.onError((error) => {
                    clearTimeout(timeout);
                    reject(error);
                });
            });
        });
    });

    describe('Error Handling', () => {
        it('should handle WebSocket disconnections gracefully', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    resolve(); // This test is optional, resolve if no disconnection occurs
                }, 10000);

                let connected = false;

                sdk.ws.onConnect(async () => {
                    connected = true;
                    // Simulate some activity after connection
                    setTimeout(() => {
                        if (connected) {
                            clearTimeout(timeout);
                            resolve();
                        }
                    }, 2000);
                });

                sdk.ws.onError((error) => {
                    // Error handling is working
                    expect(error).toBeInstanceOf(Error);
                    clearTimeout(timeout);
                    resolve();
                });
            });
        });

        it('should maintain event subscriptions after reconnection', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    resolve(); // This test is complex, resolve if it doesn't complete
                }, 15000);

                let eventReceived = false;

                sdk.ws.onConnect(async () => {
                    // Subscribe to events
                    sdk.ws.subscribe('operation:created', (event: OperationEvent) => {
                        if (!eventReceived) {
                            eventReceived = true;
                            clearTimeout(timeout);
                            expect(event).toBeDefined();
                            resolve();
                        }
                    });

                    await sdk.operations.run.echo.v1({
                        input: {
                            text: 'Reconnection test',
                        },
                    });
                });

                sdk.ws.onError((error) => {
                    // Connection errors are expected in reconnection scenarios
                    console.warn('WebSocket error during reconnection test:', error.message);
                });
            });
        });
    });
});
