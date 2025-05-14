<script lang="ts" setup>
import { computed } from 'vue'
import { useCarouselItem } from './useCarouselItem'
import { normalizeName, prefixed } from '@linzhe-tools/shared'

const name = 'carousel-item'

defineOptions({ name: normalizeName(name) })
const { isAnimation, wrapItemStyle } = useCarouselItem()
const classList = computed(() => {
  const result = {
    'is-animation': isAnimation.value,
  }
  result[`${prefixed}-${name}-wrap`] = true
  return result
})
</script>
<template>
  <div ref="itemDomRef" :class="classList" :style="wrapItemStyle">
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
