```vim
<template>
  <div style="padding: 20px">
    <h3>基础示例</h3>
    <r-items-show
        :items-list="itemsListBasic"
        is-border-top-show
        is-card-width-auto
    ></r-items-show>
    <h3 class="m-top-10">进阶示例1</h3>
    <template v-if="itemListData.length > 0">
      <span>选择的礼包码：</span>
      <Tag v-for="(item, index) in itemListData" :key="index">{{ item.itemShow }}</Tag>
    </template>
    <r-items-show
        class="m-top-15"
        tab="type1"
        :tab-list="tabList"
        :is-card-type="false"
        :items-list="itemsList"
        @on-items-data="handleWatchItemsData"
    ></r-items-show>
    <h3 class="m-top-20">进阶示例2</h3>
    <span v-if="itemListDataCount.length > 0">选择的礼包码：</span>
    <Tag v-for="(item, index) in itemListDataCount" :key="`${index}-${item}`" color="blue">
      {{ item.itemShow }} x{{ item.count }}
    </Tag>
    <r-items-show
        class="m-top-15"
        tab="type1"
        :tab-list="tabList"
        :items-list="itemsList2"
        @on-items-data="handleWatchItemsDataCount"
    ></r-items-show>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsListBasic: [
        {itemShow: '北京'},
        {itemShow: '上海'},
        {itemShow: '天津'},
        {itemShow: '深圳'},
        {itemShow: '广州'}
      ],
      itemsList: [
        {typeId: '1', itemShow: '礼包码1-1'},
        {typeId: '1', itemShow: '礼包码1-2'},
        {typeId: '2', itemShow: '礼包码2-1'},
        {typeId: '2', itemShow: '礼包码2-2'},
        {typeId: '2', itemShow: '礼包码2-3'},
        {typeId: '2', itemShow: '礼包码2-4'},
        {typeId: '2', itemShow: '礼包码2-5'},
        {typeId: '3', itemShow: '礼包码3-1'}
      ],
      itemsList2: [
        {typeId: '1', itemShow: '礼包码1-1', checked: false, count: 1},
        {typeId: '1', itemShow: '礼包码1-2', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-1', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-2', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-3', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-4', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-5', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-6', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-7', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-8', checked: false, count: 1},
        {typeId: '2', itemShow: '礼包码2-9', checked: false, count: 1},
        {typeId: '3', itemShow: '礼包码3-1', checked: false, count: 1}
      ],
      tabList: [
        {id: '1', label: '礼包码类型1', value: 'type1'},
        {id: '2', label: '礼包码类型2', value: 'type2'},
        {id: '3', label: '礼包码类型3', value: 'type3'}
      ],
      itemListData: [],
      itemListDataCount: []
    }
  },
  methods: {
    handleWatchItemsDataCount(itemsListData) {
      // 所有列表项监听数据
      this.$data.itemListDataCount = itemsListData.filter((_) => {
        return _.checked
      })
    },
    handleWatchItemsData(itemsListData) {
      // 所有列表项监听数据
      this.$data.itemListData = itemsListData.filter((_) => {
        return _.checked
      })
    }
  }
}
</script>

```
