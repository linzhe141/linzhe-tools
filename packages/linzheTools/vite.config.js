import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
    },
    minify: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'screenfull'],
      output: [
        {
          assetFileNames: 'style/style.css',
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //强制所有文件使用命名导出模式
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, './dist/es'),
        },
        {
          format: 'cjs',
          //不用打包成.cjs.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',

          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, './dist/cjs'),
        },
        {
          format: 'umd',
          entryFileNames: '[name].js',
          name: 'linzheTools',
          //配置打包根目录
          dir: resolve(__dirname, './dist/umd'),
          globals: {
            vue: 'Vue',
            screenfull: 'screenfull',
          },
        },
      ],
    },
  },
  plugins: [vue()],
})
