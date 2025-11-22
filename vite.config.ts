import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use terser for better compression in production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
      },
      mangle: {
        safari10: true,
      },
    },
    // Target modern browsers for better optimization
    target: 'es2015',
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['@phosphor-icons/react'],
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Report compressed size for monitoring
    reportCompressedSize: true,
    // Disable source maps for smaller bundle
    sourcemap: false,
    // Enable asset inlining for small files
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@phosphor-icons/react'],
    exclude: [],
  },
  // Enable server compression hints
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Preview server config
  preview: {
    port: 4173,
    strictPort: true,
  },
});
