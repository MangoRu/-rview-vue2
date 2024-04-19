<template>
  <Footer class="base-footer" :style="{ backgroundColor: backgroundColor }">
    <slot> Copyright &copy; 2023-{{ computeYear }} RView</slot>
  </Footer>
</template>
<script>
export default {
  name: 'RFooter',
  props: {
    backgroundColor: {type: String, default: 'rgba(230, 236, 241,1)'}
  },
  computed: {
    computeYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/common/layout";
</style>
