<script setup lang="ts">
import { ref } from "vue";
import { SimpleXmlRpcClient } from "simple-xmlrpc"
import { Buffer } from "node:buffer"

const selectedFile = ref<Blob | null>(null);

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length) {
    selectedFile.value = input.files[0];
  }
};

// 将input file转换成base64字符串
// const fileToBase64 = (file: any) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader?.result as any
//       const base64 = result?.replace(/^data:(.*;)?base64,/, '');
//       resolve(base64);
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// };

const fileToBuffer = async (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // 将 ArrayBuffer 转换成 Buffer 对象
      const buffer = Buffer.from(e.target.result);
      resolve(buffer);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

const doUploadImage = async () => {
  const file = selectedFile.value as any
  if (!file) {
    alert("请选择图片");
    return;
  }

  try {
    // 将input file转换成base64字符串
    // const base64 = await fileToBase64(file);

    const buffer = await fileToBuffer(file);
    console.log(buffer);

    // 设置文件的元数据
    const metadata = {
      name: file.name,
      type: file.type,
      bits: buffer,
      overwrite: true
    };
    const xmlrpcApiUrl = "http://127.0.0.1:3000/xmlrpc.php"
    const client = new SimpleXmlRpcClient(xmlrpcApiUrl)
    const result = await client.methodCall("metaWeblog.newMediaObject", [
      "",
      "terwer",
      "123456",
      metadata as any,
    ]);

    console.log("success=>", result);
    alert("上传图片成功");
  } catch (error: any) {
    console.error(error);
    alert("上传图片失败：" + error.message);
  }
}




</script>

<template>
  <div>
    <h1>WordPress</h1>
    <input type="file" @change="handleFileSelect" />
    <button @click="doUploadImage">上传图片</button>
  </div>
</template>
