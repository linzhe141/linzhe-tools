---
outline: deep
---

# 水印组件

## Props

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

## Demo

:::demo
Watermark/index
:::
