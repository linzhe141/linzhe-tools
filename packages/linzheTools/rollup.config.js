// 处理vue文件插件
import vue from 'rollup-plugin-vue'
// 处理ts插件
import typescript from 'rollup-plugin-typescript2'

import scss from 'rollup-plugin-scss'
const name = 'linzheTools'
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
  plugins: [
    typescript(),
    vue(),
    scss({
      fileName: `${name}.css`,
    }),
  ],
  external: ['vue'], // 规定哪些是外部引用的模块
}
