<template>
	<div>
		<common-anchor :anchor-link-list="computeAnchorList"></common-anchor>
		<common-desc-components-content
				title="TableAuto 自定义表格"
				name="r-table-auto"
				desc="含加载状态的表格数据展示"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-table-auto">
				<custom-content-code-examples code-title="基础用法" @on-click-copy="copy('#table-md')">
					<template #codeDesc>
						<div class="m-top-5">
							<span class="text-highlight">r-table-auto</span>是对
							<span class="text-highlight">r-table-custom</span>组件的再封装，
							适用于数据不多时的分页表格渲染(该组件一次性传入，非一页一页搜索查询)
							<!--      多数据表格选用不良人3 GM中的表格组件(另一公共组件库)        -->
						</div>
					</template>
					<template #codeExample>
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
					</template>
					<table-md id="table-md"></table-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import TableMd from 'assets/md/r-table.md'
	import CommonAnchor from 'views/desc/common/CommonAnchor'
	import {copy} from 'utils/toolkit'

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
		name: 'DescComponentsTableAuto',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, TableMd, CommonAnchor},
		data() {
			return {
				itemColumns,
				itemList: [],
				itemListLoading: false
			}
		},
		computed: {
			computeAnchorList() {
				return [
					{id: '#basic-table', title: '表格数据'},
					{id: '#API', title: 'API'}
				]
			},
			tableCustomEventsDataCompute() {
				return [
					{
						name: '- (action操作名)',
						desc: '点击表格操作列某操作的回调，返回行数据',
						returnValue: 'row'
					},
					{
						name: 'on-change-current-data',
						desc: '切换分页的回调函数，返回第一个参数为起始页，第二个参数为结束页',
						returnValue: 'start, end'
					}
				]
			},
			tableAutoEventsDataCompute() {
				return [{name: '...', desc: '...所有Table Custom的回调事件', returnValue: '-'}]
			},
			tableCustomPropsDataCompute() {
				return [
					{
						attr: 'actionColumn',
						desc: '表格操作列',
						type: 'Object',
						defaultValue:
								'{\n' +
								'          title: "操作",\n' +
								'          slot: "action",\n' +
								'          key: "action",\n' +
								'          fixed: "right",\n' +
								'          align: "center",\n' +
								'          minWidth: 210\n' +
								'        }'
					},
					{
						attr: 'isShowAction',
						desc: '是否显示操作列',
						type: 'Boolean',
						defaultValue: 'true'
					},
					{
						attr: 'pageSize',
						desc: '每页条数',
						type: 'Number',
						defaultValue: '10'
					},
					{attr: 'tableActions', desc: '操作列的操作数组', type: 'Array', defaultValue: '[ ]'},
					{attr: 'isShowPage', desc: '是否显示分页', type: 'Boolean', defaultValue: 'true'},
					{attr: 'isShowMode', desc: '是否显示视图切换', type: 'Boolean', defaultValue: 'true'},
					{attr: 'tableData', desc: '表格数据', type: 'Array', defaultValue: '[ ]'}
				]
			},
			tableAutoPropsDataCompute() {
				return [
					{attr: 'loadingText', desc: '加载文字', type: 'String', defaultValue: '加载中...'},
					{attr: 'tableDataLoading', desc: '表格是否加载', type: 'Boolean', defaultValue: 'false'},
					{attr: 'tableData', desc: '表格数据', type: 'Array', defaultValue: '[ ]'},
					{attr: 'pageSize', desc: '每页条数，默认10条', type: 'Number', defaultValue: '10'},
					{
						attr: '...',
						desc: '...所有Table Custom及iView Table表格的参数',
						type: '-',
						defaultValue: '-'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'Table Custom', type: 'props', data: this.tableCustomPropsDataCompute},
					{title: 'Table Custom', type: 'events', data: this.tableCustomEventsDataCompute},
					{title: 'Table Auto', type: 'props', data: this.tableAutoPropsDataCompute},
					{title: 'Table Auto', type: 'events', data: this.tableAutoEventsDataCompute}
				]
			}
		},
		methods: {
			copy,
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

<style scoped></style>
