<script lang="ts" setup>
import { useCarouselItem } from './useCarouselItem'
defineOptions({ name: 'CarouselItem' })
const { isAnimation, wrapItemStyle } = useCarouselItem()
</script>
<template>
  <div
    ref="itemDomRef"
    class="linzhe-tools-carousel-item-wrap"
    :class="{ 'is-animation': isAnimation }"
    :style="wrapItemStyle"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss">
.linzhe-tools-carousel-item-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  &.is-animation {
    transition: all 0.3s;
  }
}
</style>
