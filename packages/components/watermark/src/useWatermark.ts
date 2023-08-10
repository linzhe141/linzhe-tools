import { onMounted, onUnmounted, ref } from 'vue'
import { debounce } from '@linzhe_tools/shared'
import { Props } from './type'
export function useWatermark(props: Props) {
  let canvas
  const watermarkWrapper = ref<HTMLElement | null>(null)
  //
  function createWatermark(dom: HTMLElement) {
    const canvas = document.createElement('canvas')
    canvas.width = dom.offsetWidth
    canvas.height = dom.offsetHeight
    const ctx = canvas.getContext('2d')!
    ctx.save()
    ctx.rotate((props.rotate / 360) * (2 * Math.PI))
    ctx.fillStyle = props.fillStyle
    ctx.font = `${props.fontSize}px Microsoft JhengHei`
    const max = Math.max(canvas.height, canvas.width)
    for (let row = -max * 2; row < 2 * max; row += 100) {
      for (let col = -max * 2; col < 2 * max; col += 100) {
        ctx.fillText(props.text, col, row)
      }
    }
    ctx.restore()
    canvas.style.position = 'absolute'
    canvas.style.top = 0 + 'px'
    canvas.style.left = 0 + 'px'
    canvas.style.pointerEvents = 'none'
    dom.appendChild(canvas)
    return canvas
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
