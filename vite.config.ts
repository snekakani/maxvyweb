import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1500,
    // Enable source maps for easier debugging of pre-render issues (safe to disable in prod)
    sourcemap: false,
    // Increase inline asset threshold to reduce tiny requests (helps LCP)
    assetsInlineLimit: 8192,
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});