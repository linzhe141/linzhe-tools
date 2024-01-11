# linzhe-tool

### 🚀 document

- [npm](https://www.npmjs.com/package/linzhe-tools)
- [readme](https://github.com/linzhe141/linzhe-tools/blob/main/readme.md)

### tips

- monorepo 发布流程

  1. `pnpm build` 进行打包(如果只是修改了play包，则可跳过改命令，因为play的package.json中的private为true，也不需要发布出去)
  2. `pnpm changeset` 生成总体变更集信息
  3. `pnpm vp` 更具变更集为对应的模块补充 `CHANGELOG.md`，并更新 version 版本
  4. `pnpm release` 发布到 npm 上(如果只是修改了play包，则可跳过改命令，因为play的package.json中的private为true，也不需要发布出去)
  5. `git一系列操作` 推送到 github 上

TODO

- [x] 要是在play包进行测试的话，每次更新任意一个库的代码，都要进行打包（麻烦，但暂时没有找到其他方案，除非不打包，但不打包 npm 就要发布源码，徒增下载体积）
 
  通过在play设置`alias`解决，这样play中的代码就是源码了，而非打包后的产物

