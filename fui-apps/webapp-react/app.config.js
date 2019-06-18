// const proxyTarget = 'http://127.0.0.1:8000' // blog-node
const proxyTarget = 'http://127.0.0.1:8010' // blog-express

module.exports = {
  proxy: {
    '/blog_h5/': {
      target: proxyTarget,
      changeOrigin: true,
      pathRewrite: {
          '/blog_h5/': '/'
      },
    },
  }
}
