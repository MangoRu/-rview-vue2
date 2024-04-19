<template>
	<div>
		<common-desc-components-content
				title="TitleText 标题文字"
				name="r-title-text"
				desc="协助页面的文字提示"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-title-text">
				<custom-content-code-examples code-title="基础用法" code-desc="支持自定义标题与颜色。"
				                              @on-click-copy="copy('#title-text-md')">
					<template #codeExample>
						<r-title-text></r-title-text>
						<r-title-text color="#19be6b" text="公共组件库"></r-title-text>
					</template>
					<title-text-md id="title-text-md"></title-text-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import TitleTextMd from 'assets/md/r-title-text.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsTitleText',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, TitleTextMd},
		computed: {
			titleTextPropsDataCompute() {
				return [
					{
						attr: 'text',
						desc: '文字',
						type: 'String',
						defaultValue: '标题文字'
					},
					{
						attr: 'color',
						desc: '颜色设置',
						type: 'String',
						defaultValue: '#2792f2'
					}
				]
			},
			computeApiTableList() {
				return [{title: 'Loading', type: 'props', data: this.titleTextPropsDataCompute}]
			}
		},
		methods: {
			copy
		}
	}
</script>

<style scoped></style>
