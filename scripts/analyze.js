'use strict'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
   throw err
})

const chalk = require('chalk')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpackConfigProd = require('../config/webpack.config')('production')

webpackConfigProd.plugins.push(new BundleAnalyzerPlugin())
webpackConfigProd.plugins.push(
   new ProgressBarPlugin({
      format: `${chalk.green.bold('analyzing...')} ${chalk.cyan(
         '[:bar]'
      )} [:percent] [:elapsed seconds] - :msg`
   })
)

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfigProd, (err, stats) => {
   if (err || stats.hasErrors()) {
      console.log(chalk.red(err))
   }
})
