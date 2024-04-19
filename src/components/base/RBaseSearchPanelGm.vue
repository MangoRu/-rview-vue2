<template>
	<r-panel class="m-top-10">
		<template #left>
			<div>
        <span class="m-right-10">
          <r-form-custom
		          v-if="isDefault"
		          :select-list="selectList"
		          :input-list="inputList"
          ></r-form-custom>
	        <!-- 可自定义搜索条件 -->
          <slot name="left"></slot>
        </span>
				<Button
						v-if="isSearch"
						icon="ios-search"
						type="primary"
						ghost
						@click="
            () => {
              $emit('on-search')
            }
          "
				></Button>
			</div>
		</template>
		<template #right>
			<slot></slot>
		</template>
	</r-panel>
</template>
<script>
	export default {
		name: 'RSearchPanelGm',
		props: {
			selectList: {
				type: Array,
				default() {
					return []
				}
			},
			inputList: {
				type: Array,
				default() {
					return []
				}
			},
			isDefault: {
				type: Boolean,
				default: true
			},
			isSearch: {
				type: Boolean,
				default: true
			}
		}
	}
</script>
<style scoped>
	@import "../../assets/styles/grid.scss";

	::v-deep .ivu-select {
		font-weight: 400;
	}
</style>
