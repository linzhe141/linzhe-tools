# linzhe-tool

### 🚀 document

- [npm](https://www.npmjs.com/package/linzhe-tools)
- [readme](https://github.com/linzhe141/linzhe-tools/blob/main/readme.md)

### ps

- 发布流程

  1. `pnpm build` 进行打包
  2. `pnpm changeset` 生成总体变更集信息
  3. `pnpm vp` 更具变更集为对应的模块补充 `CHANGELOG.md`，并更新 version 版本
  4. `pnpm release` 发布到 npm 上

- 每次更新任意一个库的代码，都要进行打包（麻烦，但暂时没有找到其他方案，除非不打包，但不打包 npm 就要发布源码，徒增下载体积）
