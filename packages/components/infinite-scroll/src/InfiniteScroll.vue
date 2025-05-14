<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { prefixed } from '@linzhe-tools/shared'

const name = 'infinite-scroll'

const props = defineProps({
  // 当最后一个元素滚动到 <= distance到视窗时，触发新的加载
  // 但因为额外的检测底部96px{假设的distance} >= 新的元素的合计的高度，则这个一直在视窗内，不会触发检测了
  // 根据实际情况谨慎设置
  //! not watch this prop[distance] to rehandle
  distance: Number,
  onScrollBottom: Function,
})

const wrapperRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const placeholderRef = ref<HTMLElement | null>(null)

let enableCheckScrollBottom = false

let observer: IntersectionObserver | null = null
const pendingOnScrollBottom = ref(false)
onMounted(() => {
  if (contentRef.value && wrapperRef.value) {
    const wrapperHeight = wrapperRef.value.getBoundingClientRect().height
    const contentHeight = contentRef.value.getBoundingClientRect().height
    enableCheckScrollBottom = wrapperHeight < contentHeight
    const options: IntersectionObserverInit = { root: wrapperRef.value }
    if (props.distance) {
      options.rootMargin = `0px 0px ${props.distance}px 0px`
    }

    observer = new IntersectionObserver(async (entries) => {
      const entry = entries[0]
      if (pendingOnScrollBottom.value === false) {
        if (
          entry.isIntersecting &&
          props.onScrollBottom &&
          enableCheckScrollBottom
        ) {
          pendingOnScrollBottom.value = true
          await props.onScrollBottom()
          pendingOnScrollBottom.value = false
        }
      }
    }, options)
    observer.observe(placeholderRef.value!)
  }
})
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div :class="`${prefixed}-${name}-wrapper`" ref="wrapperRef">
    <div :class="`${prefixed}-${name}-content`" ref="contentRef">
      <slot></slot>
    </div>
    <div
      :class="`${prefixed}-${name}-bottom-placeholder`"
      ref="placeholderRef"
    ></div>
    <slot v-if="pendingOnScrollBottom" name="pendingOnScrollBottom"></slot>
  </div>
</template>
<style>
.linzhe-tools-infinite-scroll-wrapper {
  height: 100%;
  overflow-y: auto;
}
</style>
