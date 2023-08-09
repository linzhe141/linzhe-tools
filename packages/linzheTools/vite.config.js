import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  resolve: {
    alias: {
      '@@linzhe_tools': path.resolve(__dirname, '../../packages'),
    },
  },

  build: {
    lib: {
      entry: './index.ts',
      name: 'linzheTools',
      fileName: (format) => `index.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'screenfull'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          screenfull: 'screenfull',
        },
      },
    },
  },
  plugins: [vue()],
})
