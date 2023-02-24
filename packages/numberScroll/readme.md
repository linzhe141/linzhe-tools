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
