import { defineConfig } from 'vitest/config';
import baseConfig from './vitest.config';

export default defineConfig({
    ...baseConfig,
    test: {
        ...baseConfig.test,
        include: ['src/**/*.spec.e2e.ts'],
        exclude: ['**/node_modules/**', '**/dist/**'],
        testTimeout: 120000,
        hookTimeout: 120000,
        disableConsoleIntercept: true,
        fileParallelism: false,
        maxWorkers: 1,
        poolOptions: {
            threads: {
                maxThreads: 3,
                useAtomics: true,
            },
        },
    },
});
