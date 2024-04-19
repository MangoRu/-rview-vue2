<template>
	<div
			:class="isColumnDirection ? 'column-panel white-panel' : 'row-panel white-panel'"
			:style="fullHeight ? { flex: 1, height: 0, overflowY: 'auto' } : {}"
	>
		<slot name="left" v-if="$slots.left"></slot>
		<slot></slot>
		<slot name="right" v-if="$slots.right"></slot>
	</div>
</template>
<script>
	export default {
		name: 'RPanel',
		// 父容器需要为flex布局
		props: {
			fullHeight: {
				type: Boolean,
				default: false
			},
			isColumnDirection: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style lang="scss" scoped>
	.row-panel {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 5px;
	}

	.column-panel {
		display: flex;
		flex-direction: column;
		margin-bottom: 5px;
	}

	.white-panel {
		border-radius: 3px;
		background-color: #fff;
		border: 1px solid #e8eaec;
		padding: 10px 12px;
		box-shadow: none;
		transition: all 0.2s ease-in-out;
		//min-width: 1020px;
	}
</style>
