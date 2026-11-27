import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5179,
    strictPort: false,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: 4179,
    strictPort: false,
    allowedHosts: true
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 900
  }
});
