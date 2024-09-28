import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakaoApiKey: env.VITE_KAKAO_KEY,
          },
        },
      }),
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
  };
});
