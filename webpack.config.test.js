/* eslint-disable */

'use strict';

module.exports = {
  //webpack config specific to unit tests
  entry: './testContext.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      // Code coverage
      {
        test: /\.js$/,
        enforce: 'pre',
        // Files not considered for coverage
        exclude: [
          /testContext.js/,
          /node_modules/,
          /\.spec.js$/
        ],
        loader: 'isparta-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url-loader?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
