<template>
	<r-panel :is-column-direction="true">
		<div>
			<div v-if="$slots.codeExample">
				<slot name="codeExample"></slot>
			</div>
		</div>
		<Divider orientation="left" style="z-index: 9">{{ codeTitle }}</Divider>
		<div class="m-left-20">
			<div v-if="codeDesc || $slots.codeDesc">
				<slot name="codeDesc">
					{{ codeDesc }}
				</slot>
			</div>
		</div>
		<div class="code-content">
			<p v-if="collapsed" @click="collapsed = false">
				<Icon type="ios-arrow-down" class="m-right-5"/>
				显示代码
			</p>
			<div v-else>
				<div class="markdown-body">
					<div style="display: flex; justify-content: flex-end; align-items: center" class="m-right-10">
						<p class="copy-btn" @click="handleClickCopy">
							<Tooltip content="点击复制" placement="top">
								<Icon type="md-copy" style="cursor: pointer"/>
								<span style="font-size: 12px">复制代码</span>
							</Tooltip>
						</p>
						<span style="font-size: 12px" v-if="false">当前暂不支持复制代码功能</span>
					</div>
					<!-- 默认插槽，代码片段 -->
					<slot class="slot"></slot>
				</div>
				<p class="m-top-10" @click="collapsed = true">
					<Icon type="ios-arrow-up" class="m-right-5"/>
					收缩代码
				</p>
			</div>
		</div>
	</r-panel>
</template>

<script>
	export default {
		name: 'CustomContentCodeExamples',
		props: {
			codeTitle: {type: String, default: '代码标题'},
			codeDesc: {type: String, default: '代码说明'}
		},
		data() {
			return {
				collapsed: true
			}
		},
		methods: {
			handleClickCopy(event) {
				this.$emit('on-click-copy', event)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.code-content {
		margin-top: 20px;
		padding-top: 15px;
		border-top: 1px dashed rgba(95, 99, 104, 0.2);
		font-family: Consolas, Menlo, Courier, monospace;

		p {
			text-align: center;
			cursor: pointer;
		}

		p:hover {
			color: #2d8cf0;
		}
	}
</style>
