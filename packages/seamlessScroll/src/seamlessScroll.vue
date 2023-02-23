<script lang="ts">
export default {name: 'SeamlessScroll'}
</script>
<script lang="ts" setup>
import {computed, ref} from 'vue'
import {seamlessScrollProps} from './seamlessScroll'
const props = defineProps(seamlessScrollProps)
const height = props.height + 'px'
const y = ref(0)
const style = computed(() => ({transform: `translateY(${y.value}px)`}))

let requestAnimationFrameId = -1
const startScrollAnimation = () => {
  y.value -= 0.5
  if (y.value <= -252 / 2) {
    y.value = 0
  }
  requestAnimationFrameId = requestAnimationFrame(startScrollAnimation)
}

const stopScrollAnimation = () => {
  cancelAnimationFrame(requestAnimationFrameId)
}
// startScrollAnimation()
</script>
<template>
  <div class="wrap" :style="{height: height}">
    <div
      :style="style"
      @mouseenter="stopScrollAnimation"
      @mouseleave="startScrollAnimation"
    >
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  overflow: hidden;
}
</style>
