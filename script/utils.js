import { execa } from 'execa'
import chalk from 'chalk'
import dayjs from 'dayjs'
import { createSpinner } from 'nanospinner'
export const log = console.log

export function formatTime() {
  return chalk.yellow(dayjs(Date.now()).format('HH:mm:ss'))
}

export async function runTask(tasks) {
  for (const task of tasks) {
    log(formatTime(), chalk.green(task.startMessage))
    try {
      const spinner = createSpinner('building').start()
      await execa(task.command)
      spinner.success()
      log(formatTime(), chalk.green(task.doneMessage))
    } catch (error) {
      log(formatTime(), chalk.red('失败 ' + error))
    }
    log('================================')
  }
}
