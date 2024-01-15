<script setup lang="ts">
import { ref } from 'vue'
import PlaygroundBtn from './PlaygroundBtn.vue'
import { getHighlighter, setCDN } from 'shiki'
const props = defineProps<{
  source: string
  examplePath: string
}>()

const codeHtml = ref('')
setCDN('https://cdn.jsdelivr.net/npm/shiki')
getHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: ['vue'],
}).then((highlighter) => {
  codeHtml.value = highlighter.codeToHtml(decodeURIComponent(props.source), {
    lang: 'vue',
  })
})
</script>

<template>
  <div class="demo-wrapper vp-doc">
    <div style="padding: 20px">
      <component :is="examplePath.split('/').join('-')"></component>
    </div>
    <div style="padding: 0 20px">
      <PlaygroundBtn :exampleName="examplePath" style="" />
    </div>
    <div v-html="codeHtml" class="code-html-wrapper language-vue"></div>
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
