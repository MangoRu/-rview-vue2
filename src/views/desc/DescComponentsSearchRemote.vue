<template>
	<div>
		<common-desc-components-content
				title="SearchRemote 远程搜索"
				name="r-search-remote"
				desc="用于远程搜索的组件"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-search-remote">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#search-remote-md')">
					<template #codeExample>
						<div>可搜索用户1：张三</div>
						<div style="display: flex">
							<r-search-remote
									:width="300"
									loading-text="用户搜索中..."
									placeholder="搜索用户"
									:selected="userInfo.userSelected"
									:is-search="userInfo.isSearchUser"
									:option-list="userInfo.optionUserList"
									:search-remote="searchUserRemote"
									@on-selected-remote="handleSelectedUser"
							></r-search-remote>
							<Tag color="cyan" size="large" v-if="userInfo.userSelected" class="m-left-5">
								用户{{ userInfo.userSelected }}已被选中
							</Tag>
						</div>
					</template>
					<search-remote-md id="search-remote-md"></search-remote-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import SearchRemoteMd from 'assets/md/r-search-remote.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsSearchRemote',
		components: {
			CommonDescComponentsContent,
			CustomContentCodeExamples,
			SearchRemoteMd
		},
		data() {
			return {
				userInfo: {
					userSelected: '',
					isSearchUser: false,
					optionUserList: null
				}
			}
		},
		computed: {
			searchRemoteEventsDataCompute() {
				return [
					{
						name: 'on-selected-remote',
						desc: '点击远程搜索项的回调',
						returnValue: '选中项option'
					}
				]
			},
			searchRemotePropsDataCompute() {
				return [
					{
						attr: 'selected',
						desc: '指定选中项目的 value 值',
						type: 'String',
						defaultValue: '-'
					},
					{
						attr: 'placeholder',
						desc: '选择框默认文字',
						type: 'String',
						defaultValue: '-'
					},
					{attr: 'isSearch', desc: '当前是否正在远程搜索', type: 'Boolean', defaultValue: '-'},
					{
						attr: 'searchRemote',
						desc: '远程搜索的方法',
						type: 'Function',
						defaultValue: '-'
					},
					{attr: 'width', desc: '选择框的宽度', type: 'Number', defaultValue: '-'},
					{
						attr: 'size',
						desc: '选择框大小，可选值为large、small、default或者不填',
						type: 'String',
						defaultValue: '-'
					},
					{
						attr: 'loadingText',
						desc: '远程搜索中的文字提示',
						type: 'String',
						defaultValue: '-'
					},
					{attr: 'optionList', desc: '选项列表', type: 'Array', defaultValue: '-'},
					{attr: 'isShowIcon', desc: '是否显示搜索图标', type: 'Boolean', defaultValue: 'false'},
					{
						attr: 'isClear',
						desc: '选择列表项后是否清除已选项，需配合回调函数使用将所传selected值清空',
						type: 'Boolean',
						defaultValue: 'false'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'SearchRemote', type: 'props', data: this.searchRemotePropsDataCompute},
					{title: 'SearchRemote', type: 'events', data: this.searchRemoteEventsDataCompute}
				]
			}
		},
		methods: {
			copy,
			handleSelectedUser(value) {
				this.$data.userInfo.userSelected = value
			},
			searchUserRemote(query) {
				const data = [
					{label: '张三', value: 'zhangSan'},
					{label: '李四', value: 'liSi'},
					{label: '王五', value: 'wangWu'}
				]
				if (query !== '') {
					this.$data.userInfo.isSearchUser = true
					setTimeout(() => {
						this.$data.userInfo.isSearchUser = false
						this.$data.userInfo.optionUserList = data.filter((item) => item.label.indexOf(query) > -1)
					}, 1000)
				} else {
					this.$data.userInfo.optionUserList = []
				}
			}
		}
	}
</script>

<style scoped></style>
