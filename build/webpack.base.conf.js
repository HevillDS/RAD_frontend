const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}


module.exports = {
   // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules'
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'style-loader',
            },            
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: `${PATHS.src}/js/config/postcss.config.js`  } }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }, 
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader',
        },
        {
          test: /\.(woff(2)?)/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }, 
      ],

  },
  resolve: {

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
      chunkFilename: `${PATHS.assets}css/[id].css`
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/signUp.html`,
      filename: './signUp.html'
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/signIn.html`,
      filename: './signIn.html'
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/articles.html`,
      filename: './articles.html'
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/article.html`,
      filename: './article.html'
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/spots.html`,
      filename: './spots.html'
    }),

    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/img`, to: `${PATHS.assets}img`
      }
    ]),

    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`
      }
    ]),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }), 
  ]
}
