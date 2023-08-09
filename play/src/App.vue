<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import dayjs from 'dayjs'
import { SeamlessScroll } from '@linzhe_tools/components'
import { NumberScroll } from '@linzhe_tools/components'
import { Watermark } from '@linzhe_tools/components'
import { CarouselItem, Carousel } from '@linzhe_tools/components'
const num = ref(100)
const time = ref(Date.now())
const numberValue = computed(() => num.value + '')
const timeValue = computed(() => dayjs(time.value).format('HH:mm:ss'))
onMounted(() => {
  setInterval(() => {
    num.value++
    time.value = Date.now()
  }, 1000)
})
</script>

<template>
  <div>
    <NumberScroll :number-string="numberValue" />
    <p>==============</p>
    <NumberScroll :number-string="timeValue" />
    <div>
      <div>默认滚动</div>
      <SeamlessScroll :height="108" style="background-color: #ccc">
        <div style="line-height: 22px">11111111111111111111</div>
        <div style="line-height: 22px">22222222222222222222</div>
        <div style="line-height: 22px">33333333333333333333</div>
        <div style="line-height: 22px">44444444444444444444</div>
        <div style="line-height: 22px">55555555555555555555</div>
        <div style="line-height: 22px">66666666666666666666</div>
      </SeamlessScroll>
    </div>
    <div>
      <div>分步滚动</div>
      <SeamlessScroll
        :height="108"
        :step-height="22"
        :step-wait-timeout="2000"
        style="background-color: #ccc"
      >
        <div style="line-height: 22px">11111111111111111111</div>
        <div style="line-height: 22px">22222222222222222222</div>
        <div style="line-height: 22px">33333333333333333333</div>
        <div style="line-height: 22px">44444444444444444444</div>
        <div style="line-height: 22px">55555555555555555555</div>
        <div style="line-height: 22px">66666666666666666666</div>
      </SeamlessScroll>
    </div>
    <div style="width: 340px; height: 180px">
      <Watermark text="测试水印" fill-style="rgba(255,0,0,0.99)">
        <Carousel>
          <CarouselItem
            ><div
              style="
                line-height: 180px;
                text-align: center;
                font-size: 40px;
                color: #fff;
                background-color: #6e2e2e;
              "
            >
              1
            </div></CarouselItem
          >
          <CarouselItem
            ><div
              style="
                line-height: 180px;
                text-align: center;
                font-size: 40px;
                color: #fff;
                background-color: #1f611d;
              "
            >
              2
            </div></CarouselItem
          >
          <CarouselItem
            ><div
              style="
                line-height: 180px;
                text-align: center;
                font-size: 40px;
                color: #fff;
                background-color: #27b0b9;
              "
            >
              3
            </div></CarouselItem
          >
          <CarouselItem
            ><div
              style="
                line-height: 180px;
                text-align: center;
                font-size: 40px;
                color: #fff;
                background-color: #ff0000;
              "
            >
              4
            </div></CarouselItem
          >
          <CarouselItem
            ><div
              style="
                line-height: 180px;
                text-align: center;
                font-size: 40px;
                color: #fff;
                background-color: #cc00ff;
              "
            >
              5
            </div></CarouselItem
          >
          <CarouselItem
            ><div
              style="
                line-height: 180px;
                text-align: center;
                font-size: 40px;
                color: #fff;
                background-color: #ff8800;
              "
            >
              6
            </div></CarouselItem
          >
        </Carousel>
      </Watermark>
    </div>
  </div>
</template>

<style scoped></style>
