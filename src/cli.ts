#!/usr/bin/env node

import { main } from './index'

main()
  .then(process.exit)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
