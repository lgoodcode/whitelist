const chalk = require('chalk')

/**
 * Runs when webpack is done compiling and checks if there were any compilation
 * errors. 
 * 
 * It will throw any errors that occured because webpack only logs them.
 * This is meant to be used for CI, typically when depedabot bumps any
 * dependencies that don't affect the build but will have errors when compiling
 * and trying to run the app. 
 * 
 * If there are no errors it will simply log a message
 * and kill the process with a successful exit code to continue the CI pipeline.
 */
 class WebpackCompileTestPlugin {
   apply(compiler) {
      // The callback parameter on the callback function is omitted because the server
      // is going to exit whether there is a runtime or compilation error or not.
      compiler.hooks.done.tapAsync('done', function(stats) {
         if (stats.compilation.errors.length > 0) {
            throw new Error(stats.compilation.errors.map(err => err.message || err))
         }
         console.log(chalk.green('\nNo runtime errors'))
         process.exit()
      })
   }
}

module.exports = WebpackCompileTestPlugin