# @linzhe-tool/watermark

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

### 📝 使用方法

```properties
npm i -S linzhe-tools
```

```ts
// main.ts
import 'linzhe-tools/style.css'
```

```html
<!-- App.vue -->
<script>
  import { Watermark } from '@linzhe-tools/components'
</script>
<template>
  <div style="height: 500px">
    <Watermark text="测试水印" fill-style="rgba(255,0,0,0.99)">
      fadfdasfdas
    </Watermark>
  </div>
</template>
```
