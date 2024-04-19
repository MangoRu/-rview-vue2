<template>
	<!-- 此组件未展示 & 删除了之前 ant design 弹窗 改为了iView Modal 未排查-->
	<!--    <Modal-->
	<!--      :transition-names="[]"-->
	<!--      width="852px"-->
	<!--      :z-index="999999999999"-->
	<!--      v-model="visible"-->
	<!--      :title="previewTitle"-->
	<!--      :mask-closable="false"-->
	<!--      footer-hide-->
	<!--      @on-cancel="$emit('on-close', false)"-->
	<!--    >-->
	<Modal
			v-model="visible"
			:title="previewTitle"
			width="875px"
			:z-index="999999999999"
			:destroy-on-close="true"
			:footer="null"
			@cancel="$emit('on-close', false)"
	>
		<!--  FIXME  iframe 白屏加载  iView Modal存在这个问题，ant design OK -->
		<iframe
				height="400px"
				width="820px"
				class="iframe-content"
				:src="previewUrl"
				id="iframeNotice"
		></iframe>
		<div style="text-align: left">
			<span class="tips">说明1：请使用鼠标滚轮模拟手机屏幕上下滑动</span>
			<span class="tips">
        说明2：因不同品牌型号手机渲染机制不同，真机实际效果可能与本预览页面存在细微差异
      </span>
		</div>
	</Modal>
	<!--  </Modal>-->
</template>

<script>
	export default {
		name: 'RNoticePreviewGm',
		props: {
			previewUrl: {
				type: String,
				required: true
			},
			previewVisible: {
				type: Boolean,
				default: false,
				required: true
			},
			previewTitle: {
				type: String,
				default: '预览'
			}
		},
		data() {
			return {
				visible: false,
				isLoadFinished: false
			}
		},
		watch: {
			previewVisible(visible) {
				this.$data.visible = visible
			}
		},
		methods: {
			// iframe加载空白
			// isLoadIFrame() {
			//   let that = this
			//   this.$data.isLoadFinished = false
			//   let iframe = document.querySelector("#iframeNotice")
			//   if (iframe) {
			//     if (iframe.attachEvent) {
			//       iframe.attachEvent("onload", function () {
			//         // iframe.style.visibility = ""
			//         that.$data.isLoadFinished = true
			//       })
			//     } else {
			//       iframe.onload = function () {
			//         // iframe.style.visibility = ""
			//         that.$data.isLoadFinished = true
			//       }
			//     }
			//   }
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.iframe-content {
		text-align: center;
		// 该属性替代 frameborder=0
		border: 0;
		border-radius: 10px;
	}

	.tips {
		display: block;
		margin-bottom: 2px;
		color: red;
		font-size: 12px;

		&::before {
			content: "*";
			margin-right: 6px;
		}
	}
</style>
