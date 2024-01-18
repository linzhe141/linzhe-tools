<img src="https://raw.githubusercontent.com/linzhe141/linzhe-tools/33f7e0189ba0deccc04727705fa6ec70ce4ccce9/docs/public/logo.svg" alt="linzhe-tools Logo" >

# linzhe-tools

[npm-version-src]: https://img.shields.io/npm/v/linzhe-tools?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/linzhe-tools
[npm-downloads-src]: https://img.shields.io/npm/dm/linzhe-tools?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/linzhe-tools
[bundle-src]: https://img.shields.io/bundlephobia/minzip/linzhe-tools?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=linzhe-tools
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/linzhe-tools

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

🚀 基于 vue3 并使用 monorepo 实现一些简单的组件

### 📝 [document](https://linzhe-tools-docs.vercel.app/)

### 📢 发布流程

本项目使用[`changeset`](https://github.com/changesets/changesets)进行管理变更集和 `npm` 的发布

1. `pnpm build`

   进行打包，如果只是修改了 play 和 docs 包，则可跳过改命令，因为 play 和 docs 的 package.json 中的 private 为 true，并且也不需要发布出去

2. `pnpm changeset`

   生成总体变更集信息， [`排除了 play 和 docs 包`](https://github.com/linzhe141/linzhe-tools/blob/main/.changeset/config.json)

3. `pnpm vp`

   根据这次变更集为对应的模块补充 `CHANGELOG.md`，并更新 version 版本

4. `git一系列操作`

   推送到 github 上，至少要提交

5. `pnpm release`

   发布到 npm 上，并创建几个（具体就是几个修改的对应要发布到 npm 上的包）git tag，所以`在 release 前一定要先 commit`，否则 tag 就会和 package 的 version 对不上，如果只是修改了 play 和 docs 包，则可跳过改命令，[此外在发布时 workspace:\*之类的 会进行自动转换](https://pnpm.io/workspaces#publishing-workspace-packages)

### 🚧 TODO

- [x] 要是在 play 包进行测试的话，每次更新任意一个库的代码，都要进行打包（麻烦，但暂时没有找到其他方案，除非不打包，但不打包 npm 就要发布源码，徒增下载体积）

  通过在 play 设置`alias`解决，这样 play 中的代码就是源码了，而非打包后的产物

- [x] docs

  采用[`vitepress`](https://vitepress.dev/)编写文档，并使用 [`vercel`](https://vercel.com/) 进行部署

- [x] playground

  使用[`@vue/repl`](https://github.com/vuejs/repl)集成到 [`docs-playground`](https://linzhe-tools-docs.vercel.app/playground.html) 中

- [ ] eslint、git hooks 等

  个人项目暂不考虑，目前只是简单的使用了 prettier 并结合 vscode 的 prettier 插件，文件自动保存进行 format
