import { intro, outro, text, log } from '@clack/prompts'

export const main = async (): Promise<number> => {
  intro('Welcome!')

  log.info(__dirname)

  const name = await text({
    message: 'Tell me your name.',
    validate: (v) => {
      if (v.length === 0) {
        return 'Error! length of name must be greater than 0.'
      }
    },
  })

  outro(`Hello, ${String(name)}!`)

  return 0
}
