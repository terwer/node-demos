<script setup lang="ts">
import { AppInstance } from "../AppInstance.ts"
import { Base64 } from "js-base64"
import { CommonFetchClient } from "../../../../zhi-framework/zhi/libs/zhi-fetch-middleware"

const appInstance = AppInstance.instance()

const requestUrl = "http://127.0.0.1:9564/kms16_release"
const endpointUrl = "/api/kms-multidoc/kmsMultidocKnowledgeRestService/queryDoc"

// fetchOptions
const kmsUsername = "terwer"
const kmsPassword = "123456"
const basicToken = Base64.toBase64(`${kmsUsername}:${kmsPassword}`)
const bodyJson = {
  fdId: "186a05544e8981e71d8e28c408e9ab42",
}
const fetchOptions = {
  body: JSON.stringify(bodyJson),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${basicToken}`,
  },
  method: "POST",
}

const testGetUsersBlogs = async () => {
  try {
    const commonFetchClient = new CommonFetchClient(appInstance, requestUrl)
    const result = await commonFetchClient.fetchCall(endpointUrl, fetchOptions)
    console.log("test chrome fetchCall result =>", result)
  } catch (e) {
    console.error("test chrome fetchCall occurred an error ", e)
  }
}
</script>

<template>
  <div id="chrome-fetch">
    <h1>ChromeFetchTest</h1>
    <div>准备工作：</div>
    <div>1 本地启动 https://github.com/terwer/node-metaweblog-api-adaptor 项目，可直接 pnpm dev ，默认端口3000</div>
    <div>2 启动完成后，可用的代理连接是：http://127.0.0.1:3000/api/middleware</div>
    <button @click="testGetUsersBlogs">测试chromeFetch</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
}
#chrome-fetch {
  text-align: left;
}
</style>
