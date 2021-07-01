const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware('/api1', {
      target: 'http://api.zhuishushenqi.com',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' }
    }),
  )
}