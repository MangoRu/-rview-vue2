<template>
	<div>
		<r-layout
				ref="layOutRef"
				:is-show-sider="true"
				:style="{ height: commonData.window_inner_height + 'px' }"
				:is-content-bg-white="true"
		>
			<template #header>
				<the-r-view-header></the-r-view-header>
			</template>
			<template #sider>
				<Sider class="base-side-bar scroll-hide" :width="siderWidth"
				       hide-trigger>
					<the-r-view-sider :sider-width="siderWidth"></the-r-view-sider>
				</Sider>
			</template>
			<slot ref="scrollTestRef"></slot>
		</r-layout>
	</div>
</template>
<script>
	import TheRViewHeader from 'components/rview/TheRViewHeader'
	import commonData from 'utils/common-data'
	import TheRViewSider from 'components/rview/TheRViewSider'
	import bus from 'utils/bus'

	export default {
		name: 'CommonComponents',
		components: {TheRViewHeader, TheRViewSider},
		inject: ['reload'],
		data() {
			return {
				commonData,
				siderWidth: 256
			}
		},
		methods: {
			initContentScrollTop() {
				this.$refs.layOutRef.handleBackToTop(100)
			},
			initSiderWidth() {
				this.$data.siderWidth = window.innerWidth > 992 ? 256 : 69
			}
		},
		created() {
			this.initSiderWidth()
			window.onresize = () => {
				this.initSiderWidth()
				// 无感刷新
				this.reload()
			}
		},
		mounted() {
			bus.$on('on-init-scroll', () => {
				this.initContentScrollTop()
			})
		},
		beforeDestroy() {
			bus.$off('on-init-scroll')
		}
	}
</script>
<style scoped>
	@import "~@/assets/styles/common/layout.scss";

	/* FIXME 侧边栏无菜单项部分默认无右边框处理 */
	/deep/ .ivu-layout-sider-children {
		border-right: 1px solid rgba(234, 234, 234, 1) !important;
	}
</style>
