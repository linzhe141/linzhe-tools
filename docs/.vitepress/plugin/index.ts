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

    render(tokens, idx, options, env, self) {
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
        const sourceCodeHtml = self.rules.fence?.(
          // 将源码拼接成 markdown 的代码块形式
          // 调用 md.parse() 将代码块转换成对应的 Token
          // 调用代码块渲染的 Renderer —— renderer.rules.fence()，生成源码展示 Html
          md.parse(`\`\`\`vue\n${source}\n\`\`\``, env),
          0,
          options,
          env,
          self
        )
        let playgroundVueComponentPath = sourceFile
        if (description.includes('playgroundVueComponentPath=')) {
          playgroundVueComponentPath = description.split('=')[1]
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<DemoClientOnly 
          example-path="${playgroundVueComponentPath}" 
          source-code-html="${encodeURIComponent(sourceCodeHtml)}" >`
      } else {
        return '</DemoClientOnly>'
      }
    },
  })
}
