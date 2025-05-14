<script lang="ts" setup>
import { computed } from 'vue'
import { prefixed } from '@linzhe-tools/shared'

const name = 'number-scroll'

defineOptions({ name: 'NumberScroll' })
type Props = {
  numberString: string
}
defineProps<Props>()
const numReg = /\d/
const isNumber = computed(() => (data: string) => numReg.test(data))
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
<template>
  <div :class="`${prefixed}-${name}-wrap`">
    <div v-for="(item, i) in numberString" :key="i">
      <div v-if="isNumber(item)" class="item">
        <div
          v-for="(num, index) in numbers"
          :key="index"
          class="number-item"
          :style="{ transform: `translate(-50%, -${Number(item) * 30}px)` }"
        >
          {{ num }}
        </div>
      </div>
      <div v-else class="item">
        <div class="split-item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.linzhe-tools-number-scroll-wrap {
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
    .number-item {
      margin-left: 50%;
      transform: translate(-50%);
      transition: all 0.5s;
    }
    .split-item {
      text-align: center;
    }
  }
}
</style>
