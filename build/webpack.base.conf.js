const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const JQuerry = require('jquery');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')


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
  module: {
    rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: '${PATHS.src}/js/config/postcss.config.js' } }
            },
            MiniCssExtractPlugin.loader,
            "style-loader"
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            }, {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }, {
              loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: `${PATHS.src}/js/config/postcss.config.js`  } }
            }
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader',
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
          use: [
            {
                loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            },
            {
                loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            },
            {
              loader: 'url-loader'
          }
        ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loader: {
              scss: 'vue-style-loader!css-loader!sass-loader'
            }
          }
        },
      ],

  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(

    ),

    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
      chunkFilename: `${PATHS.assets}css/[id].css`
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/reg.html`,
      filename: './reg.html'
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/interactive.html`,
      filename: './interactive.html'
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/article.html`,
      filename: './article.html'
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
  ]
}
