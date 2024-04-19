<template>
	<div>
		<common-desc-components-content
				title="Breadcrumb 面包屑导航"
				name="r-breadcrumb"
				desc="显示网站的层级结构，告知用户当前所在位置"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-breadcrumb">
				<custom-content-code-examples code-title="基本用法" @on-click-copy="copy('#breadcrumb-md')">
					<template #codeDesc>
						<div>
							基于
							<a href="https://www.iviewui.com/components/breadcrumb" target="_blank">
								iView面包屑
							</a>
							组件的基础封装
						</div>
					</template>
					<template #codeExample>
						<r-breadcrumb :breadcrumb-list="['Home', 'Components', 'Breadcrumb']">
							<p>插槽部分 => 自定义内容</p>
						</r-breadcrumb>
					</template>
					<breadcrumb-md id="breadcrumb-md"></breadcrumb-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import BreadcrumbMd from 'assets/md/r-breadcrumb.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsBreadcrumb',
		components: {
			CommonDescComponentsContent,
			CustomContentCodeExamples,
			BreadcrumbMd
		},
		computed: {
			breadcrumbSlotDataCompute() {
				return [{name: '无', desc: '自定义内容'}]
			},
			breadcrumbPropsDataCompute() {
				return [
					{
						attr: 'breadcrumbList',
						desc: '面包屑列表',
						type: 'Array',
						defaultValue: '[ ]'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'Panel', type: 'props', data: this.breadcrumbPropsDataCompute},
					{title: 'Panel', type: 'slot', data: this.breadcrumbSlotDataCompute}
				]
			}
		},
		methods: {
			copy
		}
	}
</script>

<style scoped></style>
