import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), tailwindcss()],
  resolve: {
    conditions: ['source'],
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
