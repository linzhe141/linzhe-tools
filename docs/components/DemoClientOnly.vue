<script setup lang="ts">
import Demo from './Demo.vue'
defineProps<{
  examplePath: string
  sourceCodeHtml: string
}>()
</script>

<template>
  <ClientOnly>
    <Demo :example-path="examplePath" :source-code-html="sourceCodeHtml" />
  </ClientOnly>
</template>
