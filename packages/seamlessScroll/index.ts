import type { Plugin } from 'vue'
import seamlessScroll from './src/seamlessScroll.vue'
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = function (app) {
    app.component((comp as any).name, comp as any)
  }
  return comp as SFCWithInstall<T>
}
export const SeamlessScroll = withInstall(seamlessScroll)
export default SeamlessScroll
