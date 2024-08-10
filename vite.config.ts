import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    nodePolyfills({
      include: ['path'],
      exclude: ['http'],
      globals: { Buffer: true, global: true, process: true },
      overrides: {
        fs: 'memfs',
      },
      protocolImports: true,
    }),
  ],
  server: {
    port: 3000,
  },
});
