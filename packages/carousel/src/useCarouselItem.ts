import { getCurrentInstance, VNode, ref, computed } from 'vue'
import { store } from './store'
import { getChildren, getOrder } from './utils'
export function useCarouselItem() {
  const vm = getCurrentInstance()
  const itemChildren = getChildren(
    vm?.parent?.subTree.children as VNode[],
    'carouselItem'
  )
  const itemLength = itemChildren.length
  const currentOrder = ref(getOrder(vm?.uid as number, itemChildren))

  const isActiveFirst = computed(() => store.activeIndex === 0)
  const isActiveLast = computed(() => store.activeIndex === itemLength - 1)

  const wrapItemStyle = computed(() => {
    if (currentOrder.value === store.activeIndex) {
      return { transform: `translateX(${0}%)` }
    }
    if (currentOrder.value === store.activeIndex + 1) {
      return { transform: `translateX(${100}%)` }
    }
    if (currentOrder.value === store.activeIndex - 1) {
      return { transform: `translateX(${-100}%)` }
    }
    if (isActiveLast.value) {
      if (currentOrder.value === 0) {
        return { transform: `translateX(${100}%)` }
      }
    }
    if (isActiveFirst.value) {
      if (currentOrder.value === itemLength - 1) {
        return { transform: `translateX(${-100}%)` }
      }
    }
    // 对应序当前激活的下标处于前一半时，那他们的头部前两个需要放在-200%
    if (store.activeIndex < itemLength / 2) {
      // active 0 , todo 3
      // active 1 , todo 4
      if (
        currentOrder.value - store.activeIndex ===
        Math.round(itemLength / 2)
      ) {
        return { transform: `translateX(${-200}%)` }
      }
    }
    // 默认都放在右边，这样右边就不用处理了
    return { transform: `translateX(${200}%)` }
  })
  const isAnimation = computed(() => {
    if (currentOrder.value === store.activeIndex) {
      return true
    }
    if (currentOrder.value === store.oldIndex) {
      return true
    }
    return false
  })
  return {
    wrapItemStyle,
    isAnimation,
  }
}
