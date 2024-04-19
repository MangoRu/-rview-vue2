```html

<template>
	<r-layout :is-show-back-to-top="false" :is-show-sider="true" style="height: 300px">
		<template #sider>
			<Sider class="base-side-bar scroll-hide" :width="256">
				<r-sider-menu :menu-list="computeMenuList"></r-sider-menu>
			</Sider>
		</template>
		<div>内容展示区</div>
	</r-layout>
</template>
<script>
	export default {
		computed: {
			computeMenuList() {
				return [
					{
						id: 'common-announcement',
						name: '内容管理',
						icon: 'ios-paper',
						children: [
							{id: 'common-announcement/login', name: '文章管理', icon: 'ios-bookmarks', children: []},
							{
								id: 'common-announcement/record-search',
								name: '评论管理',
								icon: 'md-chatbubbles',
								children: []
							}
						]
					},
					{
						id: 'item',
						name: '道具管理',
						icon: 'md-settings',
						children: [{id: 'item/item-config', name: '道具列表', icon: 'md-settings', children: []}]
					},
					{
						id: 'present',
						name: '统计分析',
						icon: 'md-flag',
						children: [
							{id: 'present/add', name: '活跃分析', icon: 'md-flame', children: []},
							{id: 'present/list', name: '时段分析', icon: 'md-flash', children: []},
							{id: 'present/used', name: '用户留存', icon: 'md-contact', children: []}
						]
					}
				]
			}
		}
	}
</script>
```