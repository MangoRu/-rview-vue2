<template>
	<div>
		<common-desc-components-content
				title="FileUpload 文件上传"
				name="r-file-upload"
				desc="文件上传控件"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-file-upload">
				<custom-content-code-examples code-title="基础用法" code-desc=""
				                              @on-click-copy="copy('#custom-file-upload-md')">
					<template #codeExample>
						<r-file-upload
								upload-url="//jsonplaceholder.typicode.com/posts/"
								with-credentials
								:is-default-success-event="false"
								@on-upload-success="handleUploadFileSuccess"
						></r-file-upload>
					</template>
					<custom-file-upload-md id="custom-file-upload-md"></custom-file-upload-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import CustomFileUploadMd from 'assets/md/r-file-upload.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsFileUpload',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, CustomFileUploadMd},
		computed: {
			fileUploadEventsDataCompute() {
				return [{name: 'on-upload-success', desc: `文件上传成功的回调函数`, returnValue: 'file'}]
			},
			fileUploadPropsDataCompute() {
				return [
					{attr: 'uploadUrl', desc: `上传的地址，必填`, type: 'String', defaultValue: '-'},
					{attr: 'disabled', desc: `是否禁用`, type: 'Boolean', defaultValue: 'false'},
					{
						attr: 'format',
						desc: `支持的文件类型，是识别文件的后缀名`,
						type: 'Array',
						defaultValue: '[ ]'
					},
					{
						attr: 'maxSize',
						desc: `文件大小限制，单位 kb，默认3MB`,
						type: 'Number',
						defaultValue: '3072'
					},
					{attr: 'buttonLabel', desc: `上传按钮显示文字`, type: 'String', defaultValue: '上传'},
					{attr: 'loading', desc: `设置按钮为加载中状态`, type: 'Boolean', defaultValue: 'false'},
					{attr: 'headers', desc: `设置上传的请求头部`, type: 'Object', defaultValue: '{ }'},
					{
						attr: 'withCredentials',
						desc: `支持发送 cookie 凭证信息`,
						type: 'Boolean',
						defaultValue: 'false'
					},
					{
						attr: 'isDefaultSuccessEvent',
						desc: `是否默认上传成功的事件，当设置为false时需与回调函数on-upload-success一起使用`,
						type: 'Boolean',
						defaultValue: 'true'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'FileUpload', type: 'props', data: this.fileUploadPropsDataCompute},
					{title: 'FileUpload', type: 'events', data: this.fileUploadEventsDataCompute}
				]
			}
		},
		methods: {
			copy,
			handleUploadFileSuccess(file) {
				this.$Modal.success({
					title: '上传操作成功',
					content: `${file.name} 导入成功！`
				})
			}
		}
	}
</script>

<style scoped></style>
