<script setup lang="ts">
import { ScaleScreen } from '@linzhe_tools/scale-screen'
function foo() {
  let ele = document.getElementById('test')
  let reqFullScreen =
    // @ts-ignore
    ele!.requestFullScreen ||
    // @ts-ignore
    ele!.webkitRequestFullScreen ||
    // @ts-ignore
    ele!.mozRequestFullScreen ||
    // @ts-ignore
    ele!.msRequestFullscreen
  if (typeof reqFullScreen !== 'undefined' && reqFullScreen) {
    reqFullScreen.call(ele)
  }
}
</script>

<template>
  <div style="height: 100%">
    <ScaleScreen
      style="
        background: radial-gradient(rgba(14, 14, 14, 1), rgba(14, 14, 14, 0.8));
      "
    >
      <div id="test" class="test" @click="foo">
        <!-- <img src="./lufei.jpg" alt="" /> -->
        <!-- <img src="./4k.png" alt="" /> -->
        <img src="./test.jpg" alt="" />
      </div>
    </ScaleScreen>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
}
</style>
<style scoped>
.test {
  /* width: 2160px;
  height: 2024px; */
  /* width: 5188px;
  height: 3070px; */
  width: 1920px;
  height: 1080px;
}
</style>
