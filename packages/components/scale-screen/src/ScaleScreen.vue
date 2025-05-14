<script lang="ts" setup>
import { useScaleScreen } from './useScaleScreen'
import { Props } from './type'
import { normalizeName, prefixed } from '@linzhe-tools/shared'

const name = 'scale-screen'

defineOptions({ name: normalizeName(name) })
const props = withDefaults(defineProps<Partial<Props>>(), {
  height: 1080,
  width: 1920,
  thumbnailHeight: 540,
  thumbnailWidth: 540,
})
const {
  wrapper,
  scaleWrapper,
  scaleWrapperStyle,
  fullScreen,
  exitScreen,
  slotProps,
} = useScaleScreen(props)
defineExpose({ fullScreen, exitScreen })
</script>
<template>
  <div :class="`${prefixed}-${name}-wrap`" ref="wrapper">
    <div class="container" ref="scaleWrapper" :style="scaleWrapperStyle">
      <slot :slotProps="slotProps"></slot>
    </div>
  </div>
</template>
<style lang="scss">
.linzhe-tools-scale-screen-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .container {
    transition: all 0.05s ease-in;
    transform-origin: 0 0;
  }
}
</style>
