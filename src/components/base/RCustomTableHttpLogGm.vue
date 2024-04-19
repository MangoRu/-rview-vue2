<template>
  <!-- 业务特定 通讯记录 -->
  <div class="m-bottom-10">
    <!--  不良人3 GM 下发记录  -->
    <div v-if="isSendLog && sendLogData.length > 0" style="margin-bottom: 10px">
      <Tag v-for="(item, key) in sendLogData" :key="key" type="dot" color="primary">
        大区：{{ item.serverName }}({{ item.serverId }})：{{ item.executeResult }};
        <!-- serverName  serverId  executeResult-->
      </Tag>
    </div>
    <Table
      border
      :columns="httpLogColumns"
      :data="httpLogData"
      v-if="isHttpLog && httpLogData.length > 0"
    >
      <template slot-scope="{ row }" slot="url">
        <r-clipboard :copy-content="row.url"></r-clipboard>
      </template>
      <template slot-scope="{ row }" slot="responseStatus">
        <Tag color="green" v-if="row.responseStatus === 200">{{ row.responseStatus }}</Tag>
        <Tag v-else>{{ row.responseStatus }}</Tag>
      </template>
    </Table>
  </div>
</template>
<script>
import Clipboard from "clipboard"
import GmCustomTableHttpLogExpand from "./RCustomTableHttpLogExpandGm"

const httpLogColumns = [
  {
    type: "expand",
    width: 40,
    render: (h, params) => {
      return h(GmCustomTableHttpLogExpand, {
        props: {
          expandedRow: params.row
        }
      })
    }
  },
  {
    title: "URL",
    key: "url",
    slot: "url",
    minWidth: 340
  },
  {
    title: "方法",
    key: "method",
    minWidth: 80
  },
  {
    title: "状态码",
    key: "responseStatus",
    slot: "responseStatus",
    minWidth: 80
  },
  {
    title: "发送时间",
    key: "sendDatetimeStr",
    minWidth: 170
  },
  {
    title: "接收时间",
    minWidth: 170,
    key: "receiveDatetimeStr"
  }
]
export default {
  name: "RGmTableHttpLog",
  props: {
    httpLogData: {
      type: Array,
      required: true
    },
    isSendLog: { type: Boolean, default: false },
    isHttpLog: { type: Boolean, default: true },
    sendLogData: { type: Array }
  },
  data() {
    return {
      httpLogColumns
    }
  },
  methods: {
    handleCopyUrl() {
      let clipboard = new Clipboard(".copy-btn")
      clipboard.on("success", () => {
        this.$Message.success("复制成功,已复制到剪切版")
        clipboard.destroy()
      })
      clipboard.on("error", () => {
        this.$Message.success("当前浏览器不支持自动复制,复制失败")
        clipboard.destroy()
      })
    }
  }
}
</script>
<style scoped></style>
