<script lang="ts">
export default { name: 'carouselItem' }
</script>
<script lang="ts" setup>
import { useCarouselItem } from './useCarouselItem'
const { isAnimation, wrapItemStyle } = useCarouselItem()
</script>
<template>
  <div
    ref="itemDomRef"
    class="wrap-item"
    :class="{ 'is-animation': isAnimation }"
    :style="wrapItemStyle"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.wrap-item {
  position: absolute;
  width: 100%;
  height: 100%;
  &.is-animation {
    transition: all 0.3s;
  }
}
</style>
