import { rmSync } from 'fs';
import { join } from 'path';
import { builtinModules } from 'module';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite-plugin-electron';

import pkg from './package.json';

import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron';

const electronConfig = {
  main: {
    entry: 'electron/main/index.js',
    vite: {
      build: {
        sourcemap: false,
        outDir: 'dist/electron/main',
        rollupOptions: {
          external,
        },
      },
    },
  },
  preload: {
    input: {
      // You can configure multiple preload here
      index: join(__dirname, 'electron/preload/index.js'),
    },
    vite: {
      build: {
        // For debug
        sourcemap: 'inline',
        outDir: 'dist/electron/preload',
        rollupOptions: {
          external,
        },
      },
    },
  }
  //https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer
};

const dependencies = Object.keys(pkg.dependencies || {});

const external = [
  'electron',
  ...builtinModules,
  // (🎯-①): For use Node.js package in Electron-Main, Preload-Script
  ...dependencies,
];

rmSync('dist', { recursive: true, force: true }); // v14.14.0

export default defineConfig({
  plugins: [vue(), electron(electronConfig)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      
    },
  },
});
