import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // important for GitHub Pages deployment
  resolve: {
    alias: {
      // @ → src/
      '@': path.resolve(__dirname, 'src'),
      // ui → src/components/ui/
      'ui': path.resolve(__dirname, 'src/components/ui'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});