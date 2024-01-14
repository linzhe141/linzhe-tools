---
outline: deep
---

# 缩放大屏组件

基于 css 的 transform scale 实现的缩放大屏组件

## Props

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

## Demo

:::demo
ScaleScreen/index
:::
