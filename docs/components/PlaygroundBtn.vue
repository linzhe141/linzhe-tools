<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ exampleName: string }>()
const examplesRaw = import.meta.glob('../example/**/*.vue', {
  as: 'raw',
  eager: true,
})
const demoSourceCode = computed(() => {
  const target = Object.keys(examplesRaw).find((i) =>
    i.includes(props.exampleName)
  )
  return target ? examplesRaw[target] : ''
})
const MAIN_FILE_NAME = 'App.vue'

// 将用例源码按照 Playground 的规则转换为 Base64 编码
const sourceHash = computed(() => {
  const originCode = {
    // [MAIN_FILE_NAME]: decodeURIComponent(demoSourceCode.value),
    [MAIN_FILE_NAME]: demoSourceCode.value,
  }
  return btoa(unescape(encodeURIComponent(JSON.stringify(originCode))))
})
const playgroundUrl = window.location.origin + '/playground.html'
function toPlayground() {
  window.open(`${playgroundUrl}#${sourceHash.value}`, '_blank')
}
</script>

<template>
  <button class="btn" @click="toPlayground">playground</button>
</template>

<style scoped>
.btn {
  text-decoration: underline;
  padding: 4px 8px;
  border-radius: 4px;
  color: var(--vp-c-brand-1);
  background: #f6f6f7;
}
.btn:hover {
  background: #eee;
}
</style>
