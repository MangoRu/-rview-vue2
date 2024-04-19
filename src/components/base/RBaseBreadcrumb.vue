<template>
	<div class="breadcrumb-nav">
		<Breadcrumb class="breadcrumb">
			<BreadcrumbItem v-for="(item, index) in breadcrumbList" :key="index">
				<span v-text="item.name ? item.name : item"></span>
			</BreadcrumbItem>
		</Breadcrumb>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'RBreadcrumb',
		props: {
			breadcrumbList: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>
<style scoped>
	.breadcrumb-nav {
		margin: 2px 0 10px 0;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
</style>
