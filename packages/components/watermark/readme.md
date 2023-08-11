# @linzhe_tool/watermark

# 🚀 水印组件

```ts
export type Props = {
  text: string
  rotate: number
  fillStyle: string
  fontSize: number
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  text: '',
  rotate: 30,
  fillStyle: 'rgba(180,180,180,0.7)',
  fontSize: 16,
})
```

## 📝 使用方法

- 浏览器使用

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="../packages/linzheTools/dist/umd/index.js"></script>
<link href="../packages/linzheTools/dist/style/style.css" rel="stylesheet" />
<div id="app">
  <div style="height: 500px">
    <watermark text="测试水印" fill-style="rgba(255,0,0,0.99)">
      fadfdasfdas
    </watermark>
  </div>
</div>
<script>
  const { Watermark } = linzheTools
  const app = Vue.createApp()
  app.component('Watermark', Watermark)
  app.mount('#app')
</script>
```

- 构建工具使用

```properties
npm i -S linzhe_tools
```

```ts
// main.ts
import 'linzhe_tools/style.css'
```

```html
<!-- App.vue -->
<script>
  import { Watermark } from '@linzhe_tools/components'
</script>
<template>
  <div style="height: 500px">
    <Watermark text="测试水印" fill-style="rgba(255,0,0,0.99)">
      fadfdasfdas
    </Watermark>
  </div>
</template>
```
