<template>
	<div>
		<common-desc-components-content
				title="Loading 加载中"
				name="r-loading"
				desc="页面加载状态显示"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-loading">
				<custom-content-code-examples
						code-title="基础用法"
						code-desc="支持自定义文字，大小与是否全屏加载。"
						@on-click-copy="copy('#loading-md')"
				>
					<template #codeExample>
						<r-loading :is-fix="false"></r-loading>
						<br/>
						<br/>
						<r-loading :is-fix="false" text="加载中..."></r-loading>
					</template>
					<loading-md id="loading-md"></loading-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import LoadingMd from 'assets/md/r-loading.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsLoading',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, LoadingMd},
		computed: {
			loadingPropsDataCompute() {
				return [
					{
						attr: 'text',
						desc: '加载文字',
						type: 'String',
						defaultValue: '-'
					},
					{
						attr: 'size',
						desc: '加载尺寸，可选值为large和small或者不设置',
						type: 'String',
						defaultValue: 'large'
					},
					{
						attr: 'isFix',
						desc: '是否整页加载',
						type: 'Boolean',
						defaultValue: 'true'
					},
					{
						attr: 'iconSize',
						desc: '加载及文字大小',
						type: 'Number',
						defaultValue: '18'
					}
				]
			},
			computeApiTableList() {
				return [{title: 'Loading', type: 'props', data: this.loadingPropsDataCompute}]
			}
		},
		methods: {copy}
	}
</script>

<style scoped></style>
