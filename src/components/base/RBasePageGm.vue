<template>
	<r-page-header>
		<template #icon>
			<Divider type="vertical"/>
		</template>
		<template #title>
      <span>
        <Icon size="18" color="rgba(45, 140, 240,.8)" :type="icon"/>
        <span class="title">{{ title }}</span>
      </span>
		</template>
		<slot></slot>
	</r-page-header>
</template>

<script>
	export default {
		name: 'RPageHeaderGm',
		props: {
			title: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: 'ios-home'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ivu-divider,
	.ivu-divider-vertical {
		margin: 0;
		background: #2591f2;
		width: 4px;
		height: 25px;
	}

	.title {
		font-weight: normal !important;
		margin-left: 8px;
		letter-spacing: 1px;
	}
</style>
