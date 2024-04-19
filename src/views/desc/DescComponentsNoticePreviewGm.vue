<template>
	<div>
		<common-desc-components-content
				title="IframePreview iframe预览"
				name="r-notice-preview-gm"
				desc="iframe预览"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-preview-gm">
				<custom-content-code-examples
						code-title="基础用法"
						code-desc="以上以CSDN官网内联框架查看为示例"
				>
					<template #codeExample>
						<Button @click="previewVisible = true" style="width: 160px" type="primary" ghost>
							测试iframe
						</Button>
						<Button
								v-if="false"
								@click="previewNoticeVisible = true"
								style="width: 160px"
								type="success"
								ghost
								class="m-left-10"
						>
							登录公告预览
						</Button>
						<r-notice-preview-gm
								:preview-visible="previewVisible"
								preview-url="https://www.csdn.net/"
								@on-close="previewVisible = false"
						>
						</r-notice-preview-gm>
						<r-notice-preview-gm
								preview-title="洛克人登录公告预览示例"
								:preview-visible="previewNoticeVisible"
								preview-url="http://172.16.0.42:8086/preview.html?mainServer=main1&preview=content-0f51ce388ef34e0ba126731c64256007-1646015436000.json"
								@on-close="previewNoticeVisible = false"
						></r-notice-preview-gm>
					</template>
					<notice-preview-gm-md></notice-preview-gm-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import NoticePreviewGmMd from 'assets/md/r-notice-preview-gm.md'

	export default {
		name: 'DescComponentsNoticePreviewGm',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, NoticePreviewGmMd},
		data() {
			return {
				previewVisible: false,
				previewNoticeVisible: false
			}
		},
		computed: {
			noticePreviewGmEventsDataCompute() {
				return [{name: 'on-close', desc: '关闭弹窗的回调事件', returnValue: '-'}]
			},
			noticePreviewGmPropsDataCompute() {
				return [
					{attr: 'previewUrl', desc: '必填，预览地址', type: 'String', defaultValue: '-'},
					{
						attr: 'previewVisible',
						desc: '必填，对话框是否显示',
						type: 'Boolean',
						defaultValue: 'false'
					},
					{
						attr: 'previewTitle',
						desc: '对话框标题文字',
						type: 'Boolean',
						defaultValue: '预览'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'NoticePreviewGm', type: 'props', data: this.noticePreviewGmPropsDataCompute},
					{title: 'NoticePreviewGm', type: 'events', data: this.noticePreviewGmEventsDataCompute}
				]
			}
		}
	}
</script>

<style scoped></style>
