var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
//const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      'loader': path.resolve(__dirname, 'assets/loader.js'),
      'bootstrap': path.resolve(__dirname, 'assets/js/bootstrap.js'),
      'all': path.resolve(__dirname, 'assets/all.js')
    },
    output: {
      path: __dirname + '/public/assets',
      publicPath: 'assets/'
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            // Disables attributes processing
            attributes: false,
          },
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
        { 
          test: /\.(png|jpg)$/,
          include: path.join(__dirname, 'img'),
          loader: 'url-loader' 
        },
        { 
          test: /\.rt$/,
          loader: "react-templates-loader?modules=amd" 
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      host: 'localhost',
      compress: true,
      port: 9000
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new CopyPlugin({
        patterns: [
          { from: 'assets/img', to: 'img' }
        ],
      }),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './index.html',
        hash: true
      }),
      new CompressionPlugin(),
      
      new ScriptExtHtmlWebpackPlugin({
        preload: 'loader',
        defaultAttribute: 'defer'
      })
    ],
    devtool: '#eval-source-map'
  }
  
  if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
  }