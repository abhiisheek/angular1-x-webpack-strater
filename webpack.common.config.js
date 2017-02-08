import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import buildProperties from './build.properties';


const homePath = path.resolve(__dirname, buildProperties.srcPath);

export const commonPlugins = [
  // Bundles commonly used code separately. Eg: all vendor files
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[name].[hash].js'
  }),
  // Bundles css/scss separately
  new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: false,
    allChunks: true
  }),
  new webpack.ProvidePlugin({
    $: "jquery",
    jquery: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  }),
  new WebpackMd5Hash(),
  new ManifestPlugin(),
  new ChunkManifestPlugin({
    filename: "chunk-manifest.json",
    manifestVariable: "webpackManifest"
  }),
  new HtmlWebpackPlugin({
    inject: 'head',
    template: path.resolve(homePath, `./index.html`)
  })
];

export default {
  context: homePath,
  entry: {
    app: path.resolve(homePath, `./${buildProperties.appFileName}`),
    vendor: path.resolve(homePath, `./${buildProperties.vendorFileName}`)
  },
  output: {
    path: path.resolve(__dirname, buildProperties.destinationPath),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
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
}
