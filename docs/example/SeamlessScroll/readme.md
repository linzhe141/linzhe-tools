---
outline: deep
---

# 无限滚动组件，支持分步滚动

## Props

```ts
type Props = {
  // 容器高度
  height: number
  // 间隔时间用于控制滚动速度
  interval: number
  // 只有stepHeight和stepWaitTimeout都大于0时才进行分步滚动
  // 每一步滚动距离
  stepHeight: number
  // 间隔多少毫秒滚动下一步
  stepWaitTimeout: number
}
const props = withDefaults(defineProps<Partial<Props>>(), {
  height: 500,
  stepHeight: 0,
  stepWaitTimeout: 0,
})
```

## Demo

:::demo
SeamlessScroll/index
:::
