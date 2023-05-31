<script setup lang="ts">
import { AppInstance } from "../AppInstance.ts"
import { CommonXmlrpcClient } from "zhi-xmlrpc-middleware"

const testGetUsersBlogs = async () => {
  // 通用用法
  const appInstance = AppInstance.instance()
  const apiUrl = "http://127.0.0.1:8000/xmlrpc.php"
  const commonXmlrpcClient = new CommonXmlrpcClient(appInstance, apiUrl)

  const result = await commonXmlrpcClient.methodCall("metaWeblog.getUsersBlogs", ["", "terwer", "123456"])
  console.log("fetchChrome result=>", result)

  // 第二种用法
  // const appInstance = AppInstance.instance()
  // const apiUrl = "http://127.0.0.1:8000/xmlrpc.php"
  // const reqMethod = "metaWeblog.getUsersBlogs"
  // const reqParams = ["", "terwer", "123456"]
  // const commonXmlrpcClient = new CommonXmlrpcClient(appInstance, apiUrl)
  // const result = await commonXmlrpcClient.customMethodCall(reqMethod, reqParams, async () => {
  //   return await fetchChrome(appInstance, apiUrl, reqMethod, reqParams)
  // })
  // console.log("fetchChrome with custom handler result=>", result)
}
</script>

<template>
  <div id="middleware-xmlrpc">
    <h1>ChromeXmlrpcTest</h1>
    <button @click="testGetUsersBlogs">测试chromeXmlrpc</button>
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
