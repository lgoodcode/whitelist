'use strict'

process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
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
