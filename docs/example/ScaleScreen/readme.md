---
outline: deep
---

# 缩放大屏组件

基于 css 的 transform scale 实现的缩放大屏组件

## Props

```ts
type Props = {
  // 实际内容渲染高度，就是实际设计稿的高
  height: number
  // 实际内容渲染宽度，就是实际设计稿的宽
  width: number
  // 作为缩率图时的高(只在非全屏下生效)
  thumbnailHeight: number
  // 作为缩率图时的宽(只在非全屏下生效)
  thumbnailWidth: number
}
const props = withDefaults(defineProps<Partial<Props>>(), {
  height: 1080,
  width: 1920,
  thumbnailHeight: 540,
  thumbnailWidth: 540,
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
