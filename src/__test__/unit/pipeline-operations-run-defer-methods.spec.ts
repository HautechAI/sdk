import { describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';

describe('Pipeline Operations Run Defer Methods Tests', () => {
    let sdk = createTestSdk();

    describe('Operations Run Haute Defer Methods', () => {
        it('should create defer.operations.run.haute.linda.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const lindaTask = pipeline.defer.operations.run.haute.linda.v1({
                    input: {
                        aspectRatio: '1:1',
                        seed: 999,
                        prompt: 'Test prompt for Linda',
                        productImageId: 'test-product-image-id',
                        negativePrompt: 'negative prompt',
                        strength: 0.8,
                    },
                });

                pipeline.output = lindaTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'haute', 'linda', 'v1']);
        });

        it('should create defer.operations.run.haute.naomi.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const naomiTask = pipeline.defer.operations.run.haute.naomi.v1({
                    input: {
                        prompt: 'Test prompt for Naomi',
                        mode: 'apparel_to_model',
                        category: 'upper_body',
                        garmentImageId: 'test-garment-id',
                        poseId: 'test-pose-id',
                        seed: 999,
                    },
                });

                pipeline.output = naomiTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'haute', 'naomi', 'v1']);
        });
    });

    describe('Operations Run Inpaint Defer Methods', () => {
        it('should create defer.operations.run.inpaint.kate.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const inpaintTask = pipeline.defer.operations.run.inpaint.kate.v1({
                    input: {
                        imageId: 'test-image-id',
                        maskImageId: 'test-mask-id',
                        prompt: 'Inpaint this area',
                        seed: 999,
                        strength: 0.8,
                        branch: 'stable',
                    },
                });

                pipeline.output = inpaintTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'inpaint', 'kate', 'v1']);
        });
    });

    describe('Operations Run GPT Defer Methods', () => {
        it('should create defer.operations.run.gpt.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const gptTask = pipeline.defer.operations.run.gpt.v1({
                    input: {
                        prompt: 'Test GPT prompt',
                        model: 'gpt-4o',
                    },
                });

                pipeline.output = gptTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'gpt', 'v1']);
        });

        it('should create defer.operations.run.gpt.v2 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const gptTask = pipeline.defer.operations.run.gpt.v2({
                    input: {
                        messages: [{ role: 'user', content: 'Test GPT v2 prompt' }],
                        model: 'gpt-4.1-mini',
                    },
                });

                pipeline.output = gptTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'gpt', 'v2']);
        });
    });

    describe('Operations Run Translate Defer Methods', () => {
        it('should create defer.operations.run.translate.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const translateTask = pipeline.defer.operations.run.translate.v1({
                    input: {
                        text: 'Hello world',
                        to: 'es',
                    },
                });

                pipeline.output = translateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'translate', 'v1']);
        });
    });

    describe('Operations Run Strings Defer Methods', () => {
        it('should create defer.operations.run.strings.template.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const templateTask = pipeline.defer.operations.run.strings.template.v1({
                    input: {
                        template: 'Hello {{name}}!',
                        variables: [{ name: 'name', value: 'World' }],
                    },
                });

                pipeline.output = templateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'strings', 'template', 'v1']);
        });
    });

    describe('Operations Run Imagine Defer Methods', () => {
        it('should create defer.operations.run.imagine.kate.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const imagineTask = pipeline.defer.operations.run.imagine.kate.v1({
                    input: {
                        aspectRatio: '1:1',
                        seed: 999,
                        prompt: 'A beautiful landscape',
                    },
                });

                pipeline.output = imagineTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'imagine', 'kate', 'v1']);
        });
    });

    describe('Operations Run Image Processing Defer Methods', () => {
        it('should create defer.operations.run.upscale.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const upscaleTask = pipeline.defer.operations.run.upscale.v1({
                    input: {
                        imageId: 'test-image-id',
                    },
                });

                pipeline.output = upscaleTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'upscale', 'v1']);
        });

        it('should create defer.operations.run.cut.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const cutTask = pipeline.defer.operations.run.cut.v1({
                    input: {
                        imageId: 'test-image-id',
                        maskImageId: 'test-mask-id',
                    },
                });

                pipeline.output = cutTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'cut', 'v1']);
        });

        it('should create defer.operations.run.crop.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const cropTask = pipeline.defer.operations.run.crop.v1({
                    input: {
                        imageId: 'test-image-id',
                        left: 50,
                        top: 50,
                        width: 300,
                        height: 300,
                    },
                });

                pipeline.output = cropTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'crop', 'v1']);
        });

        it('should create defer.operations.run.noise.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const noiseTask = pipeline.defer.operations.run.noise.v1({
                    input: {
                        imageId: 'test-image-id',
                    },
                });

                pipeline.output = noiseTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'noise', 'v1']);
        });

        it('should create defer.operations.run.resize.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const resizeTask = pipeline.defer.operations.run.resize.v1({
                    input: {
                        imageId: 'test-image-id',
                        width: 800,
                        height: 600,
                    },
                });

                pipeline.output = resizeTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'resize', 'v1']);
        });

        it('should create defer.operations.run.contrast.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const contrastTask = pipeline.defer.operations.run.contrast.v1({
                    input: {
                        imageId: 'test-image-id',
                        contrast: 1.2,
                    },
                });

                pipeline.output = contrastTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'contrast', 'v1']);
        });

        it('should create defer.operations.run.composite.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const compositeTask = pipeline.defer.operations.run.composite.v1({
                    input: {
                        width: 800,
                        height: 600,
                        background: '#ffffff',
                        elements: [],
                    },
                });

                pipeline.output = compositeTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'composite', 'v1']);
        });

        it('should create defer.operations.run.negateImage.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const negateTask = pipeline.defer.operations.run.negateImage.v1({
                    input: {
                        imageId: 'test-image-id',
                    },
                });

                pipeline.output = negateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'negateImage', 'v1']);
        });
    });

    describe('Operations Run AI/ML Defer Methods', () => {
        it('should create defer.operations.run.objectDetection.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const detectionTask = pipeline.defer.operations.run.objectDetection.v1({
                    input: {
                        labels: ['person', 'car'],
                        imageId: 'test-image-id',
                    },
                });

                pipeline.output = detectionTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'objectDetection', 'v1']);
        });

        it('should create defer.operations.run.segmentAnything.embeddings.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const embeddingsTask = pipeline.defer.operations.run.segmentAnything.embeddings.v1({
                    input: {
                        imageId: 'test-image-id',
                    },
                });

                pipeline.output = embeddingsTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'segmentAnything', 'embeddings', 'v1']);
        });

        it('should create defer.operations.run.segmentAnything.mask.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const maskTask = pipeline.defer.operations.run.segmentAnything.mask.v1({
                    input: {
                        imageId: 'test-image-id',
                        box: [100, 100, 200, 200],
                    },
                });

                pipeline.output = maskTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'segmentAnything', 'mask', 'v1']);
        });

        it('should create defer.operations.run.poseEstimation.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const poseTask = pipeline.defer.operations.run.poseEstimation.v1({
                    input: {
                        imageId: 'test-image-id',
                    },
                });

                pipeline.output = poseTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'poseEstimation', 'v1']);
        });
    });

    describe('Operations Run Fashion/VTON Defer Methods', () => {
        it('should create defer.operations.run.vton.gisele.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const vtonTask = pipeline.defer.operations.run.vton.gisele.v1({
                    input: {
                        category: 'upper_body',
                        imageId: 'test-person-image-id',
                        productDescription: 'A beautiful shirt',
                        productImageId: 'test-clothing-image-id',
                        seed: 12345,
                    },
                });

                pipeline.output = vtonTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'vton', 'gisele', 'v1']);
        });
    });

    describe('Operations Run Utility Defer Methods', () => {
        it('should create defer.operations.run.math.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const mathTask = pipeline.defer.operations.run.math.v1({
                    input: {
                        code: '2 + 2',
                    },
                });

                pipeline.output = mathTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'math', 'v1']);
        });

        it('should create defer.operations.run.onecompiler.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const compilerTask = pipeline.defer.operations.run.onecompiler.v1({
                    input: {
                        code: 'console.log("Hello World");',
                        language: 'typescript',
                    },
                });

                pipeline.output = compilerTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'onecompiler', 'v1']);
        });

        it('should create defer.operations.run.pipelineMap.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const mapTask = pipeline.defer.operations.run.pipelineMap.v1({
                    input: {
                        pipeline: 'echo',
                        input: [{ text: 'item1' }, { text: 'item2' }],
                    },
                });

                pipeline.output = mapTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'pipelineMap', 'v1']);
        });
    });

    describe('Operations Run Animation Defer Methods', () => {
        it('should create defer.operations.run.animate.kling_1_6_pro.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const animateTask = pipeline.defer.operations.run.animate.kling_1_6_pro.v1({
                    input: {
                        prompt: 'Make this image move',
                        aspectRatio: '16:9',
                    },
                });

                pipeline.output = animateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'animate', 'kling_1_6_pro', 'v1']);
        });

        it('should create defer.operations.run.animate.kling_2_1.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const animateTask = pipeline.defer.operations.run.animate.kling_2_1.v1({
                    input: {
                        prompt: 'Animate this scene',
                    },
                });

                pipeline.output = animateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'animate', 'kling_2_1', 'v1']);
        });

        it('should create defer.operations.run.animate.creatomate.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const animateTask = pipeline.defer.operations.run.animate.creatomate.v1({
                    input: {
                        template: { templateId: 'test-template-id' },
                    },
                });

                pipeline.output = animateTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'animate', 'creatomate', 'v1']);
        });
    });

    describe('Operations Run Advanced AI Defer Methods', () => {
        it('should create defer.operations.run.edit.flux_kontext_dev.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const editTask = pipeline.defer.operations.run.edit.flux_kontext_dev.v1({
                    input: {
                        prompt: 'Edit this image',
                        imageId: 'test-image-id',
                    },
                });

                pipeline.output = editTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'edit', 'flux_kontext_dev', 'v1']);
        });

        it('should create defer.operations.run.veo3.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const veoTask = pipeline.defer.operations.run.veo3.v1({
                    input: {
                        prompt: 'Generate video with Veo3',
                        seed: 999,
                    },
                });

                pipeline.output = veoTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'veo3', 'v1']);
        });

        it('should create defer.operations.run.imagen4.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const imagenTask = pipeline.defer.operations.run.imagen4.v1({
                    input: {
                        prompt: 'Generate image with Imagen4',
                        safetyFilterLevel: 'block_low_and_above',
                    },
                });

                pipeline.output = imagenTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'imagen4', 'v1']);
        });

        it('should create defer.operations.run.topaz.upscale.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const topazTask = pipeline.defer.operations.run.topaz.upscale.v1({
                    input: {
                        imageId: 'test-image-id',
                        enhanceModel: 'Standard V2',
                        upscaleFactor: '2x',
                        faceEnhancement: true,
                    },
                });

                pipeline.output = topazTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'topaz', 'upscale', 'v1']);
        });
    });

    describe('Operations Run Google Defer Methods', () => {
        it('should create defer.operations.run.google.nano_banana.v1 method', () => {
            const pipelineData = sdk.pipelines.constructTemplate((pipeline) => {
                const bananaTask = pipeline.defer.operations.run.google.nano_banana.v1({
                    input: {
                        imageIds: ['test-image-id-1', 'test-image-id-2'],
                        prompt: 'Generate banana-style image transformation',
                    },
                });

                pipeline.output = bananaTask.result;
                return pipeline;
            });

            expect(pipelineData).toBeDefined();
            expect(pipelineData.tasks).toBeDefined();
            expect(pipelineData.tasks.length).toBeGreaterThan(0);
            expect(pipelineData.tasks[0].method).toEqual(['operations', 'run', 'google', 'nano_banana', 'v1']);
        });
    });
});
