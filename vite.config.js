import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: resolve(rootDir, 'app.html')
      }
    }
  },
  server: {
    open: '/app.html'
  }
})
