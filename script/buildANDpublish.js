import { execa } from 'execa'
import chalk from 'chalk'
import { log, formatTime, runTask } from './utils.js'
const componentTasks = [
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
    command: 'pnpm run publish:seamlessScroll',
    startMessage: '开始发布seamlessScroll组件 🚀',
    doneMessage: 'seamlessScroll组件发布已完成 🚀',
  },
  {
    command: 'pnpm run publish:numberScroll',
    startMessage: '开始发布numberScroll组件 🚀',
    doneMessage: 'numberScroll组件发布已完成 🚀',
  },
  {
    command: 'pnpm run publish:carousel',
    startMessage: '开始发布carousel组件 🚀',
    doneMessage: 'carousel组件发布已完成 🚀',
  },
]

async function initTools() {
  log(chalk.yellow(formatTime()), chalk.green('开始打包linzheTools 🚀'))
  await execa('pnpm run build:linzheTools')
  log(chalk.yellow(formatTime()), chalk.green('linzheTools已完成打包 🚀'))
  log('================================')
  log(chalk.yellow(formatTime()), chalk.green('linzheTools开始推送到npm 🚀'))
  await execa('pnpm run publish:linzheTools')
  log(chalk.yellow(formatTime()), chalk.green('已推送到npm linzhe_tools包 🚀'))
}

async function init() {
  await runTask(componentTasks)
  await initTools()
}

init()
