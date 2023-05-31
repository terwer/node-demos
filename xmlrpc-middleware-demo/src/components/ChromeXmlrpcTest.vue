<script setup lang="ts">
import { fetchChrome } from "../test/chromeXmlrpc.ts"
import { AppInstance } from "../AppInstance.ts"

const testGetUsersBlogs = async () => {
  const appInstance = AppInstance.instance()

  const result = await fetchChrome(appInstance, "http://127.0.0.1:8000/xmlrpc.php", "metaWeblog.getUsersBlogs", [
    "",
    "terwer",
    "123456",
  ])
  console.log("fetchMiddleware result=>", result)
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
