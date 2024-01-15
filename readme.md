# linzhe-tools

🚀 基于 vue3 并使用 monorepo 实现一些简单的组件

### 📝 [document](https://linzhe-tools-docs.vercel.app/)

### tips

monorepo 发布流程

1. `pnpm build` 进行打包

   如果只是修改了 play 和 docs 包，则可跳过改命令，因为 play 和 docs 的 package.json 中的 private 为 true，也不需要发布出去

2. `pnpm changeset` 生成总体变更集信息
3. `pnpm vp` 更具变更集为对应的模块补充 `CHANGELOG.md`，并更新 version 版本

4. `pnpm release` 发布到 npm 上

   如果只是修改了 play 和 docs 包，则可跳过改命令

5. `git一系列操作` 推送到 github 上

TODO

- [x] 要是在 play 包进行测试的话，每次更新任意一个库的代码，都要进行打包（麻烦，但暂时没有找到其他方案，除非不打包，但不打包 npm 就要发布源码，徒增下载体积）

  通过在 play 设置`alias`解决，这样 play 中的代码就是源码了，而非打包后的产物

- [x] docs
- [x] playground
