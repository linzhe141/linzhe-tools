# @linzhe-tool/carousel

# 🚀 轮播图组件

```ts
type Props = {
  // 自动播放的间隔时间单位ms
  interval: number
  // 是否开启自动播放
  autoPlay: boolean
}
const props = withDefaults(defineProps<Partial<Props>>(), {
  interval: 5000,
  autoPlay: true,
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
<script setup lang="ts">
  import { CarouselItem, Carousel } from 'linzhe-tools'
</script>
<template>
  <div style="width: 340px; height: 180px">
    <Carousel>
      <CarouselItem
        ><div style="background-color: #6e2e2e;">1</div></CarouselItem
      >
      <CarouselItem
        ><div style="background-color: #1f611d;">2</div></CarouselItem
      >
      <CarouselItem
        ><div style="background-color: #27b0b9;">3</div></CarouselItem
      >
      <CarouselItem
        ><div style="background-color: #ff0000;">4</div></CarouselItem
      >
    </Carousel>
  </div>
</template>
<style>
  .content-item {
    line-height: 180px;
    text-align: center;
    font-size: 40px;
    color: #fff;
  }
</style>
```
