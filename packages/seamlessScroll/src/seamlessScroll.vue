<script lang="ts">
export default { name: 'SeamlessScroll' }
</script>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { seamlessScrollProps } from './seamlessScroll'
const props = defineProps(seamlessScrollProps)
const height = props.height + 'px'
const stepHeight = props.stepHeight
const stepWaitTimeout = props.stepWaitTimeout
const y = ref(0)
const style = computed(() => ({ transform: `translateY(${y.value}px)` }))
let scrollContentHeight = 0
const scrollContentRef = ref<HTMLDivElement | null>(null)

let requestAnimationFrameId = -1
let setTimoutId = -1
const startScrollAnimation = () => {
  y.value -= 1
  if (y.value <= -scrollContentHeight / 2) {
    y.value = 0
  }
  // 分部滚动
  if (stepHeight && stepWaitTimeout) {
    // 当滚动的距离是stepHeight的倍数是就暂停
    // stepWaitTimeout后继续滚动
    if (Math.abs(y.value) % stepHeight === 0) {
      stopScrollAnimation()
      setTimoutId = setTimeout(() => {
        startScrollAnimation()
      }, stepWaitTimeout)
    } else {
      requestAnimationFrameId = requestAnimationFrame(startScrollAnimation)
    }
  }
  // 默认情况
  else {
    requestAnimationFrameId = requestAnimationFrame(startScrollAnimation)
  }
}

const stopScrollAnimation = () => {
  cancelAnimationFrame(requestAnimationFrameId)
  clearTimeout(setTimoutId)
}

onMounted(() => {
  scrollContentHeight = scrollContentRef.value?.offsetHeight as number
  if (stepHeight && stepWaitTimeout) {
    setTimeout(startScrollAnimation, stepWaitTimeout)
  } else {
    startScrollAnimation()
  }
})
</script>
<template>
  <div class="wrap" :style="{ height: height, overflow: 'hidden' }">
    <div
      ref="scrollContentRef"
      :style="style"
      @mouseenter="stopScrollAnimation"
      @mouseleave="startScrollAnimation"
    >
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>
