```vim

<template>
  <div style="padding: 20px">
    <r-file-upload
        upload-url="//jsonplaceholder.typicode.com/posts/"
        with-credentials
        :is-default-success-event="false"
        @on-upload-success="handleUploadFileSuccess"
    ></r-file-upload>
  </div>
</template>
<script>
export default {
  methods: {
    handleUploadFileSuccess(file) {
      this.$Modal.success({
        title: "上传操作成功",
        content: `${file.name} 导入成功！`
      })
    }
  }
}
</script>
```
