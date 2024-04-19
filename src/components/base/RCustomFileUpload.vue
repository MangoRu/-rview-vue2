<template>
  <Upload
    :action="uploadUrl"
    :disabled="false"
    :headers="headers"
    :format="format"
    :max-size="maxSize"
    :on-success="handlerUploadSuccess"
    :on-error="handlerUploadError"
    :on-format-error="handleUploadFormatError"
    :on-exceeded-size="handleUploadExceededSize"
    :on-progress="handleUploadProcess"
    :with-credentials="withCredentials"
  >
    <Button
      type="primary"
      ghost
      icon="ios-cloud-upload"
      :disabled="disabled"
      :loading="uploadLoading"
    >
      {{ buttonLabel }}
    </Button>
  </Upload>
</template>

<script>
export default {
  name: "RFileUpload",
  props: {
    uploadUrl: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    format: {
      type: Array,
      default() {
        return []
      }
    },
    maxSize: {
      type: Number,
      default: 3072
    },
    buttonLabel: {
      type: String,
      default: "上传"
    },
    loading: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Object
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    isDefaultSuccessEvent: { type: Boolean, default: true }
  },
  data() {
    return {
      uploadLoading: false
    }
  },
  methods: {
    handlerUploadSuccess(response, file) {
      this.$data.uploadLoading = false
      if (this.$props.isDefaultSuccessEvent) {
        this.$Modal.success({
          title: "操作成功",
          content: `${file.name} 导入成功！`
        })
      } else {
        this.$emit("on-upload-success", file)
      }
    },
    handlerUploadError(error, data, file) {
      this.$data.uploadLoading = false
      // 导入失败操作 此处仅提示
      this.$Modal.error({
        title: `文件导入失败 ${error.status}`,
        content: `请检查${file.name} 文件配置，<br/><strong style="letter-spacing: 1px">${data}</strong>`
      })
    },
    handleUploadFormatError() {
      this.$Modal.error({
        title: "文件类型不合法",
        content: `仅支持${this.$props.format}类型`
      })
    },
    handleUploadExceededSize() {
      this.$Modal.warning({
        title: "文件大小超限",
        content: `文件大小最大为${this.$props.maxSize}KB`
      })
    },
    handleUploadProcess() {
      this.$data.uploadLoading = true
    }
  },
  created() {
    this.$data.uploadLoading = this.$props.loading
  }
}
</script>

<style scoped></style>
