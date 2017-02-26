const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const cwd = process.cwd();
const sharedConfig = require('./shared.config.js');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(cwd, 'src/js/index.js'),
  ],

  output: {
    path: path.join(cwd, 'dist'),
    filename: 'index.js',
    publicPath: '../'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('css/index.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      'BROWSER': JSON.stringify(true),
    }),
  ],

  module: {
    loaders: sharedConfig.loaders.concat([
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-0'),
            require.resolve('babel-preset-react'),
          ],
          plugins: [
            require.resolve('babel-plugin-lodash'),
          ],
        },
        include: [
          path.join(cwd, 'src/js'),
        ],
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'style-loader',
            'css-loader?sourceMap',
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     plugins: function() {
            //       return [
            //         sharedConfig.postcss
            //       ];
            //     }
            //   }
            // },
            'sass-loader?sourceMap'
          ]
        }),
        include: [
          path.join(cwd, 'src/css'),
        ],
      },
    ]),
  },

  resolveLoader: sharedConfig.resolveLoader,
  resolve: sharedConfig.resolve,
  externals: sharedConfig.externals,
};
