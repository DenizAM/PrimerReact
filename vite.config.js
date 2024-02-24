import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'vite/modulepreload-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  open: '/docs/index.html',
  }, 
  server: {
    // This is the default value, and will add all files with node_modules
    // in their paths to the ignore list.
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes('node_modules')
    }
  }
})
