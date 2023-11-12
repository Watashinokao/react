/// <reference types="vitest" />
// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
