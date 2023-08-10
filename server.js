const http = require("http");
const httpProxy = require("http-proxy");

// 创建代理服务器实例
const proxy = httpProxy.createProxyServer({});

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 在此处进行必要的请求处理或修改，例如添加自定义标头等
  const target = req.url;
  console.log(`target`, target, req.query, { target });
  // 将请求转发到目标服务器
  proxy.web(req, res, { target });
});

// 监听指定端口
const port = 8889;
server.listen(port, () => {
  console.log(`代理服务器已启动，监听端口 ${port}`);
});
