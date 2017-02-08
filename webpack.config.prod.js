'use strict';

import webpack from 'webpack';
import webpackConfig, { commonPlugins } from './webpack.common.config';
const nodeEnv = process.env.NODE_ENV = 'production';

commonPlugins.push(
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  //The UglifyJsPlugin will no longer put loaders into minimize mode, and the debug option has been deprecated.Webpack2 uses LoaderOptionsPlugin
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    sourceMap: true // Source map is disabled by default in webpack2
  })
);

//Source map bundles will loaded only when the dev tools are opened in browser.
webpackConfig.devtool = 'source-map';
webpackConfig.plugins = commonPlugins;

export default webpackConfig;
