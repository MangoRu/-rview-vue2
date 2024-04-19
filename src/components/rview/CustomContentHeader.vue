<template>
  <div>
    <h1>
      {{ title }}
      <Tag color="green" class="tag-text">{{ name }}</Tag>
    </h1>
    <p class="m-top-15">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "CustomContentHeader",
  props: {
    title: { type: String, default: "标题" },
    name: { type: String, default: "组件引用名" },
    desc: { type: String, default: "组件说明" }
  }
}
</script>

<style scoped>
.tag-text {
  margin-left: 5px;
}
</style>
