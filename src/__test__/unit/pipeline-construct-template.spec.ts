import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';

describe('Pipeline constructTemplate Method Tests', () => {
    let sdk = createTestSdk();

    describe('constructTemplate with callback', () => {
        it('should construct a pipeline using callback style', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const echoTask = pipeline.defer.operations.run.echo.v1({
                    input: {
                        text: pipeline.$input.message || 'fallback text',
                    },
                });

                pipeline.setOutputRef(echoTask.result);
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBe(1);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'echo', 'v1']);
        });

        it('should construct a pipeline with multiple tasks using callback style', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const echoTask = pipeline.defer.operations.run.echo.v1({
                    input: {
                        text: pipeline.$input.message || 'fallback text',
                    },
                });

                const awaitedEcho = pipeline.defer.operations.wait(echoTask.result);

                const echoTask2 = pipeline.defer.operations.run.echo.v1({
                    input: {
                        text: awaitedEcho.result.output.text,
                    },
                });

                pipeline.setOutputRef(echoTask2.result);
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBe(3);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'echo', 'v1']);
            expect(pipelineData.tasks[1].method).toEqual(['operations', 'wait']);
            expect(pipelineData.tasks[2].method).toEqual(['operations', 'run', 'echo', 'v1']);
        });
    });

    describe('constructTemplate without callback', () => {
        it('should construct a pipeline without callback style', () => {
            const pipeline = sdk.pipelines.constructTemplate();

            const echoTask = pipeline.defer.operations.run.echo.v1({
                input: {
                    text: pipeline.$input.message || 'fallback text',
                },
            });

            pipeline.setOutputRef(echoTask.result);

            expect(pipeline).toBeDefined();
            expect(pipeline.tasks).toBeDefined();
            expect(pipeline.tasks.length).toBe(1);
            expect(pipeline.tasks[0].method).toEqual(['operations', 'run', 'echo', 'v1']);
        });

        it('should construct a pipeline with multiple tasks without callback style', () => {
            const pipeline = sdk.pipelines.constructTemplate();

            const echoTask = pipeline.defer.operations.run.echo.v1({
                input: {
                    text: pipeline.$input.message || 'fallback text',
                },
            });

            const awaitedEcho = pipeline.defer.operations.wait(echoTask.result);

            const echoTask2 = pipeline.defer.operations.run.echo.v1({
                input: {
                    text: awaitedEcho.result.output.text,
                },
            });

            pipeline.setOutputRef(echoTask2.result);

            expect(pipeline).toBeDefined();
            expect(pipeline.tasks).toBeDefined();
            expect(pipeline.tasks.length).toBe(3);
            expect(pipeline.tasks[0].method).toEqual(['operations', 'run', 'echo', 'v1']);
            expect(pipeline.tasks[1].method).toEqual(['operations', 'wait']);
            expect(pipeline.tasks[2].method).toEqual(['operations', 'run', 'echo', 'v1']);
        });

        it('should allow setting input without callback style', () => {
            const pipeline = sdk.pipelines.constructTemplate();

            const echoTask = pipeline.defer.operations.run.echo.v1({
                input: {
                    text: pipeline.$input.message || 'fallback text',
                },
            });

            pipeline.setOutputRef(echoTask.result);
            pipeline.setInput({ message: 'Hello from non-callback style!' });

            expect(pipeline).toBeDefined();
            expect(pipeline.getInput()).toEqual({ message: 'Hello from non-callback style!' });
        });

        it('should work with complex operations without callback style', () => {
            const pipeline = sdk.pipelines.constructTemplate();

            // Create a translate task
            const translateTask = pipeline.defer.operations.run.translate.v1({
                input: {
                    text: pipeline.$input.text || 'Hello world',
                    to: 'es',
                },
            });

            const awaitedTranslate = pipeline.defer.operations.wait(translateTask.result);

            // Use the translated text in another operation
            const echoTask = pipeline.defer.operations.run.echo.v1({
                input: {
                    text: awaitedTranslate.result.output.data.text,
                },
            });

            pipeline.setOutputRef(echoTask.result);

            expect(pipeline).toBeDefined();
            expect(pipeline.tasks).toBeDefined();
            expect(pipeline.tasks.length).toBe(3);
            expect(pipeline.tasks[0].method).toEqual(['operations', 'run', 'translate', 'v1']);
            expect(pipeline.tasks[1].method).toEqual(['operations', 'wait']);
            expect(pipeline.tasks[2].method).toEqual(['operations', 'run', 'echo', 'v1']);
        });
    });

    describe('constructTemplate comparison', () => {
        it('should produce identical results with both styles', () => {
            // Callback style
            const pipelineWithCallback = sdk.pipelines.constructTemplate((pipeline) => {
                const echoTask = pipeline.defer.operations.run.echo.v1({
                    input: {
                        text: 'test message',
                    },
                });

                pipeline.setOutputRef(echoTask.result);
                return pipeline;
            });

            // Non-callback style
            const pipelineWithoutCallback = sdk.pipelines.constructTemplate();
            const echoTask = pipelineWithoutCallback.defer.operations.run.echo.v1({
                input: {
                    text: 'test message',
                },
            });
            pipelineWithoutCallback.setOutputRef(echoTask.result);

            // Both should have the same structure
            expect(pipelineWithCallback.tasks.length).toBe(pipelineWithoutCallback.tasks.length);
            expect(pipelineWithCallback.tasks[0].method).toEqual(pipelineWithoutCallback.tasks[0].method);
        });
    });
});
