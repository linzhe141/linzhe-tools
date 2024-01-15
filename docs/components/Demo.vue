<script setup lang="ts">
import PlaygroundBtn from './PlaygroundBtn.vue'
defineProps<{
  examplePath: string
  sourceCodeHtml: string
}>()
</script>

<template>
  <div class="demo-wrapper">
    <div style="padding: 20px">
      <component :is="examplePath.split('/').join('-')"></component>
    </div>
    <div style="padding: 0 20px">
      <PlaygroundBtn :exampleName="examplePath" style="" />
    </div>
    <div
      v-html="decodeURIComponent(sourceCodeHtml)"
      class="code-html-wrapper language-vue"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.demo-wrapper {
  border-radius: 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
}
:deep(.code-html-wrapper > pre) {
  background: transparent !important;
}
</style>
