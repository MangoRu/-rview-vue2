<template>
	<div class="spin-flex">
		<Spin :fix="isFix" v-if="text" :size="size">
			<Icon type="ios-loading" :size="iconSize" class="demo-spin-icon-load"></Icon>
			<div :style="{ fontSize: iconSize - 4 + 'px' }">{{ text }}</div>
		</Spin>
		<Spin v-else :fix="isFix" :size="size"></Spin>
	</div>
</template>
<script>
	export default {
		name: 'RLoading',
		props: {
			text: {
				type: String,
				default: null
			},
			size: {
				type: String,
				default: 'large'
			},
			isFix: {
				type: Boolean,
				default: true
			},
			iconSize: {
				type: Number,
				default: 18
			}
		}
	}
</script>
<style scoped>
	.spin-flex {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100%;
	}

	.demo-spin-icon-load {
		animation: ani-demo-spin 1s linear infinite;
		margin-bottom: 4px;
	}

	@keyframes ani-demo-spin {
		from {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
