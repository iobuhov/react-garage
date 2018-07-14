const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = webpack;
const path = require('path');

const getPath = path.join.bind(null, __dirname)

const PATH = {
  dist: getPath('dist'),
}

const PORT = 3000;
const HOST = 'localhost';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: PATH.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'

    },{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        // 'style-loader/url',
        // 'file-loader',
      ]
    }]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin({ template: 'src/index.html' }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: HOST,
    port: PORT,
    clientLogLevel: 'error',
    hotOnly: true,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      entrypoints: false,
      modules: false,
      moduleTrace: false
    }
  }
}
