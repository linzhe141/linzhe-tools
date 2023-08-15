import fs from 'fs-extra'
import { fileURLToPath } from 'url'
import { resolve, dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const componentsDirPath = resolve(__dirname, '../../components')
const typesPath = resolve(__dirname, '../dist/types')
const inputTypesPath = resolve(__dirname, '../dist/types/index.d.ts')

async function copyDts() {
  const result = await traverseDirectory(componentsDirPath)
  const dtsPaths = result.filter((path) => path.includes('.d.ts'))
  dtsPaths.forEach(async (path) => {
    const [_, target] = path.split('packages')
    await fs.copy(path, join(typesPath, target))
    await fs.remove(path)
  })
}
async function traverseDirectory(dirPath, result = []) {
  const files = await fs.readdir(dirPath)
  for (const file of files) {
    const filePath = join(dirPath, file)
    const stats = await fs.stat(filePath)

    if (stats.isFile()) {
      result.push(filePath)
    } else if (stats.isDirectory()) {
      await traverseDirectory(filePath, result)
    }
  }
  return result
}

async function createInput() {
  const code = `export * from './components/index';`
  fs.outputFile(inputTypesPath, code)
}
export async function buildTypes() {
  await copyDts()
  await createInput()
}
