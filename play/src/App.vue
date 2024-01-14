<script setup lang="ts">
import { computed } from 'vue'
import Playground from './Playground.vue'
import demoSourceCode from './Demo.vue?raw'

const MAIN_FILE_NAME = 'App.vue'

// 将用例源码按照 Playground 的规则转换为 Base64 编码
const sourceHash = computed(() => {
  const originCode = {
    [MAIN_FILE_NAME]: decodeURIComponent(demoSourceCode),
  }
  return btoa(unescape(encodeURIComponent(JSON.stringify(originCode))))
})
function toPlayground() {
  window.open(`${window.location.origin}/#${sourceHash.value}`, '_blank')
}
</script>

<template>
  <Playground />
</template>

<style scoped></style>
