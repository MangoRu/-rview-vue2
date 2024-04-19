<template>
	<div>
		<common-desc-components-content
				title="ItemsShow 多列表项"
				name="r-items-show"
				desc="多选项列表的展示"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-items-show">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#items-show-md')">
					<template #codeExample>
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
					</template>
					<items-show-md id="items-show-md"></items-show-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import ItemsShowMd from 'assets/md/r-items-show.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsItemsShow',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, ItemsShowMd},
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
		computed: {
			itemsShowEventsDataCompute() {
				return [
					{
						name: 'on-items-data',
						desc: '监听所有列表项的回调',
						returnValue: 'selectedItem'
					}
				]
			},
			itemsShowPropsDataCompute() {
				return [
					{
						attr: 'isBorderTopShow',
						desc: '是否显示顶部边框',
						type: 'Boolean',
						defaultValue: 'false'
					},
					{attr: 'tab', desc: '分类页签', type: 'String', defaultValue: '-'},
					{
						attr: 'tabList',
						desc: '页签列表，当且仅当列表长度大于1时才有效',
						type: 'Array',
						defaultValue: '[ ]'
					},
					{
						attr: 'itemsList',
						desc: '多选项列表，当且仅当列表不为空该组件才有效',
						type: 'Array',
						defaultValue: '[ ]'
					},
					{attr: 'isCardType', desc: '是否展示为卡片列表', type: 'Boolean', defaultValue: 'true'},
					{
						attr: 'isCardWidthAuto',
						desc: '是否自适应卡片宽度，默认固定宽度为550px(以便控制列表选项对齐)',
						type: 'Boolean',
						defaultValue: 'false'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'ItemsShow', type: 'props', data: this.itemsShowPropsDataCompute},
					{title: 'ItemsShow', type: 'events', data: this.itemsShowEventsDataCompute}
				]
			}
		},
		methods: {
			copy,
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

<style scoped></style>
