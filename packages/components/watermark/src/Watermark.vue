<script lang="ts" setup>
import { Props } from './type'
import { useWatermark } from './useWatermark'
defineOptions({ name: 'Watermark' })
const props = withDefaults(defineProps<Partial<Props>>(), {
  text: '',
  rotate: 30,
  fillStyle: 'rgba(180,180,180,0.7)',
  fontSize: 16,
})
const { watermarkWrapper } = useWatermark(props)
</script>
<template>
  <div class="wrap">
    <div class="watermark-wrapper" ref="watermarkWrapper">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  .watermark-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
