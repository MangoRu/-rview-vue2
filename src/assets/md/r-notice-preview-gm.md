```vim
<template>
  <div style="padding: 20px">
    <Button @click="previewVisible = true" style="width: 160px" type="primary" ghost>
      测试iframe
    </Button>
    <Button
        @click="previewNoticeVisible = true"
        style="width: 160px"
        type="success"
        ghost
        class="m-left-10"
    >
      登录公告预览
    </Button>
    <r-notice-preview-gm
        :preview-visible="previewVisible"
        preview-url="https://www.csdn.net/"
        @on-close="previewVisible = false"
    >
    </r-notice-preview-gm>
    <r-notice-preview-gm
        preview-title="洛克人登录公告预览示例"
        :preview-visible="previewNoticeVisible"
        preview-url="http://172.16.0.42:8086/preview.html?mainServer=main1&preview=content-0f51ce388ef34e0ba126731c64256007-1646015436000.json"
        @on-close="previewNoticeVisible = false"
    ></r-notice-preview-gm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewVisible: false,
      previewNoticeVisible: false
    }
  }
}
</script>

```
