// 处理vue文件插件
import vue from 'rollup-plugin-vue'
// 处理ts插件
import typescript from 'rollup-plugin-typescript2'

const name = 'seamlessScroll'
const file = (type) => `dist/${name}.${type}.js`

export default {
  input: 'index.ts',
  output: [
    {
      name,
      file: file('umd'),
      format: 'umd',
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
  plugins: [typescript(), vue()],
  external: ['vue'], // 规定哪些是外部引用的模块
}
