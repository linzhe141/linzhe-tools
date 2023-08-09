import { runTask } from './utils.js'
const buildTask = [
  {
    command: 'pnpm run build:linzheTools',
    startMessage: '开始打包linzheTools库 🚀',
    doneMessage: 'linzheTools库打包已完成 🚀',
  },
]

async function init() {
  await runTask(buildTask)
}

init()
