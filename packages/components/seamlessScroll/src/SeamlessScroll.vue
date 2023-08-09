<script lang="ts" setup>
import { Props } from './type'
import { useSeamlessScroll } from './useSeamlessScroll'
defineOptions({ name: 'SeamlessScroll' })
const props = withDefaults(defineProps<Partial<Props>>(), {
  height: 500,
  stepHeight: 0,
  stepWaitTimeout: 0,
})
const { style, scrollContentRef, stopScrollAnimation, startScrollAnimation } =
  useSeamlessScroll(props)
</script>
<template>
  <div class="wrap" :style="{ height: height + 'px', overflow: 'hidden' }">
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
