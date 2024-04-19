<template>
	<div>
		<router-view v-if="isRouterAlive"></router-view>
	</div>
</template>

<script>
	import commonData from '@/utils/common-data'

	export default {
		provide() {
			return {
				reload: this.reload
			}
		},
		data() {
			return {
				isRouterAlive: true
			}
		},
		methods: {
			initApp() {
				commonData.root_vue = this
				window.onresize = () => {
					commonData.window_inner_height = window.innerHeight
				}
			},
			reload() {
				this.isRouterAlive = false
				this.$nextTick(() => {
					this.isRouterAlive = true
				})
			}
		},
		created() {
			this.initApp()
		}
	}
</script>

<style scoped></style>
