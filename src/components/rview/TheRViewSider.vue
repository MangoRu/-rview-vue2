<template>
	<div style="margin: 20px 0; height: 100%">
		<div v-if="commonData.header_nav === 'docs'">
			<r-sider-menu
					:is-collapsed="siderWidth !== 256"
					:menu-list="computeDocsMenuList"
					:active-name="computeActiveName"
			></r-sider-menu>
		</div>
		<div v-else-if="commonData.header_nav === 'components'">
			<p class="navigation-text" v-if="siderWidth === 256">组件</p>
			<Menu
					class="m-top-10"
					:width="siderWidth + 'px'"
					theme="light"
					:active-name="computeActiveName"
					@on-select="handleSelectMenuItem"
			>
				<template v-if="siderWidth === 256">
					<MenuGroup
							v-for="(item, index) in computeComponentsMenuList"
							:key="index"
							:title="item.title"
					>
						<MenuItem
								v-for="menuItem in item.menuItemList"
								:key="menuItem.name"
								:name="menuItem.name"
								:class="computeActiveName === item.name ? '' : 'menu-item-border-right'"
						>
							<Icon :type="menuItem.icon"/>
							{{ menuItem.text }}
						</MenuItem>
					</MenuGroup>
				</template>
				<template v-else>
					<Tooltip
							:content="item.text"
							placement="right"
							:transfer="true"
							v-for="item in componentsMenuListCollapsed"
							:key="item.text"
					>
						<MenuItem :name="item.name" style="width: 100%"
						          :class="computeActiveName === item.name ? '' : 'menu-item-border-right'">
							<Icon :type="item.icon || 'ios-menu'"></Icon>
						</MenuItem>
					</Tooltip>
				</template>
			</Menu>
		</div>
	</div>
</template>

<script>
	import commonData from 'utils/common-data'
	import bus from 'utils/bus'
	import componentsJSON from '@/static/json/components.json';

	export default {
		name: 'TheRViewSider',
		props: {
			siderWidth: {
				type: Number,
				default: 256
			}
		},
		data() {
			return {
				commonData
			}
		},
		computed: {
			computeActiveName() {
				return this.$route.path.replace('/', '')
			},
			computeDocsMenuList() {
				// 注意 id设置最好与路径相同，以关联菜单选中项
				return [{
					id: '',
					name: `RView Design`,
					icon: 'md-cloud',
					slot: {color: '#1d1e23', textColor: '#f6ca9d', name: 'UI'}
				}]
			},
			computeComponentsMenuList() {
				let componentsList = this.componentsMenuListCollapsed
				let commonComponents = this.handleComponents('公有', componentsList)
				let theComponents = this.handleComponents('定制', componentsList)
				let customComponents = this.handleComponents('自定义', componentsList)
				return [...commonComponents, ...theComponents, ...customComponents]
			},
			componentsMenuListCollapsed() {
				const componentsJSON = require('@/static/json/components.json')
				let routePath = 'rview-components/'
				return JSON.parse(JSON.stringify(componentsJSON)).map((_) => {
					return {
						title: _['type'] === 'common' ? '公有' : _['type'] === 'the' ? '定制' : '自定义',
						name: routePath + _['value'],
						icon: _['icon'],
						text: _['label']
					}
				})
			}
		},
		methods: {
			handleComponents(type, componentsList) {
				let data = []
				let commonComponents = componentsList
						.filter((_) => {
							return _['title'] === type
						})
						.map((component) => {
							if (!component.icon) {
								delete component.icon
							}
							delete component.title
							return component
						})
				data.push({
					title: type,
					menuItemList: commonComponents
				})
				return data
			},
			handleSelectMenuItem(menu) {
				// 此处menu指代路径
				this.$router.push({path: '/' + menu})
				this.$nextTick(() => {
					bus.$emit('on-init-scroll')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/common/menu.scss";

	.navigation-text {
		font-size: 16px;
		padding-left: 15px;
		margin-top: 10px;
	}

	/deep/ .ivu-menu-vertical .ivu-menu-item-group-title {
		border-right: 1px solid rgba(234, 234, 234, 1);
	}

	.ivu-menu-vertical .ivu-menu-item {
		padding: 16px 24px;
	}
</style>
