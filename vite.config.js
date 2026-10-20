import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // / locally and on a custom domain; the GitHub Pages workflow sets /<repo>/.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  resolve: {
    // ui-kit (vendor/ui-kit) imports these as peers; force a single instance so hooks
    // and motion contexts are shared.
    dedupe: ['react', 'react-dom', 'framer-motion'],
  },
  server: {
    port: 5190,
  },
  build: {
    target: 'es2022',
    cssMinify: true,
  },
});
