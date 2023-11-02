import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Backend URL
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  // ...other configuration options
});
