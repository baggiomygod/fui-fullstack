// const proxyTarget = 'http://127.0.0.1:8000' // blog-node
const proxyTarget = 'http://127.0.0.1:8010' // blog-express
const proxyTargetTravel = 'http://127.0.0.1:8010'
module.exports = {
  proxy: {
    '/blog_h5/': {
      target: proxyTarget,
      changeOrigin: true,
      pathRewrite: {
          '/blog_h5/': '/'
      },
    },
    '/api/travel/': {
      target: proxyTarget,
      changeOrigin: true,
      pathRewrite: {
          '/blog_h5/': '/'
      },
    },
  }
}
