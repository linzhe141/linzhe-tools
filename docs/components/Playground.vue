<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { Repl, ReplStore } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'

// repl组件需要store管理状态
const store = new ReplStore({
  serializedState: window.location.hash.slice(1),
})
watchEffect(() => window.history.replaceState({}, '', store.serialize()))
const previewOptions = reactive({ headHTML: '' })
store.setVueVersion('3.4.8')

// store.state.typescriptVersion = '5.0.0'
store.setImportMap({
  imports: {
    screenfull: 'https://cdn.jsdelivr.net/npm/screenfull@6.0.2/+esm',
    dayjs: 'https://cdn.jsdelivr.net/npm/dayjs@1.11.10/+esm',
    // 'linzhe-tools': './linzhe-tools/index.js',
    // '@linzhe-tools/components': './linzhe-tools/components/index.js',
    // '@linzhe-tools/shared': './linzhe-tools/shared/index.js',
    'linzhe-tools':
      'https://cdn.jsdelivr.net/npm/linzhe-tools@latest/dist/index.min.js',
    '@linzhe-tools/components':
      'https://cdn.jsdelivr.net/npm/@linzhe-tools/components@latest/dist/index.min.js',
    '@linzhe-tools/shared':
      'https://cdn.jsdelivr.net/npm/@linzhe-tools/shared@latest/dist/index.min.js',
  },
})
previewOptions.headHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/linzhe-tools@latest/dist/style/style.css">`
</script>

<template>
  <div>
    <Repl
      :store="store"
      :editor="Monaco"
      :auto-resize="true"
      :preview-options="previewOptions"
    />
  </div>
</template>

<style scoped lang="scss">
:deep(.vue-repl) {
  height: 100vh;
}
</style>
