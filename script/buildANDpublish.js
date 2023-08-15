import { execa } from 'execa'
import chalk from 'chalk'
import { log, runTask } from './utils.js'
const componentTasks = [
  // build

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
]

async function initTools() {
  log(chalk.green('开始打包linzheTools 🚀'))
  await execa('pnpm run build:linzheTools')
  log(chalk.green('linzheTools已完成打包 🚀'))
  log('================================')
  // log(chalk.green('linzheTools开始推送到npm 🚀'))
  // await execa('pnpm run publish:linzheTools')
  // log(chalk.green('已推送到npm linzhe_tools 🚀'))
}

async function init() {
  await runTask(componentTasks)
  await initTools()
}

init()
