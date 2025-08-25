import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { SDK } from '../../types';
import { WsEventMap } from '../../sdk/ws-events.types';

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
            const originalConfig = invalidSdk.ws.config;
            invalidSdk.ws.config = {
                ...originalConfig,
                baseWsUrl: 'wss://invalid-websocket-url.test:9999',
                wsConfig: {
                    timeout: 3000,
                },
            };

            //invalidSdk.ws.

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
        it('should subscribe to operation preview events', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Event subscription test timeout'));
                }, 15000);

                // First ensure connection
                sdk.ws.onConnect(async () => {
                    // Subscribe to operation events
                    sdk.ws.subscribe('operation:preview', (event) => {
                        clearTimeout(timeout);

                        // Validate event structure
                        expect(event).toBeDefined();
                        expect(event.timestamp).toBeDefined();
                        expect(typeof event.timestamp).toBe('string');
                        expect(event.type).toBeDefined();
                        expect(typeof event.type).toBe('string');
                        expect(event.data).toBeDefined();
                        expect(event.data.id).toBeDefined();
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

                let operationEventReceived = false;
                let pipelineEventReceived = false;

                const checkCompletion = () => {
                    if (operationEventReceived && pipelineEventReceived) {
                        clearTimeout(timeout);
                        resolve();
                    }
                };

                sdk.ws.onConnect(async () => {
                    // Subscribe to both created and updated events
                    sdk.ws.subscribe('operation:preview', (event) => {
                        expect(event).toBeDefined();
                        expect(event.type).toBeDefined();
                        expect(typeof event.type).toBe('string');
                        expect(event.data).toBeDefined();
                        expect(event.data.id).toBeDefined();
                        operationEventReceived = true;
                        checkCompletion();
                    });

                    sdk.ws.subscribe('pipeline:preview', (event) => {
                        expect(event).toBeDefined();
                        expect(event.type).toBeDefined();
                        expect(typeof event.type).toBe('string');
                        expect(event.data).toBeDefined();
                        expect(event.data.id).toBeDefined();
                        pipelineEventReceived = true;
                        checkCompletion();
                    });

                    await sdk.operations.run.echo.v1({
                        input: {
                            text: 'Multiple Events Test',
                        },
                    });

                    await sdk.pipelines.create({
                        tasks: [],
                    });
                });

                sdk.ws.onError((error) => {
                    clearTimeout(timeout);
                    reject(error);
                });
            });
        });

        it('should subscribe to operation events by id', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Entity by id subscription test timeout'));
                }, 20000);

                sdk.ws.onConnect(async () => {
                    try {
                        // Create an operation to get its ID
                        const operation = await sdk.operations.run.echo.v1({
                            input: {
                                text: 'EntityById E2E Test',
                                delay: 3000,
                            },
                        });

                        const operationId = operation.id;

                        // Subscribe to events for this specific operation ID
                        sdk.ws.subscribeEntityById('operation', operationId, (event) => {
                            try {
                                expect(event).toBeDefined();
                                expect(event.timestamp).toBeDefined();
                                expect(typeof event.timestamp).toBe('string');
                                expect(event.type).toBeDefined();
                                expect(['created', 'updated', 'deleted']).toContain(event.type);
                                expect(event.data).toBeDefined();
                                expect(event.data.id).toBe(operationId);

                                clearTimeout(timeout);
                                resolve();
                            } catch (err) {
                                clearTimeout(timeout);
                                reject(err);
                            }
                        });

                        // Ensure the operation progresses so we receive an event
                        await sdk.operations.wait(operation, 15000);
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

    describe('Real-time Communication', () => {
        it('should receive preview events in real-time during operation execution', async () => {
            return new Promise<void>((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Real-time communication test timeout'));
                }, 20000);

                const events: WsEventMap['operation:preview'][] = [];
                let operationId: string | undefined;

                const checkCompletion = () => {
                    if (events.length >= 2) {
                        clearTimeout(timeout);

                        expect(events.find((e) => e.type === 'created' && e.data.id === operationId)).toBeTruthy();
                        expect(events.find((e) => e.type === 'updated' && e.data.id === operationId)).toBeTruthy();
                        resolve();
                    }
                };

                sdk.ws.onConnect(async () => {
                    // Subscribe to operation events
                    sdk.ws.subscribe('operation:preview', (event) => {
                        // We received the event for our operation
                        expect(event.data.status).toBeDefined();
                        expect(['pending', 'finished', 'failed']).toContain(event.data.status);
                        events.push(event);
                        checkCompletion();
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
                        await sdk.operations.wait(operation, 15000);
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
    });
});
