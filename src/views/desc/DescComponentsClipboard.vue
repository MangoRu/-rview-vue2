<template>
	<div>
		<common-desc-components-content
				title="Clipboard 复制板"
				name="r-clipboard"
				desc="快捷复制文字组件 "
				:api-table-list="computeApiTableList"
		>
			<div id="basic-clipboard">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#clipboard-md')">>
					<template #codeExample>
						<r-clipboard copy-content="这里是复制的文字text"></r-clipboard>
						<label>
							<Input placeholder="此处粘贴测试" type="textarea"/>
						</label>
					</template>
					<clipboard-md id="clipboard-md"></clipboard-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import ClipboardMd from 'assets/md/r-clipboard.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsClipboard',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, ClipboardMd},
		computed: {
			clipboardPropsDataCompute() {
				return [
					{attr: 'copyText', desc: '复制提示文字', type: 'String', defaultValue: '点击复制'},
					{attr: 'copyContent', desc: '必填，待复制的文字', type: 'String', defaultValue: '-'}
				]
			},
			computeApiTableList() {
				return [{title: 'Clipboard', type: 'props', data: this.clipboardPropsDataCompute}]
			}
		},
		methods: {copy}
	}
</script>

<style scoped></style>
