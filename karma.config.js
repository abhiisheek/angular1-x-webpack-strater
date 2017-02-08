const webpack = require('./webpack.config.test');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //For jenkins build
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ], //use the Jasmine test framework
    files: [
      './node_modules/jquery/dist/jquery.js',
      './testContext.js'
    ],
    preprocessors: {
      './testContext.js': [ 'webpack', 'sourcemap']  //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'progress', 'html', 'coverage' ], //report results in this format
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html'}
      ]
    },
    webpack,
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    browserNoActivityTimeout: 1000000000
  });
};
