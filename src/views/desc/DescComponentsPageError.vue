<template>
	<div>
		<common-anchor :anchor-link-list="computeAnchorList"></common-anchor>
		<common-desc-components-content
				title="PageError 异常"
				name="r-page-error"
				desc="用于对页面特定的异常状态进行反馈。"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-page-error">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#page-error-md')">
					<template #codeExample>
						<div id="code404">
							<r-page-error @on-click-back="handleClickBack"></r-page-error>
						</div>
						<div id="code403">
							<r-page-error :status="403" @on-click-back="handleClickBack"></r-page-error>
						</div>
						<div id="code500">
							<r-page-error :status="500" @on-click-back="handleClickBack"></r-page-error>
						</div>
						<div id="back">
							<r-page-error :is-color="false" @on-click-back="handleClickBack"></r-page-error>
						</div>
					</template>
					<page-error-md id="page-error-md"></page-error-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CommonAnchor from 'views/desc/common/CommonAnchor'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import PageErrorMd from 'assets/md/r-page-error.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsPageError',
		components: {CommonDescComponentsContent, CommonAnchor, CustomContentCodeExamples, PageErrorMd},
		computed: {
			pageErrorSlotDataCompute() {
				return [{name: 'actions', desc: '自定义操作'}]
			},
			pageErrorEventsDataCompute() {
				return [
					{
						name: 'on-click-back',
						desc: '点击返回首页按钮的回调',
						returnValue: '-'
					}
				]
			},
			pageErrorPropsDataCompute() {
				return [
					{
						attr: 'errorImg',
						desc: `错误图片展示`,
						type: 'String',
						defaultValue: '404彩图'
					},
					{
						attr: 'status',
						desc: '错误状态，可选404、403、500',
						type: 'Number',
						defaultValue: '404'
					},
					{attr: 'content', desc: '内容提示文字', type: 'String', defaultValue: '抱歉，页面出错了'},
					{attr: 'isBack', desc: '是否展示返回首页按钮', type: 'Boolean', defaultValue: 'true'},
					{attr: 'isColor', desc: '是否为彩图', type: 'Boolean', defaultValue: 'true'}
				]
			},
			computeApiTableList() {
				return [
					{title: 'PageError', type: 'props', data: this.pageErrorPropsDataCompute},
					{title: 'PageError', type: 'events', data: this.pageErrorEventsDataCompute},
					{title: 'PageError', type: 'slot', data: this.pageErrorSlotDataCompute}
				]
			},
			computeAnchorList() {
				return [
					{id: '#code404', title: '404页面'},
					{id: '#code403', title: '403页面'},
					{id: '#code500', title: '500页面'},
					{id: '#back', title: '返回首页事件'},
					{id: '#API', title: 'API'}
				]
			}
		},
		methods: {
			copy,
			handleClickBack() {
				this.$router.push('/rview-components/layout')
			}
		}
	}
</script>

<style scoped></style>
