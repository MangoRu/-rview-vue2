<template>
	<div class="page-header-container">
		<div v-if="breadcrumb || $slots.breadcrumb">
			<slot name="breadcrumb">
				<r-breadcrumb :breadcrumb-list="breadcrumb"></r-breadcrumb>
			</slot>
		</div>
		<div class="title-area">
			<div>
        <span v-if="icon || $slots.icon">
          <slot name="icon">
            <Icon size="20" :type="icon"/>
          </slot>
        </span>
				<span class="title" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
				<span class="sub-title">{{ subTitle }}</span>
			</div>
			<span class="title-actions" v-if="$slots.titleExtra">
        <slot name="titleExtra"></slot>
      </span>
		</div>
		<div v-if="$slots.extra">
			<slot name="extra"></slot>
		</div>
		<div v-if="$slots.footer">
			<slot name="footer"></slot>
		</div>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'RPageHeader',
		props: {
			breadcrumb: {
				type: Array
			},
			icon: {
				type: String,
				default: 'ios-home'
			},
			title: {
				type: String,
				default: 'Title'
			},
			subTitle: {
				type: String,
				default: ''
			}
		}
	}
</script>
<style lang="scss" scoped>
	.page-header-container {
		display: flex;
		flex-direction: column;

		.title-area {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				font-size: 16px;
				font-weight: bolder;
				margin: 0 10px;
			}

			.sub-title {
				color: #8c8c8c;
				margin-right: 10px;
			}

			.title-actions {
			}
		}
	}
</style>
