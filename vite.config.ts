/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@rmwc/provider': path.resolve(__dirname, 'src/provider')
    }
  },
  assetsInclude: '**/*.md',
  define: {
    'process.env': {}
  }
  // root: 'src/rmwc'
  // resolve: {
  //   alias: [
  // {
  //   find: /@rmwc/,
  //   replacement: path.resolve(
  //     __dirname,
  //     'node_modules',
  //     '@rmwc',
  //     'material'
  //   )
  // },
  // {
  //   find: /@rmwc\/provider/,
  //   replacement: path.resolve(
  //     __dirname,
  //     'node_modules',
  //     '@rmwc',
  //     'material'
  //   )
  // }
  //   ]
  // }
});
