<template>
	<div>
		<common-desc-components-content
				title="PageHeader 页头"
				name="r-page-header"
				desc="常放置在页面顶端，用于展示当前页面主体信息（如图标、标题等），并承载与当前页相关的操作（如面包屑导航、操作等）。"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-page-header">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#page-header-md')">
					<template #codeExample>
						<r-page-header
								icon="ios-card"
								:breadcrumb="['公共组件库', 'PageHeader 页头']"
								title="PageHeader 页头组件"
								sub-title="r-page-header"
						>
							<template #titleExtra>
								<Button type="primary">标题行操作</Button>
							</template>
							<template #extra>
								<div style="margin-top: 10px; height: 200px; display: flex; flex-direction: column">
									<r-panel full-height>
										<r-result icon="success"></r-result>
									</r-panel>
								</div>
							</template>
							<template #footer>
								<r-footer></r-footer>
							</template>
						</r-page-header>
					</template>
					<page-header-md id="page-header-md"></page-header-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>
<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import PageHeaderMd from 'assets/md/r-page-header.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsPageHeader',
		components: {
			CommonDescComponentsContent,
			CustomContentCodeExamples,
			PageHeaderMd
		},
		computed: {
			pageHeaderSlotDataCompute() {
				return [
					{name: 'breadcrumb', desc: '自定义面包屑'},
					{name: 'icon', desc: '自定义图标'},
					{name: 'title', desc: '自定义主标题'},
					{name: 'titleExtra', desc: '自定义标题额外显示的内容'},
					{name: 'extra', desc: '自定义额外显示的内容'},
					{name: 'footer', desc: '自定义页脚'},
					{name: '无', desc: '自定义显示内容'}
				]
			},
			pageHeaderPropsDataCompute() {
				return [
					{
						attr: 'breadcrumb',
						desc: `面包屑列表`,
						type: 'Array',
						defaultValue: '-'
					},
					{
						attr: 'icon',
						desc: '图标',
						type: 'String',
						defaultValue: 'ios-home'
					},
					{attr: 'title', desc: '主标题文字', type: 'String', defaultValue: 'Title'},
					{attr: 'subTitle', desc: '子标题文字', type: 'String', defaultValue: '-'}
				]
			},
			computeApiTableList() {
				return [
					{title: 'PageHeader', type: 'props', data: this.pageHeaderPropsDataCompute},
					{title: 'PageHeader', type: 'slot', data: this.pageHeaderSlotDataCompute}
				]
			}
		},
		methods: {
			copy
		}
	}
</script>
<style scoped></style>
