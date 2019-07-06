const path = require('path')
const srcRoot = path.resolve(__dirname, '../src')
const mockRoot = path.resolve(__dirname, '../mock')
const nodeModulesRoot = path.resolve(__dirname, '../node_modules')
const pageDir = path.resolve(srcRoot, 'pages') // 相对根目录page的绝对路径
const srcStaticsRoot = path.resolve(srcRoot, 'statics') // 相对根目录page的绝对路径
const HTMLPlugin = require('html-webpack-plugin');
const IndexJsFile = 'index.tsx'
const { getEntry, getHtmlArray } = require('./utils')
const entryMap = getEntry(pageDir, IndexJsFile)
const isDev = process.env.NODE_ENV === 'development';

const HTMLArray = getHtmlArray(entryMap, pageDir, HTMLPlugin)

const config = {
    mode: 'development', //process.env.NODE_ENV,
    entry: entryMap,
    module: {
        // provide path to the file with resources
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
                include: srcRoot
            },
            {
                test: /\.(ts|tsx)$/,
                include: srcRoot,
                exclude: [path.resolve(__dirname, '../node_modules')],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                          transpileOnly: true, // 管理ts-loader自身的类型检查
                          // getCustomTransformers: () => ({
                          //   before: [tsImportPluginFactory(importPluginOption)]
                          // })
                        }
                    }

                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: srcRoot
            },
            {
                test: /\.(styl|stylus)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            // 这里postcss直接使用stylus编译后的tree进行编译，提高效率
                            sourceMap: true,
                        }
                    },
                    'stylus-loader',
                    // {
                    //   loader: 'stylus-resources-loader',
                    //   options: {
                    //     resources: '../src/statics/style/stylus/mixins/resources.styl'
                    //   }
                    // }
                ],
                include: srcRoot
            },
            {
                test: /\.(png|jpg|jpeg|svg|eot|ttf|woff|woff2)$/,
                use: 'url-loader?limit=8912', // < 8k
                include: srcRoot
            },
        ],
    },
    resolve: {
        alias: {
            'src': srcRoot,
            '@': srcRoot,
            'mock': mockRoot
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // 引入文件时不加后缀的配置
        modules: ['node_modules'] // 配置webpack去哪些目录下寻找第三方模块默认node_modules
    },
    plugins: HTMLArray,
    // webpack4: 代替CommonsChunkPlugin
    optimization: {
        splitChunks:{
          cacheGroups:{
            commons: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vendor'
              },
            }
        }
    }
}

module.exports = config;
