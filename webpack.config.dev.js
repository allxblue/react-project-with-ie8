const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./client.js'],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style',
          `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`),
      },
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader'],
      }
    ]
  },
  postcss: [ 
    autoprefixer({ browsers: ['last 2 versions'] }) 
  ],
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  externals: {
    'jquery':'window.jQuery',
    'siteConfig':'window.siteConfig'
  }
};