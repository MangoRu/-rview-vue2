<template>
	<Card
			class="setting-card"
			:style="{ width: width + 'px', height: height + 'px', border: isBorder ? '' : 'none' }"
	>
		<div class="card-content">
			<Icon :type="iconType" :size="iconSize" :color="iconColor"/>
			<p
					class="m-top-10 letter-spacing-1 card-text"
					v-if="cardText.length <= parseInt(((7 * width) / 135).toString())"
			>
				{{ cardText }}
			</p>
			<Tooltip :content="cardText" :transfer="true" v-else>
				<p class="m-top-10 letter-spacing-1 card-text">
					{{ cardText.substring(0, width / 27) }}...
				</p>
			</Tooltip>
		</div>
	</Card>
</template>
<script>
	export default {
		name: 'RCard',
		props: {
			width: {type: Number, default: 135},
			height: {type: Number, default: 90},
			iconSize: {type: Number, default: 28},
			iconType: {type: String, default: 'ios-alarm'},
			iconColor: {type: String, default: '#5cadff'},
			cardText: {type: String, default: 'Text'},
			isBorder: {type: Boolean, default: true}
		}
	}
</script>
<style lang="scss" scoped>
	.setting-card {
		margin-right: 10px;
		cursor: pointer;
		overflow: hidden;
		display: inline-block;

		.card-content {
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;

			.card-text {
				font-size: 13px;
			}
		}
	}
</style>
