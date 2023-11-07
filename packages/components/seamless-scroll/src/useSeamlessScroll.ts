import { computed, onMounted, ref } from 'vue'
import { Props } from './type'
export function useSeamlessScroll(props: Props) {
  const stepHeight = props.stepHeight
  const stepWaitTimeout = props.stepWaitTimeout
  const y = ref(0)
  const style = computed(() => ({ transform: `translateY(${y.value}px)` }))
  let scrollContentHeight = 0
  const scrollContentRef = ref<HTMLDivElement | null>(null)
  const canScroll = ref(false)

  let lastExecutionTime = new Date().getTime()
  const interval = props.interval
  let requestAnimationFrameId = -1
  let setTimoutId = -1
  const startScrollAnimation = () => {
    const now = new Date().getTime()
    const elapssed = now - lastExecutionTime
    if (elapssed > interval) {
      lastExecutionTime = now
      y.value -= 1
      if (y.value <= -scrollContentHeight) {
        y.value = 0
      }
    }

    // 分步滚动
    if (stepHeight && stepWaitTimeout) {
      // 当滚动的距离是stepHeight的倍数是就暂停
      // stepWaitTimeout后继续滚动
      if (Math.abs(y.value) % stepHeight === 0) {
        stopScrollAnimation()
        setTimoutId = window.setTimeout(() => {
          startScrollAnimation()
        }, stepWaitTimeout)
      } else {
        requestAnimationFrameId = requestAnimationFrame(startScrollAnimation)
      }
    }
    // 默认情况
    else {
      requestAnimationFrameId = requestAnimationFrame(startScrollAnimation)
    }
  }

  const stopScrollAnimation = () => {
    cancelAnimationFrame(requestAnimationFrameId)
    clearTimeout(setTimoutId)
  }

  onMounted(() => {
    scrollContentHeight = scrollContentRef.value?.offsetHeight!
    canScroll.value = scrollContentHeight > props.height
    if (!canScroll.value) return
    if (stepHeight && stepWaitTimeout) {
      setTimeout(startScrollAnimation, stepWaitTimeout)
    } else {
      startScrollAnimation()
    }
  })
  return {
    style,
    scrollContentRef,
    stopScrollAnimation,
    startScrollAnimation,
    canScroll,
  }
}
