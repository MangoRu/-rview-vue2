<template>
  <div>
    <common-desc-components-content
      title="SearchPanelGm GM搜索表单"
      name="r-search-panel-gm"
      desc="封装的GM搜索表单，用于用户页面搜索的特定条件"
      :api-table-list="computeApiTableList"
    >
      <div id="basic-search-panel-gm">
        <custom-content-code-examples code-title="基础用法" code-desc="">
          <template #codeExample>
            <r-search-panel-gm
              :input-list="inputList1"
              :select-list="selectList1"
              @on-search="handleSearch"
            ></r-search-panel-gm>
          </template>
          <search-panel-gm-md></search-panel-gm-md>
        </custom-content-code-examples>
      </div>
    </common-desc-components-content>
  </div>
</template>

<script>
import CommonDescComponentsContent from "views/desc/common/CommonDescComponentsContent"
import CustomContentCodeExamples from "components/rview/CustomContentCodeExamples"
import SearchPanelGmMd from "assets/md/r-search-panel-gm.md"

export default {
  name: "DescComponentsSearchPanelGm",
  components: { CommonDescComponentsContent, CustomContentCodeExamples, SearchPanelGmMd },
  data() {
    return {
      inputList1: [],
      selectList1: []
    }
  },
  computed: {
    searchPanelGmSlotDataCompute() {
      return [
        { name: "left", desc: "自定义搜索条件插槽" },
        { name: "无", desc: "自定义其他条件的插槽" }
      ]
    },
    searchPanelGmEventsDataCompute() {
      return [{ name: "on-search", desc: "点击搜索事件的回调", returnValue: "-" }]
    },
    searchPanelGmPropsDataCompute() {
      return [
        { attr: "selectList", desc: "选择下拉框列表集", type: "Array", defaultValue: "[ ]" },
        { attr: "inputList", desc: "输入框列表集", type: "Array", defaultValue: "[ ]" },
        {
          attr: "isDefault",
          desc: "是否为默认GM查询方式(即是否使用r-form-custom方式)",
          type: "Boolean",
          defaultValue: "true"
        },
        { attr: "isSearch", desc: "是否显示搜索按钮", type: "Boolean", defaultValue: "true" }
      ]
    },
    computeApiTableList() {
      return [
        { title: "SearchPanelGm", type: "props", data: this.searchPanelGmPropsDataCompute },
        { title: "SearchPanelGm", type: "events", data: this.searchPanelGmEventsDataCompute },
        { title: "SearchPanelGm", type: "slot", data: this.searchPanelGmSlotDataCompute }
      ]
    }
  },
  methods: {
    handleSearch() {
      this.$Message.info("开始查询")
    },
    initParamList() {
      let mainServerObj = {
        label: "主服",
        value: "main1",
        options: [
          { value: "main1", label: "主服1(main1)" },
          { value: "main2", label: "主服2(main2)" }
        ],
        width: 170
      }
      if (this.$data.selectList1.length === 0) {
        this.$data.selectList1 = []
        let giftCodeStateObj = {
          label: "查询条件",
          value: "code",
          options: [
            { value: "code", label: "礼包码" },
            { value: "batch", label: "批次编号" }
          ],
          width: 135
        }
        this.$data.selectList1.push(mainServerObj, giftCodeStateObj)
      }
      if (this.$data.inputList1.length === 0) {
        this.$data.inputList1 = []
        let selectParam = {
          label: "查询参数",
          value: "",
          placeholder: "请输入查询参数（礼包码或批次编号）",
          width: 252
        }
        this.$data.inputList1.push(selectParam)
      }
    }
  },
  created() {
    this.initParamList()
  }
}
</script>

<style scoped>
/deep/ .ivu-divider-horizontal {
  z-index: 0 !important;
}
</style>
