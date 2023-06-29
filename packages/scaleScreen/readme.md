# @linzhe_tool/scale-screen

# 🚀 缩放大屏组件

```ts
type Props = {
  // 内容渲染高度
  height?: number
  // 内容渲染宽度
  width?: number
}
const props = withDefaults(defineProps<Props>(), {
  height: 1080,
  width: 1920,
})
```

## 📝 使用方法

- 浏览器使用

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="../packages/linzheTools/dist/linzheTools.umd.js"></script>
<link href="../packages/linzheTools/dist/linzheTools.css" rel="stylesheet" />
<style>
  * {
    padding: 0;
    margin: 0;
  }
  html,
  body,
  #app {
    height: 100%;
  }
</style>
<div id="app">
  <scale-screen :number-string="numberValue">
    <div style="height: 1080px; width: 1920px">
      <!-- test.jpg 为1920x1080的图片 -->
      <img src="./test.jpg" alt="" />
    </div>
  </scale-screen>
</div>
<script>
  const { ScaleScreen } = linzheTools
  const app = Vue.createApp()
  app.component('ScaleScreen', ScaleScreen)
  app.mount('#app')
</script>
```

- 构建工具使用

```properties
# 方式1
npm i -S @linzhe_tools/scale-screen
# 方式2 推荐
npm i -S linzhe_tools
```

```ts
// main.ts
// 方式1
import '@linzhe_tools/scale-screen/dist/numberScroll.css'
// 方式2 推荐
import 'linzhe_tools/dist/linzheTools.css'
```

```html
<!-- App.vue -->
<script lang="ts" setup>
  // 方式1
  import { ScaleScreen } from '@linzhe_tools/scale-screen'
  // 方式2 推荐
  import { ScaleScreen } from 'linzhe_tools'
</script>

<template>
  <div style="height: 100%">
    <ScaleScreen
      style="
        background: radial-gradient(rgba(14, 14, 14, 1), rgba(14, 14, 14, 0.8));
      "
    >
      <div id="test" class="test">
        <!-- test.jpg 为1920x1080的图片 -->
        <img src="./test.jpg" alt="" />
      </div>
    </ScaleScreen>
  </div>
</template>
<style>
  * {
    padding: 0;
    margin: 0;
  }
  html,
  body,
  #app {
    height: 100%;
  }
  .test {
    width: 1920px;
    height: 1080px;
  }
</style>
```
