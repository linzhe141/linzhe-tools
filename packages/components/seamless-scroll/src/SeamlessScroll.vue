<script lang="ts" setup>
import { Props } from './type'
import { useSeamlessScroll } from './useSeamlessScroll'
defineOptions({ name: 'SeamlessScroll' })
const props = withDefaults(defineProps<Partial<Props>>(), {
  height: 500,
  interval: 20,
  stepHeight: 0,
  stepWaitTimeout: 0,
})
const {
  style,
  scrollContentRef,
  stopScrollAnimation,
  startScrollAnimation,
  canScroll,
} = useSeamlessScroll(props)
</script>
<template>
  <div
    class="linzhe-tools-seamless-scroll-wrap"
    :style="{ height: height + 'px', overflow: 'hidden' }"
  >
    <div
      ref="scrollContentRef"
      :style="style"
      @mouseenter="() => canScroll && stopScrollAnimation()"
      @mouseleave="() => canScroll && startScrollAnimation()"
    >
      <slot></slot>
      <div v-if="canScroll">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
