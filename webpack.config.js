let path = require('path');
// let ExtractTextPlugin = require('extract-webpack-text-plugin')
let webpack = require('webpack');

module.exports = {
  entry: [
    './src/client/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', ''],
    alias: {}
  },
  // plugins: [
  //   new ExtractTextPlugin(),
  //   new webpack.optimizeCommonsChunkPlugin({

  //   })
  // ],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
    
  },
  devtool: "cheap-module-eval-source-map"
};
