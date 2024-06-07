import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sitemap: resolve(__dirname, 'sitemap.xml'),
      },
    },
  },
  server: {
    // Configuração adicional para servir o sitemap.xml
    middlewareMode: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
    fs: {
      strict: false,
    },
  },
})
