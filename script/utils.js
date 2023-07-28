import { execa } from 'execa'
import chalk from 'chalk'
import dayjs from 'dayjs'
import { createSpinner } from 'nanospinner'
export const log = (msg) => {
  console.log(formatTime(), msg)
}

export function formatTime() {
  return chalk.yellow(dayjs(Date.now()).format('HH:mm:ss'))
}

export async function runTask(tasks) {
  for (const task of tasks) {
    log(chalk.green(task.startMessage))
    try {
      const spinner = createSpinner('building').start()
      await execa(task.command)
      spinner.success()
      log(chalk.green(task.doneMessage))
    } catch (error) {
      log(chalk.red('失败 ' + error))
    }
    log('================================')
  }
}
