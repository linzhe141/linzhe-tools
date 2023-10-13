<script setup lang="ts">
import { computed, ref } from 'vue'
import { ScaleScreen } from 'linzhe-tools'
const scaleScreenRef = ref<InstanceType<typeof ScaleScreen> | null>(null)
function foo() {
  scaleScreenRef.value?.fullScreen()
}
function bar() {
  scaleScreenRef.value?.exitScreen()
}
console.log('xxxxxxxx', scaleScreenRef.value)
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
      <div class="test" style="position: relative">
        <svg
          v-if="isFullscreen"
          @click="() => bar()"
          style="position: absolute; cursor: pointer; right: 0"
          width="100px"
          height="100px"
          enable-background="new 0 0 48 48"
          id="Layer_4"
          version="1.1"
          viewBox="0 0 48 48"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <polygon
              fill="#fff"
              points="0,44.34 10.662,33.678 4.52,27.514 20.539,27.514 20.539,43.588 14.316,37.345 3.662,48  "
            />
            <polygon
              fill="#fff"
              points="47.999,44.34 37.338,33.678 43.479,27.514 27.461,27.514 27.461,43.588 33.683,37.345 44.338,48     "
            />
            <polygon
              fill="#fff"
              points="47.999,3.66 37.338,14.322 43.479,20.486 27.461,20.486 27.461,4.411 33.683,10.654 44.338,0  "
            />
            <polygon
              fill="#fff"
              points="0.001,3.66 10.662,14.322 4.521,20.486 20.539,20.486 20.539,4.411 14.317,10.654 3.663,0  "
            />
          </g>
        </svg>
        <svg
          v-else
          @click="foo"
          style="position: absolute; cursor: pointer; right: 0"
          width="100px"
          height="100px"
          version="1.1"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title />
          <desc />
          <defs />
          <g
            fill="none"
            fill-rule="evenodd"
            id="Page-1"
            stroke="none"
            stroke-width="1"
          >
            <g
              fill="#fff"
              id="Core"
              transform="translate(-215.000000, -257.000000)"
            >
              <g id="fullscreen" transform="translate(215.000000, 257.000000)">
                <path
                  d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
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
