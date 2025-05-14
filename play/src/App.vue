<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import dayjs from 'dayjs'
import { SeamlessScroll } from 'linzhe-tools'
import { NumberScroll } from 'linzhe-tools'
import { Watermark } from 'linzhe-tools'
import { CarouselItem, Carousel } from 'linzhe-tools'
import { InfiniteScroll } from '@linzhe-tools/components'
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

const loading = ref(false)
const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
async function onScrollBottom() {
  loading.value = true
  const last = arr.value.at(-1)!
  await new Promise((resolve) => setTimeout(resolve, 100))
  for (let i = 1; i <= 4; i++) {
    arr.value.push(last + i)
  }
  loading.value = false
}
</script>

<template>
  <div>
    <div style="text-align: center">loading==> {{ loading }}</div>
    <div
      style="
        height: 200px;
        width: 500px;
        margin: 10px auto;
        border-radius: 4px;
        border: 1px solid #efefef;
      "
    >
      <InfiniteScroll :onScrollBottom="onScrollBottom" :distance="60">
        <div v-for="item of arr" :key="item">
          {{ item }}
        </div>
        <template #pendingOnScrollBottom>
          <div>loading...</div>
        </template>
      </InfiniteScroll>
    </div>
    <Watermark text="测试水印" fill-style="rgba(255,0,0,0.99)">
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
        </div>
      </div>
    </Watermark>
  </div>
</template>

<style scoped></style>
