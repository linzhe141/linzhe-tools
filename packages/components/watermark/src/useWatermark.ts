import { onMounted, onUnmounted, ref } from 'vue'
import { Props } from './type'
export function useWatermark(props: Props) {
  let canvas
  const watermarkWrapper = ref<HTMLElement | null>(null)
  //
  function createWatermark(dom: HTMLElement) {
    const canvas = document.createElement('canvas')
    canvas.width = dom.offsetWidth
    canvas.height = dom.offsetHeight
    const ctx = canvas.getContext('2d')
    ctx!.save()
    ctx!.rotate((props.rotate / 360) * (2 * Math.PI))
    // ctx!.rotate(Math.PI / 5)
    ctx!.fillStyle = props.fillStyle
    ctx!.font = `${props.fontSize}px Microsoft JhengHei`
    for (let row = -canvas.height * 2; row < 2 * canvas.height; row += 100) {
      for (let col = -canvas.width * 2; col < 2 * canvas.width; col += 100) {
        ctx!.fillText(props.text, col, row)
      }
    }
    ctx!.restore()
    canvas.style.position = 'absolute'
    canvas.style.top = 0 + 'px'
    canvas.style.left = 0 + 'px'
    canvas.style.pointerEvents = 'none'
    dom.appendChild(canvas)
    return canvas
  }
  function debounce(fn: Function, delay: number = 100) {
    let timer: number = 0
    return function (...args): void {
      if (timer) clearTimeout(timer)
      timer = window.setTimeout(() => {
        fn.apply(null, args)
        clearTimeout(timer)
      }, delay)
    }
  }

  function handle() {
    watermarkWrapper.value?.removeChild(canvas)
    canvas = createWatermark(watermarkWrapper.value!)
  }
  const resizeHandle = debounce(handle)
  onMounted(() => {
    canvas = createWatermark(watermarkWrapper.value!)
    window.addEventListener('resize', resizeHandle)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandle)
  })
  return {
    watermarkWrapper,
  }
}
