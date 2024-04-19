<template>
	<div>
		<Tooltip :transfer="true" placement="top">
			<template slot="content">
				{{ copyText }}
			</template>
			<a @click="handleCopyUrl" class="copy-btn" :data-clipboard-text="copyContent">
				{{ copyContentShow ? copyContentShow : copyContent }}
			</a>
		</Tooltip>
	</div>
</template>
<script>
	import Clipboard from 'clipboard'

	export default {
		name: 'RClipboard',
		props: {
			copyText: {type: String, default: '点击复制'},
			copyContent: {type: String, required: true},
			copyContentShow: {type: String, default: ''}
		},
		methods: {
			handleCopyUrl() {
				let clipboard = new Clipboard('.copy-btn')
				clipboard.on('success', () => {
					this.$Message.success('复制成功,已复制到剪切版')
					clipboard.destroy()
				})
				clipboard.on('error', () => {
					this.$Message.success('当前浏览器不支持自动复制,复制失败')
					clipboard.destroy()
				})
			}
		}
	}
</script>
<style scoped>
	.copy-btn {
		color: #19be6b;
	}
</style>
