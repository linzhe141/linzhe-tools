import { fileURLToPath } from 'url'
import fs, { copy, remove } from 'fs-extra'
import chalk from 'chalk'
import { resolve, dirname } from 'path'
import { createSpinner } from 'nanospinner'
import { execa } from 'execa'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
async function main() {
  const spinner = createSpinner(' building dist').start()
  try {
    // vue-tsc -p tsconfig.json --declaration --emitDeclarationOnly
    await execa('npx', [
      'vue-tsc',
      '-p',
      'tsconfig.json',
      '--declaration',
      '--emitDeclarationOnly',
    ])

    await copy(
      resolve(__dirname, '../packages/components/dist/style'),
      resolve(__dirname, '../packages/linzhe-tools/dist/style')
    )
    spinner.clear()
    console.log(chalk.green('✨ style.css build successfully completed!'))

    const packagesList = ['linzhe-tools', 'components', 'shared']
    async function copyDts(packageName: string) {
      for (const file of await fs.readdir(
        resolve(__dirname, `../dist/packages/${packageName}/`)
      )) {
        await copy(
          resolve(__dirname, `../dist/packages/${packageName}/` + file),
          resolve(__dirname, `../packages/${packageName}/dist/types/` + file)
        )
      }
    }
    await Promise.all(packagesList.map((i) => copyDts(i)))
    for (const packageName of packagesList) {
      const typePath = resolve(
        __dirname,
        `../packages/${packageName}/dist/types/`
      )
      const typeDir = await fs.readdir(typePath)
      for (const file of typeDir) {
        if (file === 'vite.config.d.ts') {
          await remove(resolve(typePath, file))
        }
      }
    }
    spinner.clear()
    console.log(chalk.green('✨ dts build successfully completed!'))
    // await remove(
    //   resolve(__dirname, '../packages/components/dist/types/packages')
    // )
    spinner.success()
  } catch (error) {
    spinner.error({ text: chalk.red(' build failed!, error=> ' + error) })
    process.exit(1)
  }
}

main()
