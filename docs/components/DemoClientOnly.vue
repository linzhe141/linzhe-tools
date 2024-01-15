<script setup lang="ts">
import Demo from './Demo.vue'
defineProps<{
  source: string
  examplePath: string
}>()
</script>

<template>
  <ClientOnly
    ><Demo :source="source" :example-path="examplePath" />
  </ClientOnly>
</template>
