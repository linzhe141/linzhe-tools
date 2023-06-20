<script lang="ts">
export default { name: 'Carousel' }
</script>
<script lang="ts" setup>
import { useCarousel } from './useCarousel'
type Props = {
  // 自动播放的间隔时间单位ms
  interval?: number
  // 是否开启自动播放
  autoPlay?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  interval: 5000,
  autoPlay: true,
})
const {
  prevHandle,
  nextHandle,
  showArrow,
  mouseenterHandle,
  mouseleaveHandle,
} = useCarousel(props)
</script>
<template>
  <div
    class="wrap"
    @mouseleave="mouseleaveHandle"
    @mouseenter="mouseenterHandle"
  >
    <Transition name="carousel-arrow-left">
      <div v-show="showArrow" class="btn prev-btn" @click="prevHandle">
        <svg width="36" height="36">
          <polygon
            points="5,10 15,5 15,15"
            stroke="rgba(255,255,255,0.5)"
            stroke-width="2"
            fill="none"
            transform="translate(8, 8)"
          />
        </svg>
      </div>
    </Transition>
    <Transition name="carousel-arrow-right">
      <div v-show="showArrow" class="btn next-btn" @click="nextHandle">
        <svg width="36" height="36">
          <polygon
            points="5,5 15,10 5,15"
            stroke="rgba(255,255,255,0.5)"
            stroke-width="2"
            fill="none"
            transform="translate(8, 8)"
          />
        </svg></div
    ></Transition>

    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  .btn {
    position: absolute;
    z-index: 1;
    color: #fff;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    cursor: pointer;
    background: rgba(31, 45, 61, 0.11);
    &.prev-btn {
      left: 16px;
    }
    &.next-btn {
      right: 16px;
    }
    &:hover {
      background-color: rgba(31, 45, 61, 0.23);
    }
  }
  .container {
    height: 100%;
    width: 100%;
  }
}
.carousel-arrow-left-enter-from,
.carousel-arrow-left-leave-to,
.carousel-arrow-right-enter-from,
.carousel-arrow-right-leave-to {
  opacity: 0;
}
.carousel-arrow-left-enter-active,
.carousel-arrow-left-leave-active,
.carousel-arrow-right-enter-active,
.carousel-arrow-right-leave-active {
  transition: opacity 0.3s ease;
}
</style>
