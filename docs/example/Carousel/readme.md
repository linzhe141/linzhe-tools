---
outline: deep
---

# 轮播图组件

## Props

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

## Demo

:::demo
Carousel/index
:::
