const webpack = require('webpack');
const webpackConfig = require('./webpack.config.global.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

webpackConfig.mode = 'production';

webpackConfig.module.rules.push({
    test: /\.less$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
});

webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
        template: `${__dirname}/../../app/index.html`,
        inject: 'body'
    })
);

webpackConfig.plugins.push(
    new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            mangle: {
                keep_classnames: true,
                keep_fnames: true
            },
            compress: {
                keep_fnames: true,
                keep_classnames: true
            }
        }
    })
);

module.exports = webpackConfig;
