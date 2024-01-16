import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 直接使用源码
    alias: [
      {
        find: 'linzhe-tools',
        replacement: join(__dirname, '..', 'packages/linzhe-tools/index.ts'),
      },
      {
        find: /^@linzhe-tools\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'index.ts'),
      },
    ],
  },
  plugins: [vue()],
  server: {
    port: 4521,
  },
})
