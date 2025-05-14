<script lang="ts" setup>
import { Props } from './type'
import { useCarousel } from './useCarousel'
import { prefixed } from '@linzhe-tools/shared'

const name = 'carousel'

defineOptions({ name: 'Carousel' })
const props = withDefaults(defineProps<Partial<Props>>(), {
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
    :class="`${prefixed}-${name}-wrap`"
    @mouseleave="mouseleaveHandle"
    @mouseenter="mouseenterHandle"
  >
    <Transition :name="`${prefixed}-${name}-arrow-left`">
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
    <Transition :name="`${prefixed}-${name}-arrow-right`">
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
<style lang="scss">
.linzhe-tools-carousel-wrap {
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
.linzhe-tools-carousel-arrow-left-enter-from,
.linzhe-tools-carousel-arrow-left-leave-to,
.linzhe-tools-carousel-arrow-right-enter-from,
.linzhe-tools-carousel-arrow-right-leave-to {
  opacity: 0;
}
.linzhe-tools-carousel-arrow-left-enter-active,
.linzhe-tools-carousel-arrow-left-leave-active,
.linzhe-tools-carousel-arrow-right-enter-active,
.linzhe-tools-carousel-arrow-right-leave-active {
  transition: opacity 0.3s ease;
}
</style>
