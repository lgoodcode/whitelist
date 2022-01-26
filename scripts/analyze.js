'use strict'

process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpackConfigProd = require('../config/webpack.config')('production')
const chalk = require('chalk')

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfigProd, (err, stats) => {
   if (err || stats.hasErrors()) {
      console.log(chalk.red(err))
   }
})
