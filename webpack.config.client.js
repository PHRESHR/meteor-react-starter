var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel/polyfill',
    './app/main_client.js',
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'client.bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      utils: path.join(__dirname, "/app/utils"),
      containers: path.join(__dirname, "/app/containers"),
      components: path.join(__dirname, "/app/components"),
      models: path.join(__dirname, "/app/models"),
      publications: path.join(__dirname, "/app/publications"),
      sass: path.join(__dirname, "/app/styles"),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules|vendor/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
    ],
  },
};
