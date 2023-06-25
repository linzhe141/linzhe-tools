import { runTask } from './utils.js'
const buildTask = [
  {
    command: 'pnpm run build:seamlessScroll',
    startMessage: '开始打包seamlessScroll组件 🚀',
    doneMessage: 'seamlessScroll组件打包已完成 🚀',
  },
  {
    command: 'pnpm run build:numberScroll',
    startMessage: '开始打包numberScroll组件 🚀',
    doneMessage: 'numberScroll组件打包已完成 🚀',
  },
  {
    command: 'pnpm run build:carousel',
    startMessage: '开始打包carousel组件 🚀',
    doneMessage: 'carousel组件打包已完成 🚀',
  },
  {
    command: 'pnpm run build:linzheTools',
    startMessage: '开始打包linzheTools 🚀',
    doneMessage: 'linzheTools打包已完成 🚀',
  },
]

async function init() {
  await runTask(buildTask)
}

init()
