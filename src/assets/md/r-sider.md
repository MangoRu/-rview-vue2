```vim

<template>
  <div style="height: 100%; overflow: hidden">
    <div style="display: flex">
      <Card class="m-right-30" title="含子菜单侧边栏">
        <Sider
            class="base-side-bar scroll-hide"
            collapsible
            :collapsed-width="72"
            :width="siderWidth"
            hide-trigger
            v-model="collapsed"
        >
          <r-sider-menu
              :menu-list="computeMenuChildList"
              :is-collapsed="collapsed"
              :open-names="openNames"
              :active-name="activeName"
              @on-select-menu="handleSelectMenu"
          ></r-sider-menu>
        </Sider>
      </Card>
      <Card title="无子菜单侧边栏">
        <Sider
            class="base-side-bar scroll-hide"
            collapsible
            :collapsed-width="72"
            :width="siderWidth"
            hide-trigger
            v-model="collapsed"
        >
          <r-sider-menu
              :is-collapsed="collapsed"
              :menu-list="computeMenuChildNullList"
              active-name="common-announcement"
          ></r-sider-menu>
        </Sider>
      </Card>
    </div>
    <RadioGroup v-model="menuCollapsed" class="m-top-10 m-left-5">
      <Radio :label="0">菜单展开</Radio>
      <Radio :label="1">菜单收缩</Radio>
    </RadioGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      menuCollapsed: 0,
      siderWidth: 256,
      openNames: ["item"],
      activeName: "item/item-config"
    }
  },
  computed: {
    computeMenuChildList() {
      return [
        {
          id: 'common-announcement',
          name: '公告管理',
          icon: 'md-albums',
          children: [
            {id: 'common-announcement/login', name: '登录公告', children: []},
            {
              id: 'common-announcement/record-search',
              name: '同步记录',
              children: []
            }
          ]
        },
        {
          id: 'item',
          name: '道具管理',
          icon: 'logo-apple',
          children: [{id: 'item/item-config', name: '道具列表', children: []}]
        },
        {
          id: 'present',
          name: '礼包码管理',
          icon: 'md-at',
          children: [
            {id: 'present/add', name: '新增礼包码', children: []},
            {id: 'present/list', name: '礼包码列表', children: []},
            {id: 'present/used', name: '使用情况查询', children: []}
          ]
        }
      ]
    },
    computeMenuChildNullList() {
      return [
        {
          id: 'common-announcement',
          name: '公告管理',
          icon: 'md-albums'
        },
        {
          id: 'item',
          name: '道具管理',
          icon: 'logo-apple'
        },
        {
          id: 'present',
          name: '礼包码管理',
          icon: 'md-at'
        }
      ]
    }
  },
  watch: {
    menuCollapsed: {
      handler(val) {
        this.$data.collapsed = val !== 0
      },
      deep: true
    }
  },
  methods: {
    handleSelectMenu(menu) {
      this.$data.activeName = menu
      let menuChildList = JSON.parse(JSON.stringify(this.computeMenuChildList))
      let openMenu = []
      menuChildList.map((_) => {
        _.children.filter((child) => {
          if (child.id === menu) {
            openMenu.push(_.id)
          }
        })
      })
      this.$data.openNames = openMenu
    }
  }
}
</script>
```
