# @linzhe-tool/scale-screen

# 🚀 缩放大屏组件

```ts
type Props = {
  // 内容渲染高度
  height: number
  // 内容渲染宽度
  width: number
}
const props = withDefaults(defineProps<Partial<Props>>(), {
  height: 1080,
  width: 1920,
})
```

```jsx
<!-- scale-screen 插槽 -->
<!-- isFullscreen:boolean; default:false -->
<scale-screen v-slot="{ slotProps: { isFullscreen } }">
  {{isFullscreen}}
</scale-screen>
```

### 📝 使用方法

```properties
npm i -S linzhe-tools
```

```ts
// main.ts
import 'linzhe-tools/style.css'
```

```vue
<!-- App.vue -->
<script lang="ts" setup>
import { ScaleScreen } from 'linzhe-tools'

import { ref } from 'vue'
const scaleScreenRef = ref<InstanceType<typeof ScaleScreen> | null>(null)
function foo() {
  scaleScreenRef.value?.fullScreen()
}
function bar() {
  scaleScreenRef.value?.exitScreen()
}
</script>

<template>
  <div style="height: 100%">
    <ScaleScreen
      ref="scaleScreenRef"
      v-slot="{ slotProps: { isFullscreen } }"
      style="
          background: radial-gradient(
            rgba(14, 14, 14, 1),
            rgba(14, 14, 14, 0.8)
          );
        "
    >
      <div
        class="test"
        style="position: relative; height: 1080px; width: 1920px"
      >
        <div
          v-if="isFullscreen"
          v-on:click="bar"
          style="position: absolute; cursor: pointer; right: 0;width:100px;height:100px;color: #fff"
        >
          退出全屏
        </div>
        <div
          v-else
          v-on:click="foo"
          style="position: absolute; cursor: pointer; right: 0;width:100px;height:100px;color: #fff"
        >
          进入全屏
        </div>
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
