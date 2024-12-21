import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react-swc'
import path from 'path';

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
