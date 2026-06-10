import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'icons';
            if (id.includes('framer-motion')) return 'animations';
            if (id.includes('react')) return 'vendor';
          }

          return undefined;
        },
      },
    },
    reportCompressedSize: false,
  },
  envPrefix: 'VITE_',
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons'],
  },
})
