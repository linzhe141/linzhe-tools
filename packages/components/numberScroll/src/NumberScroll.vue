<script lang="ts" setup>
import { computed } from 'vue'
type Props = {
  numberString: string
}
defineProps<Props>()
defineOptions({ name: 'NumberScroll' })
const numReg = /\d/
const isNumber = computed(() => (data: string) => numReg.test(data))
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
<template>
  <div class="wrap">
    <div v-for="(item, i) in numberString" :key="i">
      <div v-if="isNumber(item)" class="item">
        <div
          v-for="(num, index) in numbers"
          :key="index"
          class="numberItem"
          :style="{ transform: `translate(-50%, -${Number(item) * 30}px)` }"
        >
          {{ num }}
        </div>
      </div>
      <div v-else class="item">
        <div class="splitItem">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  display: flex;
  .item {
    margin-right: 4px;
    display: flex;
    flex-direction: column;
    width: 24px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    color: #fff;
    font-style: italic;
    background-color: #000;
    overflow: hidden;
    .numberItem {
      margin-left: 50%;
      transform: translate(-50%);
      transition: all 0.5s;
    }
    .splitItem {
      text-align: center;
    }
  }
}
</style>
