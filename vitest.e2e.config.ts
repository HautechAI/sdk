import { defineConfig } from 'vitest/config';
import baseConfig from './vitest.config';

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    include: ['src/**/*.spec.e2e.ts'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 30000, // E2E tests might take longer
    hookTimeout: 30000,
  },
});