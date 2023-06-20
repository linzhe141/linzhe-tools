# @linzhe_tool/carousel

轮播图组件

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

```properties
npm i -S @linzhe_tools/carousel
```

```html
<script setup lang="ts">
  import { CarouselItem, Carousel } from '@linzhe_tools/carousel'
</script>
<template>
  <div style="width: 340px; height: 180px">
    <Carousel>
      <CarouselItem
        ><div
          style="
              line-height: 180px;
              text-align: center;
              font-size: 40px;
              color: #fff;
              background-color: rgb(110, 46, 46);
            "
        >
          1
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
              line-height: 180px;
              text-align: center;
              font-size: 40px;
              color: #fff;
              background-color: rgb(31, 97, 29);
            "
        >
          2
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
              line-height: 180px;
              text-align: center;
              font-size: 40px;
              color: #fff;
              background-color: rgb(39, 176, 185);
            "
        >
          3
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
              line-height: 180px;
              text-align: center;
              font-size: 40px;
              color: #fff;
              background-color: #ff0000;
            "
        >
          4
        </div></CarouselItem
      >
    </Carousel>
  </div>
</template>
```
