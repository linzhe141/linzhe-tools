import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// :::demo
// Carousel/index
// :::
// 解析markdown上述字符串
export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(__dirname, '../../', 'example', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        // return `<Demo :demos="demos" source="${encodeURIComponent(
        //   highlight(source, 'vue')
        // )}" path="${sourceFile}" raw-source="${encodeURIComponent(
        //   source
        // )}" description="${encodeURIComponent(localMd.render(description))}">`
        return `<Demo source="${encodeURIComponent(
          source
        )}" example-path="${sourceFile}" >`
      } else {
        return '</Demo>'
      }
    },
  })
}
