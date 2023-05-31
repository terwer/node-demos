<script setup lang="ts">
import { CommonXmlrpcClient } from "zhi-xmlrpc-middleware"
import { AppInstance } from "../AppInstance.ts"

const testGetUsersBlogs = async () => {
  const appInstance = AppInstance.instance()
  const commonXmlrpcClient = new CommonXmlrpcClient(appInstance, "http://127.0.0.1:8000/xmlrpc.php")

  const result = await commonXmlrpcClient.methodCall(
    "metaWeblog.getUsersBlogs",
    ["", "terwer", "123456"],
    "http://127.0.0.1:3000/api/middleware"
  )
  console.log("fetchChromeMiddleware result=>", result)
}
</script>

<template>
  <div id="chrome-middleware-xmlrpc">
    <h1>ChromeMiddlewareXmlrpcTest</h1>
    <div>准备工作：</div>
    <div>1 本地启动 https://github.com/terwer/node-metaweblog-api-adaptor 项目，可直接 pnpm dev ，默认端口3000</div>
    <div>2 启动完成后，可用的代理连接是：http://127.0.0.1:3000/api/middleware</div>
    <button @click="testGetUsersBlogs">测试chromeMiddlewareXmlrpc</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
}
#chrome-middleware-xmlrpc {
  text-align: left;
}
</style>
