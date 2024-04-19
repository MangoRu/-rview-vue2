```vue

<template>
  <div style="padding: 20px">
    <div id="basic-table">
      <Button @click="searchItemList" type="primary" ghost>查询表格数据</Button>
      <Button @click="itemList = []" type="warning" ghost class="m-left-20">
        表格空数据
      </Button>
      <r-panel
          class="m-top-15"
          full-height
          :is-column-direction="true"
          :style="{ justifyContent: itemList.length > 0 ? '' : 'center' }"
          style="width: 100%; height: 660px"
      >
        <r-table-auto
            loading-text="列表查询中..."
            :table-data-loading="itemListLoading"
            :columns="itemColumns"
            :table-data="itemList"
            :is-show-action="false"
        ></r-table-auto>
      </r-panel>
    </div>
  </div>
</template>

<script>
const itemColumns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]
export default {
  data() {
    return {
      itemColumns,
      itemList: [],
      itemListLoading: false
    }
  },
  methods: {
    searchItemList() {
      this.$data.itemList = []
      this.$data.itemListLoading = true
      setTimeout(() => {
        const data = [
          {name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03'},
          {name: 'Jim Green', age: 24, address: 'London No. 1 Lake Park', date: '2016-10-01'},
          {name: 'Joe Black', age: 30, address: 'Sydney No. 1 Lake Park', date: '2016-10-02'},
          {name: 'Jon Snow', age: 26, address: 'Ottawa No. 2 Lake Park', date: '2016-10-04'},
          {name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03'},
          {name: 'Jim Green', age: 24, address: 'London No. 1 Lake Park', date: '2016-10-01'},
          {name: 'Joe Black', age: 30, address: 'Sydney No. 1 Lake Park', date: '2016-10-02'},
          {name: 'Jon Snow', age: 26, address: 'Ottawa No. 2 Lake Park', date: '2016-10-04'}
        ]
        if (data.length === 0) {
          this.$Message.info(`列表为空！`)
        } else if (data.length > 0) {
          this.$data.itemList = data
        }
        this.$data.itemListLoading = false
      }, 1000)
    }
  },
  created() {
    this.searchItemList()
  }
}
</script>
```
