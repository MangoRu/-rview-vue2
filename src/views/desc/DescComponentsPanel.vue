<template>
	<div>
		<common-desc-components-content
				title="Panel 卡片面板"
				name="r-panel"
				desc="基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-panel">
				<custom-content-code-examples code-title="基本用法" @on-click-copy="copy('#panel-md')">
					<template #codeDesc>
						<p class="m-top">用于搜索栏或展示列表卡片。</p>
						<div>
							设置<span class="text-highlight"> isFullHeight </span>
							属性为true可撑满父容器的高度(注意父容器需设定高度才有效，且父容器布局为flex，column方向)
						</div>
					</template>
					<template #codeExample>
						<r-panel>
							<template #left>
								<div>
									<span style="font-weight: bolder; margin-right: 5px">城市</span>
									<label>
										<Select v-model="city" style="width: 200px">
											<Option v-for="item in cityList" :value="item.value" :key="item.value">
												{{ item.label }}
											</Option>
										</Select>
									</label>
								</div>
							</template>
							<template #right>
								<Button type="primary">{{ city }}</Button>
							</template>
						</r-panel>
						<div style="height: 100px; display: flex; flex-direction: column">
							<r-panel full-height is-column-direction>
								<div>
									<Icon type="ios-albums"/>
									自定义内容
								</div>
							</r-panel>
						</div>
					</template>
					<panel-md id="panel-md"></panel-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import PanelMd from 'assets/md/r-panel.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsPanel',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, PanelMd},
		data() {
			return {
				cityList: [
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
					},
					{
						value: 'Paris',
						label: 'Paris'
					},
					{
						value: 'Canberra',
						label: 'Canberra'
					}
				],
				city: 'New York'
			}
		},
		computed: {
			panelSlotDataCompute() {
				return [
					{name: 'left', desc: '自定义左列内容'},
					{name: 'right', desc: '自定义右列内容'},
					{name: '无', desc: '自定义内容'}
				]
			},
			panelPropsDataCompute() {
				return [
					{
						attr: 'fullHeight',
						desc: '是否撑满高度(相对父容器)，父容器需给定高度且设置flex布局且direction为column',
						type: 'Boolean',
						defaultValue: 'false'
					},
					{
						attr: 'isColumnDirection',
						desc: 'flex布局排列方向是否为column',
						type: 'Boolean',
						defaultValue: 'false'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'Panel', type: 'props', data: this.panelPropsDataCompute},
					{title: 'Panel', type: 'slot', data: this.panelSlotDataCompute}
				]
			}
		},
		methods: {
			copy
		}
	}
</script>

<style scoped></style>
