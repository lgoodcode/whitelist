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

const argv = process.argv.slice(2)

// Watch unless on CI to prevent the test from hanging forever in
// Github Actions
if (!process.env.CI) {
   argv.push('--watchAll')
}

require('jest').run(argv)
