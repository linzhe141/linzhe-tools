# @linzhe_tool/number-scroll

# 🚀 数字滚动组件

```ts
type Props = {
  // 动态改变这个数字字符串，即可实现滚动
  numberString: string
}
```

## 📝 使用方法

- 浏览器使用

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.7/dayjs.min.js"></script>
<script src="../packages/linzheTools/dist/linzheTools.umd.js"></script>
<link href="../packages/linzheTools/dist/linzheTools.css" rel="stylesheet" />
<div id="app">
  <number-scroll :number-string="numberValue"></number-scroll>
  <p>==============</p>
  <number-scroll :number-string="timeValue"></number-scroll>
</div>
<script>
  const { NumberScroll } = linzheTools
  const app = Vue.createApp({
    setup() {
      const { onMounted, ref, computed } = Vue
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
      return {
        numberValue,
        timeValue,
      }
    },
  })
  app.component('NumberScroll', NumberScroll)
  app.mount('#app')
</script>
```

- 构建工具使用

```properties
# 方式1
npm i -S @linzhe_tools/number-scroll
# 方式2 推荐
npm i -S linzhe_tools
```

```ts
// main.ts
// 方式1
import '@linzhe_tools/number-scroll/dist/numberScroll.css'
// 方式2 推荐
import 'linzhe_tools/dist/linzheTools.css'
```

```html
<!-- App.vue -->
<script lang="ts" setup>
  import dayjs from 'dayjs'
  // 方式1
  import NumberScroll from '@linzhe_tools/number-scroll'
  // 方式2 推荐
  import { NumberScroll } from 'linzhe_tools'

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
