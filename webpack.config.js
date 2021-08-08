'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const SRC_DIR = path.resolve(__dirname, 'src')
const DIST_DIR = path.resolve(__dirname, 'dist')
const NODE_DIR = path.resolve(__dirname, 'node_modules')

const config = {
  mode: 'development',
  entry: `${SRC_DIR}/main.js`,
  devtool: 'source-map',
  output: {
    path: DIST_DIR,
    publicPath: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
    modules: [SRC_DIR, NODE_DIR],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: [
          /node_modules/,
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    hot: true,
    host: '0.0.0.0',
    publicPath: '/dist/',
    index: 'index.html',
  }
}

module.exports = config
