import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcRoot = join(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-deploy/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': srcRoot
    }
  }
})
