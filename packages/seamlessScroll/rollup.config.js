const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript2')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

module.exports = {
  input: 'index.ts',
  output: {
    format: 'esm',
    file: 'dist/linzhe_tools.esm.js',
  },
  plugins: [resolve(), commonjs(), vue(), typescript()],
  external: ['vue'],
}
