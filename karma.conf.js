// Karma configuration
// Generated on Tue Oct 31 2017 08:45:27 GMT-0400 (EDT)
var webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    client: {
      jasmine: {
        random: true
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // enable / disable colors in the output. For CI it's probably good to disable this.
    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Firefox', 'Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    basePath: 'src',

    files: [
      'index.spec.js'
    ],

    preprocessors: {
      'index.spec.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          {
            test : /\.jsx?/,
            include : path.resolve(__dirname, 'src'),
            loader : 'babel-loader'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  })
};
