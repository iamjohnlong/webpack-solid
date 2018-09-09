const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  serve: {
    content: './dist'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              'jsx-dom-expressions',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.NamedModulesPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
