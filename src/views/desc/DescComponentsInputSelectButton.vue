<template>
	<div>
		<common-desc-components-content
				title="InputSelectButton 选择列表"
				name="r-input-select-button"
				desc="多选列表项的选择控件"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-input-select-button">
				<custom-content-code-examples code-title="基础用法" code-desc=""
				                              @on-click-copy="copy('#input-select-button-md')">
					<template #codeExample>
						<r-input-select-button name="城市"></r-input-select-button>
						<br/>
						<r-input-select-button
								name="城市"
								:items-list="itemsListCity"
								:is-card-type="false"
								:value="defaultValueCity"
								@on-change="handleChangeItemCity"
						>
						</r-input-select-button>
					</template>
					<input-select-button-md id="input-select-button-md"></input-select-button-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import InputSelectButtonMd from 'assets/md/r-input-select-button.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsInputSelectButton',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, InputSelectButtonMd},
		data() {
			return {
				itemsListCity: [
					{value: 'beijing', itemShow: '北京', checked: false},
					{value: 'shanghai', itemShow: '上海', checked: false},
					{value: 'tianjin', itemShow: '天津', checked: false},
					{value: 'shenzhen', itemShow: '深圳', checked: false},
					{value: 'guangzhou', itemShow: '广州', checked: false},
					{value: 'wuhan', itemShow: '武汉', checked: false},
					{value: 'changsha', itemShow: '长沙', checked: false}
				],
				defaultValueCity: null
			}
		},
		computed: {
			inputSelectButtonEventsDataCompute() {
				return [{name: 'on-change', desc: '选中列表项的回调', returnValue: 'selectedList'}]
			},
			inputSelectButtonPropsDataCompute() {
				return [
					{attr: 'name', desc: '必填，选择列表名称', type: 'String', defaultValue: '-'},
					{
						attr: 'searchRequiredParams',
						desc: '选择列表必须的选择参数',
						type: 'String | Number | Boolean | Array | Object',
						defaultValue: '-'
					},
					{
						attr: 'searchRequiredDesc',
						desc: '选择列表的选择参数名称',
						type: 'String',
						defaultValue: '-'
					},
					{attr: 'tab', desc: '分类页签', type: 'String', defaultValue: '-'},
					{attr: 'tabList', desc: '页签列表', type: 'Array', defaultValue: '[ ]'},
					{
						attr: 'itemsList',
						desc: '多选项列表，当且仅当列表不为空该组件才有效',
						type: 'Array',
						defaultValue: '[ ]'
					},
					{attr: 'isCardType', desc: '是否展示为卡片列表', type: 'Boolean', defaultValue: 'true'},
					{attr: 'value', desc: '默认选中值', type: 'String | Number', defaultValue: '-'}
				]
			},
			computeApiTableList() {
				return [
					{title: 'InputSelectButton', type: 'props', data: this.inputSelectButtonPropsDataCompute},
					{
						title: 'InputSelectButton',
						type: 'events',
						data: this.inputSelectButtonEventsDataCompute
					}
				]
			}
		},
		methods: {
			copy,
			handleChangeItemCity(selectedList) {
				let city = []
				for (let i in selectedList) {
					if (Object.prototype.hasOwnProperty.call(selectedList, i)) {
						city.push(`${selectedList[i].value}`)
					}
				}
				this.$data.defaultValueCity =
						city.length === this.$data.itemsListCity.length ? 'all' : city.toString()
			}
		}
	}
</script>

<style scoped></style>
