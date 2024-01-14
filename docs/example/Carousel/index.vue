<script setup lang="ts">
import { CarouselItem, Carousel } from 'linzhe-tools'
</script>

<template>
  <div style="width: 100%; height: 180px">
    <Carousel>
      <CarouselItem>
        <div class="item" style="background-color: #6e2e2e">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="item" style="background-color: #1f611d">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="item" style="background-color: #27b0b9">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="item" style="background-color: #ff0000">4</div>
      </CarouselItem>
      <CarouselItem>
        <div class="item" style="background-color: #cc00ff">5</div>
      </CarouselItem>
      <CarouselItem>
        <div class="item" style="background-color: #ff8800">6</div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<style scoped>
.item {
  line-height: 180px;
  text-align: center;
  font-size: 40px;
  color: #fff;
}
</style>
