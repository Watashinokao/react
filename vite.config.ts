/// <reference types="vitest" />
/// <reference types="vite/client" />
// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

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
