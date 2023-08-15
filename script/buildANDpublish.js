import { runTask } from './utils.js'
const componentTasks = [
  // build
  {
    command: 'pnpm run build:linzheTools',
    startMessage: '开始打包linzheTools 🚀',
    doneMessage: 'linzheTools发布已完成 🚀',
  },

  // publish
  // {
  //   command: 'pnpm run publish:components',
  //   startMessage: '开始发布components 🚀',
  //   doneMessage: 'components发布已完成 🚀',
  // },
  // {
  //   command: 'pnpm run publish:shared',
  //   startMessage: '开始发布shared 🚀',
  //   doneMessage: 'shared发布已完成 🚀',
  // },
  // {
  //   command: 'pnpm run publish:linzheTools',
  //   startMessage: '开始发布linzheTools 🚀',
  //   doneMessage: 'linzheTools发布已完成 🚀',
  // },
]

function init() {
  runTask(componentTasks)
}

init()
