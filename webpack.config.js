'use strict';

import webpack from 'webpack';
import path from 'path';
import webpackConfig, {commonPlugins} from './webpack.common.config';
import buildProperties from './build.properties';

const nodeEnv = process.env.NODE_ENV = 'development';

commonPlugins.push(
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.HotModuleReplacementPlugin()
);

//inline-source-map --> A SourceMap is added as DataUrl to the JavaScript file.
webpackConfig.devtool = 'inline-source-map';
webpackConfig.plugins = commonPlugins;
webpackConfig.devServer = {
  contentBase:path.resolve(__dirname, buildProperties.srcPath)
};

export default webpackConfig;
