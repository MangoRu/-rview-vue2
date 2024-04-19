<template>
	<div>
		<common-desc-components-content
				title="ImagesUpload 图片上传"
				name="r-images-upload"
				desc="图片上传控件"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-images-upload">
				<custom-content-code-examples code-title="基础用法" @on-click-copy="copy('#custom-images-upload-md')">
					<template #codeDesc>
						<p class="m-top-5">
							注意：需在真实环境下上传使用（调上传接口获得图片url），当前仅做示例，故图片不显示
						</p>
					</template>
					<template #codeExample>
						<r-images-upload
								upload-url="//jsonplaceholder.typicode.com/posts/"
								:width="80"
						></r-images-upload>
					</template>
					<custom-images-upload-md id="custom-images-upload-md"></custom-images-upload-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import CustomImagesUploadMd from 'assets/md/r-images-upload.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsImagesUpload',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, CustomImagesUploadMd},
		computed: {
			imagesUploadEventsDataCompute() {
				return [{name: 'input', desc: `监听图片上传值的回调函数`, returnValue: 'url'}]
			},
			imagesUploadPropsDataCompute() {
				return [
					{attr: 'uploadUrl', desc: `上传的地址`, type: 'String', defaultValue: '-'},
					{attr: 'id', desc: `id`, type: 'Number', defaultValue: '-'},
					{attr: 'value', desc: `-`, type: 'String', defaultValue: '-'},
					{attr: 'width', desc: `图片控件的宽度`, type: 'Number', defaultValue: '60'}
				]
			},
			computeApiTableList() {
				return [
					{title: 'ImagesUpload', type: 'props', data: this.imagesUploadPropsDataCompute},
					{title: 'ImagesUpload', type: 'events', data: this.imagesUploadEventsDataCompute}
				]
			}
		},
		methods: {copy}
	}
</script>

<style scoped></style>
