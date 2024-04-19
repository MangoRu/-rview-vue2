<template>
  <div>
    <label>
      <Select
        v-model="selectedProp"
        :style="{ width: width + 'px' }"
        :size="size"
        :clearable="true"
        ref="searchRemoteRef"
        :filterable="true"
        :loading="isSearch"
        :loading-text="loadingText"
        :remote-method="searchRemote"
        :placeholder="placeholder"
        @on-change="changeSelected"
        :transfer="true"
        :prefix="isShowIcon ? 'ios-search' : ''"
      >
        <Option
          v-for="(item, index) in optionList"
          :key="index"
          :value="item.value"
          :label="item.label"
        >
          {{ item.label }}
        </Option>
      </Select>
    </label>
  </div>
</template>
<script>
export default {
  name: "RSearchRemote",
  props: {
    selected: { type: String },
    placeholder: { type: String },
    isSearch: { type: Boolean },
    searchRemote: { type: Function },
    width: { type: Number },
    size: { type: String },
    loadingText: { type: String },
    optionList: { type: Array },
    isShowIcon: { type: Boolean, default: false },
    isClear: { type: Boolean, default: false }
  },
  data() {
    return {
      selectedProp: null
    }
  },
  methods: {
    changeSelected(option) {
      this.$emit("on-selected-remote", option)
    }
  },
  watch: {
    selected: {
      handler(val) {
        this.$data.selectedProp = val
      },
      immediate: true
    }
  },
  created() {
    this.$data.selectedProp = this.$props.selected
  },
  updated() {
    if (this.$props.isClear) {
      this.$data.selectedProp = this.$props.selected
    }
  }
}
</script>
<style scoped></style>
