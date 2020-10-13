const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use("/api", createProxyMiddleware({
    target: 'http://39.104.79.47:8001/', //设置调用的接口域名和端口号
    changeOrigin: true, //允许跨域
    ws: false,
    pathRewrite: {
      '^/api': ''
    }
  }))
}
