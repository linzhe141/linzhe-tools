<script lang="ts">
export default { name: 'ScaleScreen' }
</script>
<script lang="ts" setup>
import { useScaleScreen } from './useScaleScreen'
type Props = {
  // 内容渲染高度
  height?: number
  // 内容渲染宽度
  width?: number
}
const props = withDefaults(defineProps<Props>(), {
  height: 1080,
  width: 1920,
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
  <div class="wrap" ref="wrapper">
    <div class="scale-wrapper" ref="scaleWrapper" :style="scaleWrapperStyle">
      <slot :slotProps="slotProps"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .scale-wrapper {
    transition: all 0.05s ease-in;
    transform-origin: 0 0;
  }
}
</style>
