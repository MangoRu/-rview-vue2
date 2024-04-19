<template>
	<div>
		<common-desc-components-content
				title="CheckboxAll 多选"
				name="r-checkbox-all"
				desc="多选列表项的封装组件"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-checkbox-all">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#checkbox-all-md')">
					<template #codeDesc>
						<div class="m-top-5">
							内置组件
							<span class="text-highlight">ItemsShow多列表项</span>
							，需配合使用，当且仅当多选项列表不为空时该组件才显示
						</div>
					</template>
					<template #codeExample>
						<Tabs type="card" v-model="tab">
							<TabPane name="noExistItem" label="不存在列表项"></TabPane>
							<TabPane name="existItem" label="存在列表项"></TabPane>
						</Tabs>
						<div v-if="tab === 'noExistItem'">
							<r-checkbox-all></r-checkbox-all>
						</div>
						<div v-else-if="tab === 'existItem'">
							<Divider orientation="left">不存在tab页签-示例</Divider>
							<r-checkbox-all
									name="城市"
									:items-list="itemsListBasic"
									:is-card-type="false"
									@on-checked-all="handleCheckedAllCity"
									@on-items-data="handleSelectedItemCity"
							></r-checkbox-all>
							<Card class="m-top-10 m-bottom-10" v-if="selectedItemCity.length > 0">
								<span>选中城市项：</span>
								<Tag v-if="checkedAllCity"> 所有城市</Tag>
								<div v-else style="display: inline-block">
									<Tag v-for="(item, index) in selectedItemCity" :key="index">
										{{ item.itemShow }}
									</Tag>
								</div>
							</Card>
							<Divider orientation="left">存在tab页签-示例</Divider>
							<r-checkbox-all
									name="礼包码"
									:tab="giftCodeTab"
									:tab-list="tabList"
									:items-list="itemsList"
							></r-checkbox-all>
						</div>
					</template>
					<checkbox-all-md id="checkbox-all-md"></checkbox-all-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import CheckboxAllMd from 'assets/md/r-checkbox-all.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsCheckboxAll',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, CheckboxAllMd},
		data() {
			return {
				tab: 'existItem',
				itemsListBasic: [
					{itemShow: '北京', checked: false},
					{itemShow: '上海', checked: false},
					{itemShow: '天津', checked: false},
					{itemShow: '深圳', checked: false},
					{itemShow: '广州', checked: false}
				],
				itemsList: [
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
				giftCodeTab: 'type1',
				checkedAllCity: false,
				selectedItemCity: []
			}
		},
		computed: {
			checkboxAllEventsDataCompute() {
				return [
					{
						name: 'on-checked-all',
						desc: '是否选择所有列表',
						returnValue: 'true / false'
					},
					{
						name: 'on-selected-list',
						desc: '监听所有列表项的回调',
						returnValue: 'selectedItem'
					}
				]
			},
			checkboxAllPropsDataCompute() {
				return [
					{attr: 'isBorderShow', desc: '是否显示边框', type: 'Boolean', defaultValue: 'false'},
					{attr: 'name', desc: '名称', type: 'String', defaultValue: '-'},
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
					{title: 'CheckboxAll', type: 'props', data: this.checkboxAllPropsDataCompute},
					{title: 'CheckboxAll', type: 'events', data: this.checkboxAllEventsDataCompute}
				]
			}
		},
		methods: {
			copy,
			handleSelectedItemCity(selectedItem) {
				this.$data.selectedItemCity = selectedItem
			},
			handleCheckedAllCity(isCheckedAll) {
				this.$data.checkedAllCity = isCheckedAll
			}
		}
	}
</script>

<style scoped></style>
