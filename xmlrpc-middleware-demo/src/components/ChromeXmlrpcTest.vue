<script setup lang="ts">
import { AppInstance } from "../AppInstance.ts"
import { CommonXmlrpcClient } from "zhi-xmlrpc-middleware"

const testGetUsersBlogs = async () => {
  const appInstance = AppInstance.instance()
  const commonXmlrpcClient = new CommonXmlrpcClient(appInstance, "http://127.0.0.1:8000/xmlrpc.php")

  const result = await commonXmlrpcClient.methodCall(
    "metaWeblog.getUsersBlogs",
    ["", "terwer", "123456"],
    "http://127.0.0.1:3000/api/middleware"
  )
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
