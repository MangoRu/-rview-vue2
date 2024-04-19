<template>
  <div>
    <div v-if="type === 'props'">
      <h3 class="m-top-10">{{ title }} props</h3>
      <Table border :columns="propsColumns" :data="data" size="small"></Table>
    </div>
    <div v-else-if="type === 'events'">
      <h3 class="m-top-10">{{ title }} events</h3>
      <Table border :columns="eventsColumns" :data="data" size="small"></Table>
    </div>
    <div v-else-if="type === 'slot'">
      <h3 class="m-top-10">{{ title }} slot</h3>
      <Table border :columns="slotColumns" :data="data" size="small"></Table>
    </div>
  </div>
</template>

<script>
const propsColumns = [
  {
    title: "属性",
    key: "attr",
    minWidth: 150
  },
  {
    title: "说明",
    key: "desc",
    minWidth: 600
  },
  {
    title: "类型",
    key: "type",
    minWidth: 160
  },
  {
    title: "默认值",
    key: "defaultValue",
    minWidth: 200
  }
]
const eventsColumns = [
  { title: "事件名", key: "name", minWidth: 150 },
  { title: "说明", key: "desc", minWidth: 600 },
  { title: "返回值", key: "returnValue", minWidth: 100 }
]
const slotColumns = [
  { title: "名称", key: "name" },
  { title: "说明", key: "desc" }
]
export default {
  name: "CustomContentApiTable",
  props: {
    title: { type: String, default: "" },
    // type: 三种类型 props events slot
    type: { type: String, default: "props" },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      propsColumns,
      eventsColumns,
      slotColumns
    }
  }
}
</script>

<style scoped></style>
