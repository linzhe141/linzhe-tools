# @linzhe_tool/carousel

# 🚀 轮播图组件

```ts
type Props = {
  // 自动播放的间隔时间单位ms
  interval?: number
  // 是否开启自动播放
  autoPlay?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  interval: 5000,
  autoPlay: true,
})
```

## 📝 使用方法

- 浏览器使用

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="../packages/linzheTools/dist/linzheTools.umd.js"></script>
<link href="../packages/linzheTools/dist/linzheTools.css" rel="stylesheet" />
<style>
  .content-item {
    line-height: 180px;
    text-align: center;
    font-size: 40px;
    color: #fff;
  }
</style>
<div id="app">
  <div style="width: 340px; height: 180px">
    <carousel>
      <carousel-item
        ><div class="content-item" style="background-color: #6e2e2e">
          1
        </div></carousel-item
      >
      <carousel-item
        ><div class="content-item" style="background-color: #1f611d">
          2
        </div></carousel-item
      >
      <carousel-item
        ><div class="content-item" style="background-color: #27b0b9">
          3
        </div></carousel-item
      >
      <carousel-item
        ><div class="content-item" style="background-color: #ff0000">
          4
        </div></carousel-item
      >
    </carousel>
  </div>
</div>
<script>
  const { Carousel, CarouselItem } = linzheTools
  const app = Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
      }
    },
  })
  app.component('Carousel', Carousel)
  app.component('CarouselItem', CarouselItem)
  app.mount('#app')
</script>
```

- 构建工具使用

```properties
# 方式1
npm i -S @linzhe_tools/carousel
# 方式2 推荐
npm i -S linzhe_tools
```

```ts
// main.ts
// 方式1
import '@linzhe_tools/carousel/dist/carousel.css'
// 方式2 推荐
import 'linzhe_tools/dist/linzheTools.css'
```

```html
<!-- App.vue -->
<script setup lang="ts">
  // 方式1
  import { CarouselItem, Carousel } from '@linzhe_tools/carousel'
  // 方式2 推荐
  import { CarouselItem, Carousel } from 'linzhe_tools'
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
