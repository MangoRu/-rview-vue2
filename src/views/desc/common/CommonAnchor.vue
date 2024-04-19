<template>
  <Affix :offset-top="100" class="anchor" v-if="anchorLinkList.length > 0">
    <Card
      class="anchor"
      :style="{ backgroundColor: anchorCollapsed ? 'transparent' : '#f2f7fa', border: 'none' }"
    >
      <Button
        :class="!anchorCollapsed ? 'm-bottom-10' : ''"
        type="success"
        size="small"
        @click="anchorCollapsed = !anchorCollapsed"
      >
        <Icon type="md-arrow-back" v-if="anchorCollapsed" />
        <Icon type="md-arrow-forward" v-else />
        锚点
      </Button>
      <Anchor show-ink @on-select="handleAnchorSelect" v-if="!anchorCollapsed">
        <AnchorLink
          v-for="anchor in anchorLinkList"
          :key="anchor.id"
          :title="anchor.title"
          :href="anchor.id"
        />
      </Anchor>
    </Card>
  </Affix>
</template>

<script>
export default {
  name: "CommonAnchor",
  props: {
    anchorLinkList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      anchorCollapsed: true
    }
  },
  methods: {
    handleAnchorSelect(href) {
      // TODO 页面刷新锚点有误 滚动锚点联动变化
      // console.log("点击锚点href", href)
      // FIXME 锚点跳转配置 <属性加id,一般给div加>
      const returnEle = document.querySelector(href)
      if (returnEle) {
        returnEle.scrollIntoView(true)
      }
    }
  }
}
</script>

<style scoped></style>
