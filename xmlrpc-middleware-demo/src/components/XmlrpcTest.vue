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
  <div>
    <button @click="testGetUsersBlogs">测试</button>
  </div>
</template>

<style scoped></style>
