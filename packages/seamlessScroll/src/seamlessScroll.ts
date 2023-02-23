// 这里props 和 对应类型

import type {ExtractPropTypes,PropType} from 'vue'
export const seamlessScrollProps = {
  height: {type: Number, default: 500},
  // list: {type: Array as PropType<Array<unknown>>}
}
export type SeamlessScrollProps = ExtractPropTypes<typeof seamlessScrollProps>

