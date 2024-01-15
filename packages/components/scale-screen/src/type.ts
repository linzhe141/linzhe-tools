export type Props = {
  // 实际内容渲染高度，就是实际设计稿的高
  height: number
  // 实际内容渲染宽度，就是实际设计稿的宽
  width: number
  // 作为缩率图时的高(只在非全屏下生效)
  thumbnailHeight: number
  // 作为缩率图时的宽(只在非全屏下生效)
  thumbnailWidth: number
}
