<script lang="ts" setup>
import { ScaleScreen } from 'linzhe-tools'

import { ref } from 'vue'
const scaleScreenRef = ref<InstanceType<typeof ScaleScreen> | null>(null)
function foo() {
  scaleScreenRef.value?.fullScreen()
}
function bar() {
  scaleScreenRef.value?.exitScreen()
}
</script>

<template>
  <div style="height: 100%">
    <ScaleScreen
      ref="scaleScreenRef"
      v-slot="{ slotProps: { isFullscreen } }"
      style="
        background: radial-gradient(rgba(14, 14, 14, 1), rgba(14, 14, 14, 0.8));
      "
    >
      <div
        class="test"
        style="position: relative; height: 1080px; width: 1920px"
      >
        <div v-if="isFullscreen" @click="bar" class="item">退出全屏</div>
        <div v-else @click="foo" class="item">进入全屏</div>
        <!-- test.jpg 为1920x1080的图片 -->
        <img src="/test.jpg" alt="" />
      </div>
    </ScaleScreen>
  </div>
</template>
<style scoped>
.test {
  width: 1920px;
  height: 1080px;
}
.item {
  position: absolute;
  cursor: pointer;
  right: 0;
  width: 100px;
  height: 100px;
  color: #fff;
}
</style>
