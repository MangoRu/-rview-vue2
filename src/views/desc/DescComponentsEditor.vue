<template>
	<div>
		<common-desc-components-content
				title="Editor 富文本编辑器"
				name="r-editor"
				desc="基于tinymce的富文本编辑器"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-editor">
				<custom-content-code-examples code-title="基础用法" @on-click-copy="copy('#custom-editor-md')">
					<template #codeDesc>
						<div class="m-top-5">
							该富文本编辑器组件基于
							<a
									class="text-highlight"
									target="_blank"
									href="http://tinymce.ax-z.cn/general/basic-setup.php"
							>
								tinymce
							</a>
							封装，此处不支持上传图片
						</div>
						<p class="m-top-5 tag">
							<strong>注意！！！若需要使用此富文本编辑器，可按如下步骤操作（或自己参考tinymce官网文档自行配置处理）：</strong>
						</p>
						<blockquote class="blockquote">
							<ol class="m-left-20">
								<li>
									拷贝tinymce
									<a href="/">
										<Tag color="blue">如何下载 r-view-design，请戳这儿</Tag>
									</a>
									<p>node_modules中找到下载的依赖 <span
											class="tip">r-view-design</span> tinymce目录，将 <span
											class="tag">tinymce</span> 整个文件夹拷贝到 <span class="tag">自己项目的public文件夹下</span></p>
								</li>
								<li>参考此案例代码即可正常使用</li>
							</ol>
						</blockquote>
						<img src="../../../docs/images/tinymce.png" alt="">
					</template>
					<template #codeExample>
						<h3>富文本编辑器输入的内容值：</h3>
						<label>
							<Input
									type="textarea"
									v-model="content"
									placeholder="这是是以下富文本编辑器的内容值"
									:rows="5"
							/>
						</label>
						<br/>
						<br/>
						<r-editor :editor-height="300" @input="handleInputContent"></r-editor>
					</template>
					<custom-editor-md id="custom-editor-md"></custom-editor-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import CustomEditorMd from 'assets/md/r-editor.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsEditor',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, CustomEditorMd},
		data() {
			return {
				content: null
			}
		},
		computed: {
			editorEventsDataCompute() {
				return [{name: 'input', desc: '监听富文本编辑器内容值的回调函数', returnValue: 'content'}]
			},
			editorPropsDataCompute() {
				return [
					{attr: 'disabled', desc: `是否可用`, type: 'Boolean', defaultValue: 'false'},
					{attr: 'value', desc: '富文本编辑器内容值', type: 'String', defaultValue: '-'},
					{attr: 'editorHeight', desc: '编辑器高度', type: 'Number', defaultValue: '500'}
				]
			},
			computeApiTableList() {
				return [
					{title: 'Editor', type: 'props', data: this.editorPropsDataCompute},
					{title: 'Editor', type: 'events', data: this.editorEventsDataCompute}
				]
			}
		},
		methods: {
			copy,
			handleInputContent(content) {
				this.$data.content = content
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag {
		color: $error
	}
</style>
