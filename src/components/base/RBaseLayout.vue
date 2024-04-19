<template>
	<div class="app-layout">
		<Layout>
			<slot name="header">
				<r-header v-bind="$attrs" v-on="$listeners"></r-header>
			</slot>
			<Layout style="height: calc(100% - 60px)" class="layout-content">
				<div v-if="$slots.sider || isShowSider">
					<slot name="sider"></slot>
				</div>
				<Layout
						:ref="isShowBackToTop ? 'layoutContentContainer' : ''"
						:style="{ height: isShowSider ? '100%' : 'calc(100% - 60px)' }"
						:class="isShowSider ? '' : 'layout-content'"
				>
					<Content
							class="content"
							ref="contentContainer"
							:style="{ backgroundColor: isContentBgWhite ? '#fff' : 'rgba(242, 247, 250, 1)' }"
					>
						<transition name="fade-transform" mode="out-in">
							<div
									:style="{
                  backgroundColor: isContentBgWhite ? '#fff' : 'rgba(242, 247, 250, 1)',
                  padding: contentPadding ? contentPadding + 'px' : '24px'
                }"
									style="min-height: calc(100% - 69px)"
									class="content-area"
							>
								<slot></slot>
							</div>
						</transition>
						<slot name="footer" v-if="isShowSider && isShowFooter">
							<r-footer></r-footer>
						</slot>
					</Content>
					<BackTop :right="60" :bottom="125" @on-click="handleBackToTop(40)" v-if="isShowBackToTop">
						<div class="back-to-top">
							<Icon type="md-arrow-dropup" style="color: #409eff"/>
						</div>
					</BackTop>
				</Layout>
			</Layout>
			<div v-if="!isShowSider && isShowFooter">
				<slot name="footer">
					<r-footer></r-footer>
				</slot>
			</div>
		</Layout>
	</div>
</template>

<script>
	export default {
		name: 'RLayout',
		props: {
			isShowFooter: {type: Boolean, default: true},
			isShowSider: {type: Boolean, default: false},
			isContentBgWhite: {type: Boolean, default: false},
			// FIXME 页面内嵌该组件返回顶部失效,只允许有一个ref才有效
			isShowBackToTop: {type: Boolean, default: true},
			contentPadding: {type: Number}
		},
		data() {
			return {
				scrollEle: null
			}
		},
		methods: {
			/**
			 * 返回顶部
			 * @param step - 时间间隔的幅度大小，用以控制速度
			 */
			handleBackToTop(step) {
				let timer
				let scrollEle = this.$refs.layoutContentContainer.$el
				scrollEle.scrollTop -= step
				if (scrollEle.scrollTop > 0) {
					timer = setTimeout(() => this.handleBackToTop(step), 15)
				} else {
					// 回到顶部清除
					clearTimeout(timer)
				}
			},
			handleScroll() {
				let scrollEle = this.$refs.layoutContentContainer.$el
				let backTop = document.querySelector('.ivu-back-top')
				if (scrollEle.scrollTop > 100) {
					backTop.style.display = 'block'
				} else {
					backTop.style.display = 'none'
				}
			}
		},
		mounted() {
			if (this.$props.isShowBackToTop) {
				let div = this.$refs.layoutContentContainer.$el
				div.addEventListener('scroll', this.handleScroll)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/common/layout";
	@import "../../assets/styles/common/transition";

	.app-layout {
		position: relative;
		overflow: hidden;
	}

	.layout-content {
		overflow-y: auto;
	}

	.back-to-top {
		position: fixed;
		background-color: #fff;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		color: #409eff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
		cursor: pointer;
		z-index: 999;
	}
</style>
