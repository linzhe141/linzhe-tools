# @linzhe_tool/seamlessScroll

无限滚动组件，支持分步滚动

```ts
export const props = {
  // 容器高度
  height: { type: Number, default: 500 },
  // 只有stepHeight和stepWaitTimeout都大于0时才进行分布滚动
  // 每一步滚动距离
  stepHeight: { type: Number, default: 0 },
  // 间隔多少毫秒滚动下一步
  stepWaitTimeout: { type: Number, default: 0 },
}
```

```html
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
```

# @linzhe_tool/numberScroll

数字滚动组件

```ts
type NumberScrollProps = {
  // 动态改变这个数字字符串，即可实现滚动
  numberString: string
}
```

```html
<script lang="ts" setup>
  import dayjs from 'dayjs'
  import { onMounted, ref, computed } from 'vue'
  const num = ref(100)
  const time = ref(Date.now())
  const numberValue = computed(() => num.value + '')
  const timeValue = computed(() => dayjs(time.value).format('HH:mm:ss'))
  onMounted(() => {
    setInterval(() => {
      num.value++
      time.value = Date.now()
    }, 1000)
  })
</script>

<template>
  <NumberScroll :number-string="numberValue" />
  <p>==============</p>
  <NumberScroll :number-string="timeValue" />
</template>
```
