<template>
	<r-header>
		<template #headerTitle>
			<div class="r-header">
				<div class="search">
					<r-search-remote
							ref="searchRemoteRef"
							placeholder="搜索组件..."
							:is-show-icon="true"
							:width="280"
							loading-text="组件搜索中..."
							:selected="searchInfo.selected"
							:is-search="searchInfo.isSearch"
							:option-list="searchInfo.optionList"
							:search-remote="searchRemote"
							:is-clear="true"
							@on-selected-remote="handleSelectedComponent"
					></r-search-remote>
				</div>
				<div class="menu">
					<Menu
							mode="horizontal"
							theme="light"
							:active-name="commonData.header_nav"
							@on-select="handleSelectHeaderNav"
					>
						<MenuItem name="docs">
							<Icon type="ios-paper"/>
							文档
						</MenuItem>
						<MenuItem name="components">
							<Icon type="ios-cloud"/>
							组件库
						</MenuItem>
					</Menu>
				</div>
			</div>
		</template>
		<template #headerUser>
			<div class="custom-user">
				<a href="https://www.iviewui.com/components/color" target="_blank">
					<Icon type="ios-bookmark"/>
					友链：iView 文档库
				</a>
			</div>
		</template>
	</r-header>
</template>
<script>
	import commonData from 'utils/common-data'

	export default {
		name: 'TheRViewHeader',
		data() {
			return {
				commonData,
				searchInfo: {
					selected: '',
					isSearch: false,
					optionList: null
				}
			}
		},
		methods: {
			handleSelectedComponent(option) {
				if (option) {
					this.$router.push('/rview-components/' + option)
				}
				this.$data.searchInfo.selected = null
			},
			searchRemote() {
				// FIXME 注意: JSON数据修改后重启生效
				const componentsJSON = require('@/static/json/components.json')
				this.$data.searchInfo.optionList = JSON.parse(JSON.stringify(componentsJSON)).map((_) => {
					return {
						label: _['label'],
						value: _['value']
					}
				})
			},
			handleSelectHeaderNav(name) {
				commonData.header_nav = name
				this.$router.push('/rview-' + name)
			}
		}
	}
</script>
<style scoped lang="scss">
	@media (min-width: 1068px) {
		.r-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 35% 0 10%;

			.menu {
				min-width: 240px;
			}
		}
	}

	@media (max-width: 1068px) {
		.r-header {
			display: flex;
			justify-content: center;

			.search {
				display: none;
			}

			.menu {
				min-width: 240px;
			}
		}
	}

	@media (max-width: 768px) {
		.r-header {
			display: none;
		}
	}


	/deep/ .ivu-select-selection {
		border: 0;
	}

	/deep/ .ivu-select-arrow {
		color: #fff;
	}

	/deep/ .ivu-select-visible .ivu-select-selection {
		box-shadow: none;
	}

	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item {
		margin: 0 10px;
	}

	.ivu-menu-horizontal.ivu-menu-light:after {
		background: transparent !important;
	}

	.custom-user {
		display: flex;
		width: 220px;
		align-items: center;
		justify-content: flex-end;
	}
</style>
