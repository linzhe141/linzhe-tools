import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'linzheTools/style.css': resolve(
        __dirname,
        '../packages/linzheTools/dist/style/style.css'
      ),
      linzheTools: resolve(
        __dirname,
        '../packages/linzheTools/dist/es/linzheTools'
      ),
    },
  },
  plugins: [vue()],
})
