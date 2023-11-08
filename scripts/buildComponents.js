import { build } from 'vite'
import { fileURLToPath } from 'url'
import fs, { copy, remove } from 'fs-extra'
import chalk from 'chalk'
import { resolve, dirname } from 'path'
import { execa } from 'execa'
import { createSpinner } from 'nanospinner'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
async function main() {
  try {
    await build()
    console.log(chalk.green('Vite build successfully completed!'))
    const spinner = createSpinner('building types').start()
    await execa('pnpm', ['run', 'build:types'])
    for (const file of await fs.readdir(
      resolve(
        __dirname,
        '../packages/components/dist/types/packages/components/'
      )
    )) {
      await copy(
        resolve(
          __dirname,
          '../packages/components/dist/types/packages/components/' + file
        ),
        resolve(__dirname, '../packages/components/dist/types/' + file)
      )
    }
    await remove(
      resolve(__dirname, '../packages/components/dist/types/packages')
    )
    spinner.success()
  } catch (error) {
    console.log(chalk.red('Vite build failed!'))
    console.log(chalk.red(error))
  }
}

main()
