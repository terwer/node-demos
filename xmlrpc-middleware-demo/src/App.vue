<script setup lang="ts">
import MiddlewareXmlrpcTest from "./components/MiddlewareXmlrpcTest.vue"
import ChromeXmlrpcTest from "./components/ChromeXmlrpcTest.vue"
import ChromeMiddlewareXmlrpcTest from "./components/ChromeMiddlewareXmlrpcTest.vue"
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <middleware-xmlrpc-test />
  <hr />
  <chrome-middleware-xmlrpc-test />
  <hr />
  <chrome-xmlrpc-test />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
