import { build } from 'vite'
import { copy, remove } from 'fs-extra'
import chalk from 'chalk'
import { buildTypes } from './buildTypes.js'
async function runBuild() {
  try {
    await build()
    console.log(chalk.green('Vite build successfully completed!'))
    await copy('./dist/es/style', './dist/style')
    await remove('./dist/es/style')
    console.log(chalk.green('style.css文件成功抽取到dist/style目录下!'))
    buildTypes()
  } catch (error) {
    console.log(chalk.red('Vite build failed!'))
    console.log(chalk.red(error))
  }
}

runBuild()
