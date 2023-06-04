const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 这里的 origin 和 target 分别是前端网站的地址和 WordPress 网站的地址
// * 代表允许所有的跨域，否则只允许白名单
const origin = '*';
// const origin = 'http://127.0.0.1:5173';
const target = 'http://127.0.0.1:8000';

// 添加自定义中间件处理 CORS 问题
app.use((req, res, next) => {
  const method = req.method && req.method.toUpperCase();
  if (method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type');
    res.sendStatus(200);
  } else {
    next();
  }
});

// 使用 http-proxy-middleware 库实现反向代理
const proxyOptions = {
  target: target,
  changeOrigin: true,
  onProxyRes: (proxyRes, req, res) => {
    const headers = proxyRes.headers;
    const allowOrigin = headers['access-control-allow-origin'] || origin;
    headers['access-control-allow-origin'] = allowOrigin;
  }
};
app.use('/', createProxyMiddleware(proxyOptions));

app.listen(3000, () => {
  console.log(`App listening at http://127.0.0.1:3000`);
});