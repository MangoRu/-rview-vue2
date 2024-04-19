<template>
  <!-- 业务特定 通讯记录展开行 -->
  <div class="m-left-10">
    <h4>REQUEST HEADERS</h4>
    <pre class="pre" v-text="expandedRow.headers"></pre>
    <h4>REQUEST</h4>
    <pre class="pre" v-text="expandedRow.requestBody"></pre>
    <h4>RESPONSE</h4>
    <pre class="pre" v-text="expandedRow.responseBody"></pre>
    <div v-if="expandedRow.encryptionRequestBody">
      <h4>加密REQUEST原文</h4>
      <pre class="pre" v-text="expandedRow.encryptionRequestBody"></pre>
    </div>
    <div v-if="expandedRow.encryptionResponseBody">
      <h4>加密RESPONSE原文</h4>
      <pre class="pre" v-text="expandedRow.encryptionResponseBody"></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "RCustomTableHttpLogGm",
  props: {
    expandedRow: Object
  }
}
</script>

<style scoped>
.pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-bottom: 10px;
}
</style>
