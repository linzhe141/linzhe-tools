export function debounce(fn: (...args: any[]) => any, delay: number = 100) {
  let timer: number = 0
  return function (...args): void {
    if (timer) clearTimeout(timer)
    timer = window.setTimeout(() => {
      fn.apply(null, args)
      clearTimeout(timer)
    }, delay)
  }
}

export const prefixed = 'linzhe-tools'

export function normalizeName(input: string) {
  return input
    .split('-')
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join('')
}
