import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'linzhe-tools/style.css', 
        replacement: join(__dirname, '..', 'packages/linzhe-tools/dist/style/style.css') 
      },
      {
        find: 'linzhe-tools', 
        replacement: join(__dirname, '..', 'packages/linzhe-tools/index.ts') 
      },
      {
        find: /^@linzhe-tools\/(.+)$/, 
        replacement: join(__dirname, '..', 'packages', '$1', 'index.ts') 
      },
    ]
  },
  plugins: [vue()],
})
