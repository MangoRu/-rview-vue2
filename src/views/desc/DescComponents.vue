<template>
  <common-components>
    <router-view style="min-height: 100%"></router-view>
  </common-components>
</template>
<script>
import commonData from "utils/common-data"
import CommonComponents from "views/desc/common/CommonComponents"

export default {
  name: "DescComponents",
  components: { CommonComponents },
  data() {
    return {
      commonData
    }
  },
  created() {
    commonData.header_nav = "components"
  }
}
</script>
<style scoped></style>
