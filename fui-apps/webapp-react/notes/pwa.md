# pwa

## 1. 引入workbox-webpack-plugin,webpack-manifest-plugin
```
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: publicPath,
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.main.filter(
            fileName => !fileName.endsWith('.map')
          );

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        },
      }),

    // WorkboxWebpackPlugin.GenerateSW({})可以直接生成service-worker文件
    new WorkboxWebpackPlugin.GenerateSW({
        cacheId: 'fui-pwa', // 设置前缀
        skipWaiting: true,  // 强制等待中的service worker被激活
        clientsClaim: true, // Service Worker被激活后使其立即获得页面控制权
        swDest: 'service-worker.js', // 输出Service Worker文件
        globPatterns: ['**/*.{html,js,css,png.jpg}'], // 匹配的文件
        globIgnores: ['service-wroker.js'], // 忽略的文件
        exclude: [/\.map$/, /asset-manifest\.json$/],
        importWorkboxFrom: 'cdn', // local cdn disabled
        navigateFallback: publicUrl + '/index.html',
        navigateFallbackBlacklist: [
         // Exclude URLs starting with /_, as they're likely an API call
         new RegExp('^/_'),
         // Exclude any URLs whose last part seems to be a file extension
         // as they're likely a resource and not a SPA route.
         // URLs containing a "?" character won't be blacklisted as they're likely
         // a route with query params (e.g. auth callbacks).
         new RegExp('/[^/?]+\\.[^/]+$'),
       ],
    }),
```
