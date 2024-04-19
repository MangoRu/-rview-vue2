<template>
	<div>
		<common-desc-components-content
				title="FormCustom 搜索表单"
				name="r-form-custom"
				desc="用户页面搜索的特定条件"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-form-custom">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#form-custom-md')">
					<template #codeDesc>
						<div class="m-top-5">
							项目中详细使用示例详见
							<Tag color="green" @click.native="handleWatchExamples" style="cursor: pointer">
								r-search-panel-gm
							</Tag>
						</div>
					</template>
					<template #codeExample>
						<div>
							<r-form-custom :input-list="[]" :select-list="selectList"></r-form-custom>
						</div>
						<div class="m-top-15">
							<r-form-custom :input-list="inputList1" :select-list="selectList1"></r-form-custom>
						</div>
					</template>
					<form-custom-md id="form-custom-md"></form-custom-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import FormCustomMd from 'assets/md/r-form-custom.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsFormCustom',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, FormCustomMd},
		data() {
			return {
				selectList: [],
				inputList1: [],
				selectList1: []
			}
		},
		computed: {
			formCustomPropsDataCompute() {
				return [
					{attr: 'selectList', desc: '选择下拉框列表集', type: 'Array', defaultValue: '[ ]'},
					{attr: 'inputList', desc: '输入框列表集', type: 'Array', defaultValue: '[ ]'},
					{
						attr: 'isShowLabel',
						desc: '是否显示label标签文字',
						type: 'Boolean',
						defaultValue: 'true'
					}
				]
			},
			computeApiTableList() {
				return [{title: 'FormCustom', type: 'props', data: this.formCustomPropsDataCompute}]
			}
		},
		methods: {
			copy,
			handleWatchExamples() {
				this.$router.push('/rview-components/search-panel-gm')
			},
			initParamList() {
				let mainServerObj = {
					label: '城市',
					value: 'city',
					options: [
						{
							value: 'New York',
							label: 'New York'
						},
						{
							value: 'London',
							label: 'London'
						},
						{
							value: 'Sydney',
							label: 'Sydney'
						},
						{
							value: 'Ottawa',
							label: 'Ottawa'
						}
					],
					width: 170
				}
				if (this.$data.selectList.length === 0) {
					this.$data.selectList = []
					let giftCodeStateObj = {
						label: '状态',
						value: 'all',
						options: [
							{value: 'all', label: '全部'},
							{value: '1', label: '有效'},
							{value: '0', label: '失效'}
						],
						width: 150
					}
					this.$data.selectList.push(mainServerObj, giftCodeStateObj)
				}
				if (this.$data.selectList1.length === 0) {
					this.$data.selectList1 = []
					let giftCodeStateObj = {
						label: '查询条件',
						value: '',
						options: [
							{value: '1', label: '一线'},
							{value: '2', label: '二线'}
						],
						width: 135
					}
					this.$data.selectList1.push(mainServerObj, giftCodeStateObj)
				}
				if (this.$data.inputList1.length === 0) {
					this.$data.inputList1 = []
					let selectParam = {
						label: '查询参数',
						value: '',
						placeholder: '请输入查询参数',
						width: 252
					}
					this.$data.inputList1.push(selectParam)
				}
			}
		},
		created() {
			this.initParamList()
		}
	}
</script>

<style scoped>
	/deep/ .ivu-divider-horizontal {
		z-index: 0 !important;
	}
</style>
