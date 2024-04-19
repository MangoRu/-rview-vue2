<template>
	<div>
		<common-desc-components-content
				title="Card 卡片展示"
				name="r-card"
				desc="页面的展示类型的指引"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-card">
				<custom-content-code-examples
						code-title="基础用法"
						code-desc="用户可自定义宽高、图标与文字等，当文字长度超出限制时以提示框展示"
						@on-click-copy="copy('#card-md')"
				>
					<template #codeExample>
						<div style="display: flex">
							<r-card></r-card>
							<r-card icon-type="md-basket" card-text="篮子" :is-border="false"></r-card>
							<r-card
									icon-type="ios-stats"
									card-text="数字趋势标记NumberInfo"
									icon-color="#ed4014"
							></r-card>
							<r-card
									icon-type="ios-stats"
									card-text="数字趋势标记NumberInfo"
									:width="318"
							></r-card>
						</div>
					</template>
					<card-md id="card-md"></card-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import CardMd from 'assets/md/r-card.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsCard',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, CardMd},
		computed: {
			cardPropsDataCompute() {
				return [
					{attr: 'width', desc: `卡片宽度`, type: 'Number', defaultValue: '135'},
					{attr: 'height', desc: '卡片高度', type: 'Number', defaultValue: '90'},
					{attr: 'iconSize', desc: '图标大小', type: 'Number', defaultValue: '28'},
					{attr: 'iconType', desc: '图标类型', type: 'String', defaultValue: 'ios-alarm'},
					{attr: 'iconColor', desc: '图标颜色', type: 'String', defaultValue: '#5cadff'},
					{attr: 'cardText', desc: '卡片展示文字', type: 'String', defaultValue: 'Text'},
					{attr: 'isBorder', desc: '是否包含边框', type: 'Boolean', defaultValue: 'true'}
				]
			},
			computeApiTableList() {
				return [{title: 'Card', type: 'props', data: this.cardPropsDataCompute}]
			}
		},
		methods: {copy}
	}
</script>

<style scoped></style>
