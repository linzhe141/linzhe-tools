# @linzhe-tool/seamless-scroll

# 🚀 无限滚动组件，支持分步滚动

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

### 📝 使用方法

```properties
npm i -S linzhe-tools
```

```html
<!-- App.vue -->
<script>
  import { SeamlessScroll } from 'linzhe-tools'
</script>
<template>
  <div>默认滚动</div>
  <SeamlessScroll :height="108" style="background-color: #ccc">
    <div style="line-height: 22px">11111111111111111111</div>
    <div style="line-height: 22px">22222222222222222222</div>
    <div style="line-height: 22px">33333333333333333333</div>
    <div style="line-height: 22px">44444444444444444444</div>
    <div style="line-height: 22px">55555555555555555555</div>
    <div style="line-height: 22px">66666666666666666666</div>
  </SeamlessScroll>

  <div>分步滚动</div>
  <SeamlessScroll
    :height="108"
    :step-height="22"
    :step-wait-timeout="2000"
    style="background-color: #ccc"
  >
    <div style="line-height: 22px">11111111111111111111</div>
    <div style="line-height: 22px">22222222222222222222</div>
    <div style="line-height: 22px">33333333333333333333</div>
    <div style="line-height: 22px">44444444444444444444</div>
    <div style="line-height: 22px">55555555555555555555</div>
    <div style="line-height: 22px">66666666666666666666</div>
  </SeamlessScroll>
</template>
```
