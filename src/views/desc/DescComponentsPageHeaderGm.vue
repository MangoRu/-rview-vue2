<template>
	<div>
		<common-desc-components-content
				title="PageHeader* 定制页头"
				name="r-page-header-gm"
				desc="定制版页头展示"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-page-header-gm">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#page-header-gm-md')">
					<template #codeExample>
						<r-page-header-gm title="定制页头"></r-page-header-gm>
						<br/>
						<br/>
						<r-page-header-gm icon="md-flame" title="电量使用情况" style="height: 500px">
							<Tag color="blue" size="large" class="m-top-5">自定义内容模块</Tag>
							<r-panel class="m-top-5" full-height>
								<r-page-error :status="500"></r-page-error>
							</r-panel>
						</r-page-header-gm>
					</template>
					<page-header-gm-md id="page-header-gm-md"></page-header-gm-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import PageHeaderGmMd from 'assets/md/r-page-header-gm.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsPageHeaderGm',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, PageHeaderGmMd},
		computed: {
			pageHeaderGmSlotDataCompute() {
				return [{name: '无', desc: '自定义展示内容'}]
			},
			pageHeaderGmPropsDataCompute() {
				return [
					{attr: 'title', desc: '页头标题文字', type: 'String', defaultValue: '-'},
					{attr: 'icon', desc: '页头图标', type: 'String', defaultValue: 'ios-home'}
				]
			},
			computeApiTableList() {
				return [
					{title: 'PageHeaderGm', type: 'props', data: this.pageHeaderGmPropsDataCompute},
					{title: 'PageHeaderGm', type: 'slot', data: this.pageHeaderGmSlotDataCompute}
				]
			}
		},
		methods: {copy}
	}
</script>

<style scoped></style>
