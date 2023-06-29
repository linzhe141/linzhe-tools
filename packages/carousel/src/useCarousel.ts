import { onMounted, onUnmounted, ref, useSlots, VNode } from 'vue'
import { store } from './store'
type Props = {
  interval?: number
  autoPlay?: boolean
}
type SlotsType = {
  default: () => VNode[]
}
export function useCarousel(props: Props) {
  const slots = useSlots() as SlotsType
  const carouselItemLength = slots
    .default()
    .filter((item: any) => item.type.name === 'carouselItem').length

  function prevHandle() {
    store.oldIndex = store.activeIndex
    if (store.activeIndex === 0) {
      store.activeIndex = carouselItemLength - 1
      return
    }
    store.activeIndex--
  }
  function nextHandle() {
    store.oldIndex = store.activeIndex
    store.activeIndex = (store.activeIndex + 1) % carouselItemLength
  }
  let timer: number | null = null

  function startTimer() {
    cancleTimer()
    timer = window.setInterval(() => {
      nextHandle()
    }, props.interval)
  }
  function cancleTimer() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const showArrow = ref(false)
  function mouseenterHandle() {
    showArrow.value = true
    cancleTimer()
  }
  function mouseleaveHandle() {
    showArrow.value = false
    props.autoPlay && startTimer()
  }
  onMounted(() => {
    props.autoPlay && startTimer()
  })
  onUnmounted(() => {
    cancleTimer()
  })
  return {
    prevHandle,
    nextHandle,
    showArrow,
    mouseenterHandle,
    mouseleaveHandle,
  }
}
