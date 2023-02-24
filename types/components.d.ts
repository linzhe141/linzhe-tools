// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    SeamlessScroll: typeof import('../packages/seamlessScroll')['SeamlessScroll']
  }
}

export {}
