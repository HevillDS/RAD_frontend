const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: '#@cheap-module-eval-source-map',
    devServer: {
        port: 8082,
        contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: {
            errors: true,
            warnings: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        })          
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
})

