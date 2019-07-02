const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const srcRoot = path.resolve(__dirname, '../src')
const publicPath = path.resolve(__dirname, '../public')
const pageDir = path.resolve(srcRoot, 'page') // 相对根目录page的绝对路径

const appConfig = require('../app.config')
// 判断是开发环境还是生产环境
// process是node环境全局变量，所以无需使用require; process.env.NODE_ENV的值是什么时候设置的？
const isDev = process.env.NODE_ENV === 'development';

const defaultPlugins = [
    // 区分开发环境和生产环境：相当于定义全局变量；
    // 打包时，会根据process.env的值引用不同的框架代码的不同版本（开发环境或生产环境版本）
    new webpack.DefinePlugin({
        // 这里定义的process.env在开发中的js代码里可以访问到。
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    // 热加载时直接返回更新文件名，而不是文件的id
    new webpack.NamedModulesPlugin(),
    // HMR 热更新
    new webpack.HotModuleReplacementPlugin(),
    // 在单独的进程上运行typescript类型检查器
    new ForkTsCheckerWebpackPlugin({
        async: false,
        watch: srcRoot,
        tsconfig: path.resolve(__dirname, '../tsconfig.json'),
        tslint: path.resolve(__dirname, '../tslint.json'),
    }),
]
const devServer = {
    contentBase: publicPath,
    port: 8083,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    hot: true,
    open: true,
    proxy: appConfig.proxy,
    historyApiFallback: {
    }
}

const output = {
    path: publicPath, // dev时
    filename: '[name].[hash].min.js'
}

const config = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    devServer,
    output,
    module: {},
    plugins: defaultPlugins
})

module.exports = config
