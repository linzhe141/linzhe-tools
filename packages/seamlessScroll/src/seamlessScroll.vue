<script lang="ts">
export default { name: 'SeamlessScroll' }
</script>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { seamlessScrollProps } from './seamlessScroll'
const props = defineProps(seamlessScrollProps)
const height = props.height + 'px'
const stepHeight = props.setpHeight
const y = ref(0)
const isUseTranstion = ref(true)
const style = computed(() => ({ transform: `translateY(${y.value}px)` }))
let scrollContentHeight = 0
const scrollContentRef = ref<HTMLDivElement | null>(null)

let requestAnimationFrameId = -1
const startScrollAnimation = () => {
  stopScrollAnimation()
  y.value -= 1
  // y.value -= stepHeight

  // isUseTranstion.value = true
  if (y.value <= -scrollContentHeight / 2) {
    isUseTranstion.value = false
    y.value = 0
  }
  console.log(y.value)
  if (Math.abs(y.value) % stepHeight === 0) {
    stopScrollAnimation()
    setTimeout(() => {
      startScrollAnimation()
    }, 1000)
  } else {
    requestAnimationFrameId = requestAnimationFrame(startScrollAnimation)
  }
}

const stopScrollAnimation = () => {
  cancelAnimationFrame(requestAnimationFrameId)
}

onMounted(() => {
  scrollContentHeight = scrollContentRef.value?.offsetHeight as number
  // startScrollAnimation()
  setTimeout(startScrollAnimation, 1000)
})
</script>
<template>
  <div class="wrap" :style="{ height: height }">
    <!-- TODO
      @mouseenter="stopScrollAnimation"
      @mouseleave="startScrollAnimation"
    -->
    <div
      ref="scrollContentRef"
      :class="{ 'scroll-content-transtion': isUseTranstion }"
      :style="style"
    >
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  overflow: hidden;
  .scroll-content-transtion {
    // transition: all 0.5s;
  }
}
</style>
