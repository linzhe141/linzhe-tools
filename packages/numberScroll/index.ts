import type { Plugin } from 'vue'
import numberScroll from './src/numberScroll.vue'
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = function (app) {
    app.component((comp as any).name, comp as any)
  }
  return comp as SFCWithInstall<T>
}
export const NumberScroll = withInstall(numberScroll)
export default NumberScroll
