<template>
	<div style="height: 100vh">
		<r-page-error :status="403" :is-back="false"></r-page-error>
		<r-loading text="鉴权处理中..." :icon-size="25"></r-loading>
	</div>
</template>
<script>
	export default {
		name: 'RAuth'
	}
</script>
<style scoped>
	::v-deep .spin-flex {
		min-height: max-content;
	}
</style>
