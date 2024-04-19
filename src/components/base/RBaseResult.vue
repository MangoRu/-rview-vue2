<template>
	<div id="basic-result">
		<div class="result-icon" :style="{ color: iconColorElement }">
			<slot name="icon">
				<span :style="{ fontSize: iconSize + 'px' }" :class="iconElement"></span>
				<Icon :type="iconElement" :size="iconSize"></Icon>
			</slot>
		</div>
		<div class="result-title" v-if="title || $slots.title">
			<slot name="title">
				<span v-text="title"></span>
			</slot>
		</div>
		<div class="result-desc" v-if="subTitle || $slots.subTitle">
			<slot name="subTitle">
				<span v-text="subTitle"></span>
			</slot>
		</div>
		<div class="result-extra" v-if="$slots.extraResult">
			<slot name="extraResult"></slot>
		</div>
		<div class="result-btn" v-if="$slots.btnResult">
			<slot name="btnResult"></slot>
		</div>
	</div>
</template>

<script>
	const IconMap = {
		success: {icon: 'md-checkmark-circle', color: '#19be6b'},
		warning: {icon: 'ios-warning-outline', color: '#ff9900'},
		error: {icon: 'ios-close-circle', color: '#ed4014'},
		info: {icon: 'ios-information-circle', color: '#2db7f5'}
	}

	export default {
		name: 'RResult',
		props: {
			icon: {
				type: String,
				default: 'ios-information-circle'
			},
			iconColor: {
				type: String,
				default: '#409EFF'
			},
			iconSize: {
				type: Number,
				default: 110
			},
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: '请核对以下信息后，再重新提交'
			}
		},
		computed: {
			iconElement() {
				const icon = this.$props.icon
				return icon && IconMap[icon] ? IconMap[icon].icon : icon
			},
			iconColorElement() {
				const icon = this.$props.icon
				const iconColor = this.$props.iconColor
				return icon && IconMap[icon] ? IconMap[icon].color : iconColor
			}
		}
	}
</script>

<style lang="scss" scoped>
	#basic-result {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;

		.result-title {
			font-size: 20px;
			font-weight: bolder;
		}

		.result-desc {
			margin: 10px auto 20px;
			color: rgba(140, 140, 140, 1);
		}

		.result-extra {
			width: 50%;
			padding: 30px;
			background-color: rgba(248, 248, 250, 1);
			border-radius: 5px;
		}

		.result-btn {
			margin: 20px auto;
		}
	}
</style>
