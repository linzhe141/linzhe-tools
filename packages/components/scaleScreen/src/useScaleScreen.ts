import { onMounted, ref, computed, onUnmounted, reactive } from 'vue'
import { debounce } from '@linzhe-tools/shared'
import screenfull from 'screenfull'
import { Props } from './type'
export function useScaleScreen(props: Props) {
  const isFullscreen = ref(false)
  const slotProps = reactive({
    isFullscreen,
  })

  const wrapper = ref<HTMLElement | null>(null)
  const scaleWrapper = ref<HTMLElement | null>(null)

  const scaleXNumber = ref(1)
  const scaleYNumber = ref(1)

  const scaleWrapperStyle = computed(() => {
    return {
      transform: `scale(${scaleXNumber.value}, ${scaleYNumber.value}) !important`,
    }
  })

  let realWidth = -1
  let realHeight = -1

  function getRealSize() {
    // 实际嵌入的内容的宽高
    realWidth = scaleWrapper.value!.clientWidth
    realHeight = scaleWrapper.value!.clientHeight
  }
  function transformScale() {
    isFullscreen.value = screenfull.isFullscreen

    // 首先根据props的宽高计算出内容的缩放比例
    let xk = props.width / realWidth
    let yk = props.height / realHeight

    // 窗口的宽高
    const w = window.innerWidth
    const h = window.innerHeight
    let resizeWidth = 0
    let resizeHeight = 0
    if (h / w > props.height / props.width) {
      // 高度较高的情况下，按照宽度进行缩放，上下留白
      resizeWidth = w
      resizeHeight = (props.height / props.width) * resizeWidth
    } else {
      // 高度较低的情况下，按照高度进行缩放，左右留白
      resizeHeight = h
      resizeWidth = (props.width / props.height) * resizeHeight
    }
    scaleWrapper.value!.style.width = resizeWidth + 'px'
    scaleWrapper.value!.style.height = resizeHeight + 'px'
    scaleXNumber.value = (resizeWidth / props.width) * xk
    scaleYNumber.value = (resizeHeight / props.height) * yk
  }
  const resizeHandle = debounce(transformScale)
  const fullScreen = () => {
    screenfull.toggle(wrapper.value!)
    isFullscreen.value = true
  }
  const exitScreen = () => {
    screenfull.toggle(wrapper.value!)
    isFullscreen.value = false
  }
  // TODO
  // const keyDownHandle = (e: KeyboardEvent) => {
  //   if (e.key === 'F11') {
  //     e.preventDefault()
  //     return false
  //   }
  // }
  onMounted(() => {
    getRealSize()
    transformScale()
    window.addEventListener('resize', resizeHandle)
    // window.addEventListener('keydown', keyDownHandle)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandle)
    // window.removeEventListener('keydown', keyDownHandle)
  })
  return {
    scaleWrapperStyle,
    scaleWrapper,
    wrapper,
    fullScreen,
    exitScreen,
    slotProps,
  }
}
