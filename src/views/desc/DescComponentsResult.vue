<template>
	<div>
		<common-anchor :anchor-link-list="computeAnchorList"></common-anchor>
		<common-desc-components-content
				title="Result 处理结果"
				name="r-result"
				desc="用于对用户进行的一系列任务处理结果进行反馈。"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-result">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#result-md')">
					<template #codeExample>
						<div id="basic">
							<r-result></r-result>
						</div>
						<div id="result-icon">
							<Card style="width: 25%; display: inline-block">
								<r-result icon="success" title="success"></r-result>
							</Card>
							<Card style="width: 25%; display: inline-block">
								<r-result icon="warning" title="warning"></r-result>
							</Card>
							<Card style="width: 25%; display: inline-block">
								<r-result icon="error" title="error"></r-result>
							</Card>
							<Card style="width: 25%; display: inline-block">
								<r-result icon="info" title="info"></r-result>
							</Card>
						</div>
						<div id="result-custom">
							<r-panel class="m-top-15">
								<r-result
										title="空数据"
										sub-title="当前查询结果为空"
										icon="ios-archive"
										:icon-size="140"
								>
								</r-result>
							</r-panel>
							<r-panel class="m-top-15">
								<r-result title="提交成功" sub-title="您已提交此申请" icon="success">
									<template #extraResult>
										<p>已提交申请，待部门审核。</p>
									</template>
									<template #btnResult>
										<Button type="primary" class="m-right-10">查询进度</Button>
										<Button>返回</Button>
									</template>
								</r-result>
							</r-panel>
						</div>
					</template>
					<result-md id="result-md"></result-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CommonAnchor from 'views/desc/common/CommonAnchor'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import ResultMd from 'assets/md/r-result.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsResult',
		components: {
			CommonDescComponentsContent,
			CommonAnchor,
			CustomContentCodeExamples,
			ResultMd
		},
		computed: {
			resultSlotDataCompute() {
				return [
					{name: 'icon', desc: '自定义图标'},
					{name: 'title', desc: '自定义标题文字'},
					{name: 'subTitle', desc: '自定义标题提示文字'},
					{name: 'extraResult', desc: '自定义额外结果显示的内容'},
					{name: 'btnResult', desc: '自定义按钮结果内容'}
				]
			},
			resultPropsDataCompute() {
				return [
					{
						attr: 'icon',
						desc: '图标，可选success、warning、error、info以及iView图标类型',
						type: 'String',
						defaultValue: 'ios-information-circle'
					},
					{attr: 'iconColor', desc: '图标颜色', type: 'String', defaultValue: '#409EFF'},
					{attr: 'iconSize', desc: '图标大小', type: 'Number', defaultValue: '110'},
					{attr: 'title', desc: '标题文字', type: 'String', defaultValue: '-'},
					{
						attr: 'subTitle',
						desc: '结果描述',
						type: 'String',
						defaultValue: '请核对以下信息后，再重新提交'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'Result', type: 'props', data: this.resultPropsDataCompute},
					{title: 'Result', type: 'slot', data: this.resultSlotDataCompute}
				]
			},
			computeAnchorList() {
				return [
					{id: '#basic', title: '基础语法'},
					{id: '#result-icon', title: '不同结果状态'},
					{id: '#result-custom', title: '自定义返回结果'},
					{id: '#API', title: 'API'}
				]
			}
		},
		methods: {
			copy
		}
	}
</script>

<style scoped></style>
