import { build } from 'vite'
import { fileURLToPath } from 'url'
import { copy, remove } from 'fs-extra'
import chalk from 'chalk'
import { resolve, dirname } from 'path'
import { buildTypes } from './buildTypes.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
async function runBuild() {
  try {
    await build()
    console.log(chalk.green('Vite build successfully completed!'))
    await copy(
      resolve(__dirname, '../dist/es/style'),
      resolve(__dirname, '../dist/style')
    )
    await remove(resolve(__dirname, '../dist/es/style'))
    console.log(chalk.green('style.css文件成功抽取到dist/style目录下!'))
    await buildTypes()
    console.log(
      chalk.green('@linzhe_tools/components的.d.ts已剪切到dist/types下!')
    )
  } catch (error) {
    console.log(chalk.red('Vite build failed!'))
    console.log(chalk.red(error))
  }
}

runBuild()
