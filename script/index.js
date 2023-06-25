import { execa } from 'execa'
import chalk from 'chalk'
import dayjs from 'dayjs'
const log = console.log

async function buildComponent() {
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('开始打包组件 🚀')
  )
  await Promise.all([
    execa('pnpm run build:seamlessScroll'),
    execa('pnpm run build:numberScroll'),
    execa('pnpm run build:carousel'),
  ])
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('组件打包已完成 🚀')
  )
  log()
}
async function publishComponent() {
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('组件开始推送到npm 🚀')
  )
  await Promise.all([
    execa('pnpm run publish:seamlessScroll'),
    execa('pnpm run publish:numberScroll'),
    execa('pnpm run publish:carousel'),
  ])
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('组件已推送到npm的@linzhe_tools下 🚀')
  )
  log()
}

async function buildLinzheTools() {
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('开始打包linzheTools 🚀')
  )
  await execa('pnpm run build:linzheTools')
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('linzheTools已完成打包 🚀')
  )
  log()
}
async function publishLinzheTools() {
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('linzheTools开始推送到npm 🚀')
  )
  await execa('pnpm run publish:linzheTools')
  log(
    chalk.yellow(dayjs(Date.now()).format('HH:mm:ss')),
    chalk.green('组件已推送到npm linzhe_tools包 🚀')
  )
  log()
}

async function init() {
  await buildComponent()
  await publishComponent()
  await buildLinzheTools()
  await publishLinzheTools()
}

init()
