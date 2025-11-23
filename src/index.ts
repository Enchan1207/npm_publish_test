import { intro } from '@clack/prompts'

export const main = async (): Promise<number> => {
  intro('Welcome!')
  return 0
}
