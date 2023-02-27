// 处理vue文件插件
import vue from 'rollup-plugin-vue'
// import vue from '@vitejs/plugin-vue'
// 处理ts插件
import typescript from 'rollup-plugin-typescript2'

// 用于在节点单元模块中使用第三方模块
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
const name = 'seamlessScroll'
// 输出打包后的文件名称type 1.esm 2.umd
const file = (type) => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: false }, // 生成.d.ts的文件
}
export { name, file }
export default {
  input: 'index.ts',
  output: [
    {
      name,
      file: file('umd'),
      format: 'umd',
      name: 'SeamlessScroll',
      globals: {
        vue: 'Vue',
      },
    },
    {
      name,
      file: file('esm'),
      format: 'esm',
    },
  ],
  plugins: [
    nodeResolve(),
    // typescript({ tsconfig: './tsconfig.json' }),
    typescript(),
    vue(),
    commonjs(),
    json(),
  ],
  external: ['vue'], // 规定哪些是外部引用的模块
}
