import { defineConfig } from 'vite'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
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
  // https://github.com/vuejs/vitepress/issues/1465
  ssr: {
    noExternal: ['@vue/repl'],
  },
})
