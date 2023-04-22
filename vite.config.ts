import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      exclude: [
        '**/interface.ts',
        '**/vite.config.ts',
        '**/vite-env.d.ts',
        '**/cypress',
        '**/cypress.config.ts',
        '**/server.ts',
        '**/entry-client.tsx',
        '**/entry-server.tsx',
      ],
    },
  },
});
