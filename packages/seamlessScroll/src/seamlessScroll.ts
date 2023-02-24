// 这里vue组件的props 和 以及对应类型

import type { ExtractPropTypes } from 'vue'
export const seamlessScrollProps = {
  height: { type: Number, default: 500 },
  stepHeight: { type: Number, default: 0 },
  stepWaitTimeout: { type: Number, default: 0 },
}
export type SeamlessScrollProps = ExtractPropTypes<typeof seamlessScrollProps>
