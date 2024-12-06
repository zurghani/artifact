import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:'../dist/artifact',
    rollupOptions:{
      input:'src/Export.ts',
      output:{
        entryFileNames:'index.js',
        assetFileNames:'index.css',
      }
    }
  }
})
