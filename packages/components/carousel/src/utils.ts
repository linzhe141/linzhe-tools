import { VNode } from 'vue'

export function getChildren(
  vnodeChilren: VNode[],
  componentName: string,
  result: any[] = []
) {
  Array.isArray(vnodeChilren) &&
    vnodeChilren.forEach((item) => {
      if ((item.type as any).name === componentName) {
        result.push(item)
      }
      if (item.children?.length) {
        getChildren(item.children as VNode[], componentName, result)
      }
    })
  return result
}
export function getOrder(uid: number, children: any[]) {
  const index = children.findIndex((item) => item.component.uid === uid)
  return index
}
