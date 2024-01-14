# 快速开始

## 安装

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install -S linzhe-tools

# Yarn
$ yarn add -S linzhe-tools

# pnpm
$ pnpm install -S linzhe-tools
```

## 用法

在`main.ts`引入样式文件

```ts
// main.ts
import { createApp } from 'vue'
import 'linzhe-tools/style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```
