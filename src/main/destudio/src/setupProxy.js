const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 이 경로로 시작하는 모든 요청은 프록시됩니다.
    createProxyMiddleware({
      target: 'http://localhost:8080/api', // Spring 백엔드 서버 주소
      changeOrigin: true
    })
  );
};