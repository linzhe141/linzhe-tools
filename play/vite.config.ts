import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'linzhe-tools/style.css': resolve(
        __dirname,
        '../packages/linzhe-tools/dist/style/style.css'
      ),
      'linzhe-tools': resolve(
        __dirname,
        '../packages/linzhe-tools/dist/es/linzhe-tools'
      ),
    },
  },
  plugins: [vue()],
})
