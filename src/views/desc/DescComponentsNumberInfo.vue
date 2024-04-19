<template>
	<div>
		<common-desc-components-content
				title="NumberInfo 数字趋势标记"
				name="r-number-info"
				desc="常用于数据卡片中，突出展示某个业务数据。"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-number-info">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#number-info-md')">
					<template #codeExample>
						<r-number-info></r-number-info>
						<Card class="m-top-15">
							<r-number-info
									:sub-title="['已使用', '未使用']"
									:total-list="['80%', '20%']"
									:trend-list="['1', '0']"
							></r-number-info>
						</Card>
						<r-panel class="m-top-15" is-column-direction>
							<r-number-info
									:sub-title="['近7日活跃设备', '近30日活跃设备']"
									:total-list="['12,321', '50,193']"
									:trend-list="[17.1, 5.3]"
							></r-number-info>
						</r-panel>
					</template>
					<number-info-md id="number-info-md"></number-info-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import NumberInfoMd from 'assets/md/r-number-info.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsNumberInfo',
		components: {
			CommonDescComponentsContent,
			CustomContentCodeExamples,
			NumberInfoMd
		},
		computed: {
			numberInfoPropsDataCompute() {
				return [
					{
						attr: 'subTitle',
						desc: `数据文本标题`,
						type: 'Array',
						defaultValue: '["subTitle1", "subTitle2"]'
					},
					{
						attr: 'totalList',
						desc: `总数列表`,
						type: 'Array',
						defaultValue: '[100, 0]'
					},
					{
						attr: 'trendList',
						desc: `数据趋势列表`,
						type: 'Array',
						defaultValue: '[100, 0]'
					}
				]
			},
			computeApiTableList() {
				return [{title: 'NumberInfo', type: 'props', data: this.numberInfoPropsDataCompute}]
			}
		},
		methods: {copy}
	}
</script>

<style scoped></style>
