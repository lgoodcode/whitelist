'use strict'

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
   throw err
})

// Environment variables should be set under the `setupFiles` jest config
// property so it'll run whether testing via VSCode Jest extension or script
// require('../config/env')

const jest = require('jest')
const argv = process.argv.slice(2)

argv.push('--detectOpenHandles')

jest.run(argv)
