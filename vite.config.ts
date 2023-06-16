/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },
});
