import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        newtab: 'index.html',
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
});
