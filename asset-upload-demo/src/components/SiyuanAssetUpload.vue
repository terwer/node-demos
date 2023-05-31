<script setup lang="ts">
import { ref } from "vue";

const selectedFile = ref<Blob | null>(null);

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length) {
    selectedFile.value = input.files[0];
  }
};

const doUploadImage = async () => {
  if (!selectedFile.value) {
    alert("请选择图片");
    return;
  }

  const formData = new FormData();
  formData.append("file[]", selectedFile.value);
  formData.append("assetsDirPath", "/assets/")

  try {
    const response = await fetch("http://127.0.0.1:6806/api/asset/upload", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("上传图片失败");
    } else {
      const resText = await response.text()
      console.log("success=>", resText)
      alert("上传图片成功");
    }
  } catch (error: any) {
    console.error(error);
    alert("上传图片失败：" + error.message);
  }
};


</script>

<template>
  <div>
    <h1>siyuan-note</h1>
    <input type="file" @change="handleFileSelect" />
    <button @click="doUploadImage">上传图片</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
