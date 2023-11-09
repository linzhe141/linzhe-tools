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
  let spinner
  try {
    await build()
    await copy(
      resolve(__dirname, '../packages/components/dist/style'),
      resolve(__dirname, '../packages/linzhe-tools/dist/style')
    )

    spinner = createSpinner('building types').start()
    await execa('pnpm', ['run', 'build:types'])
    for (const file of await fs.readdir(
      resolve(
        __dirname,
        '../packages/linzhe-tools/dist/types/packages/linzhe-tools'
      )
    )) {
      await copy(
        resolve(
          __dirname,
          '../packages/linzhe-tools/dist/types/packages/linzhe-tools/' + file
        ),
        resolve(__dirname, '../packages/linzhe-tools/dist/types/' + file)
      )
    }
    await remove(
      resolve(__dirname, '../packages/linzhe-tools/dist/types/packages')
    )
    spinner.success()
    console.log(chalk.green('linzhe-tools build successfully completed!'))
  } catch (error) {
    console.log(chalk.red('Vite build failed!'))
    console.log(chalk.red(error))
    spinner.error()
    process.exitCode(1)
  }
}

main()
