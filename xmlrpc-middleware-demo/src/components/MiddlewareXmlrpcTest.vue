<script setup lang="ts">
import { AppInstance } from "../AppInstance.ts"
import { fetchMiddleware } from "../test/middlewareXmlrpc.ts"

const testGetUsersBlogs = async () => {
  const appInstance = AppInstance.instance()

  const result = await fetchMiddleware(
    appInstance,
    "http://127.0.0.1:8000/xmlrpc.php",
    "metaWeblog.getUsersBlogs",
    ["", "terwer", "123456"],
    "http://127.0.0.1:3000/api/middleware"
  )
  console.log("fetchMiddleware result=>", result)
}
</script>

<template>
  <div id="middleware-xmlrpc">
    <h1>MiddlewareXmlrpcTest</h1>
    <div>准备工作：</div>
    <div>1 本地启动 https://github.com/terwer/node-metaweblog-api-adaptor 项目，可直接 pnpm dev ，默认端口3000</div>
    <div>2 启动完成后，可用的代理连接是：http://127.0.0.1:3000/api/middleware</div>
    <button @click="testGetUsersBlogs">测试middlewareXmlrpc</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
}
#middleware-xmlrpc {
  text-align: left;
}
</style>
