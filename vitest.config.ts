/// <reference types="vitest" />
// https://vitejs.dev/config/
import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      exclude: [...configDefaults.exclude, 'src/components/ErrorBoundary/**'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
