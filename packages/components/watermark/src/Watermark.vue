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
  <div class="linzhe-tools-watermark-wrap">
    <div class="container" ref="watermarkWrapper">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.linzhe-tools-watermark-wrap {
  width: 100%;
  height: 100%;
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
