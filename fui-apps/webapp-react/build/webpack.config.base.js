const path = require('path')
const srcRoot = path.resolve(__dirname, '../src')
const srcTravel = path.resolve(__dirname, '../src/pages/travel-pwa')
const mockRoot = path.resolve(__dirname, '../mock')
const nodeModulesRoot = path.resolve(__dirname, '../node_modules')
const pageDir = path.resolve(srcRoot, 'pages') // 相对根目录page的绝对路径
const srcStaticsRoot = path.resolve(srcRoot, 'statics') // 相对根目录page的绝对路径
const HTMLPlugin = require('html-webpack-plugin');

// 分析模块大小
// const BundleAnalyzerPlugin = require('webpack-bundle-anaylzer').BundleAnalyzerPlugin

// pwa
// const ManifestPlugin = require('webpack-manifest-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const IndexJsFile = 'index.tsx'
const { getEntry, getHtmlArray } = require('./utils')
const entryMap = getEntry(pageDir, IndexJsFile)

// 环境变量
const isDev = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'prodution' // 生产环境

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
                    {
                      loader: 'css-loader',
                      options: {
                          modules: true,
                          // localIdentName: '[local]__[name]--[hash:base64:5]'
                          localIdentName: '[local]'
                      }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            // 这里postcss直接使用stylus编译后的tree进行编译，提高效率
                            sourceMap: true,
                            module: true,
                            localIdentName: '[local]',
                            // localIdentName: '[local]__[name]--[hash:base64:5]',
                            plugins: [
                              // require('postcss-import'),
                              // require('precss'),
                              // require('cssnano'),
                              require('postcss-pxtorem')({
                                "rootValue": 37.5, // 750的设计稿
                                    "propList": [
                                      "*"
                                    ]
                              }),
                              require("autoprefixer")({ browsers: ['last 2 versions'] }),
                            ]
                            // publicPath: '/',
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
            'mock': mockRoot,
            '@travel': srcTravel,
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // 引入文件时不加后缀的配置
        modules: ['node_modules'] // 配置webpack去哪些目录下寻找第三方模块默认node_modules
    },
    plugins: [
      ...HTMLArray,
      // 判断是否需要运行这个插件
      // process.env.GENERATE_BUNDLE_ANALYZER === 'true' && new BundleAnalyzerPlugin({
        // openAnalyzer: false,
        // analyzerMode: 'static', // 生成静态分析文件
      // }),

      // new WorkboxWebpackPlugin.GenerateSW({
      //   clientsClaim: true,
      //   exclude: [/\.map$/, /asset-manifest\.json$/],
      //   importWorkboxFrom: 'cdn',
      //   navigateFallback: publicUrl + '/index.html',
      //   navigateFallbackBlacklist: [
      //     // Exclude URLs starting with /_, as they're likely an API call
      //     new RegExp('^/_'),
      //     // Exclude any URLs whose last part seems to be a file extension
      //     // as they're likely a resource and not a SPA route.
      //     // URLs containing a "?" character won't be blacklisted as they're likely
      //     // a route with query params (e.g. auth callbacks).
      //     new RegExp('/[^/?]+\\.[^/]+$'),
      //   ],
      // }),
    ],
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
