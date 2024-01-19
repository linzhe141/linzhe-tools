import { fileURLToPath } from 'url'
import fs, { copy, remove } from 'fs-extra'
import chalk from 'chalk'
import { resolve, dirname } from 'path'
import { createSpinner } from 'nanospinner'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
async function main() {
  const spinner = createSpinner(' building dist').start()
  console.log()
  try {
    await copy(
      resolve(__dirname, '../packages/components/dist/style'),
      resolve(__dirname, '../packages/linzhe-tools/dist/style')
    )
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
