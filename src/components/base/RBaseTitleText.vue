<template>
	<div class="title">
    <span @mouseover="isHoverTitle = true" @mouseleave="isHoverTitle = false">
      <span class="title_h1" :style="{ color: isHoverTitle ? color : 'rgba(0, 0, 0, 0.65)' }">
        {{ text }}
      </span>
    </span>
		<div class="underline">
			<div class="underline-content">
				<div class="lines" :style="{ background: color }"></div>
				<div class="lines" :style="{ background: color }"></div>
				<div class="lines" :style="{ background: color }"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'RTitleText',
		props: {
			text: {type: String, default: '标题文字'},
			color: {type: String, default: '#2792f2'}
		},
		data() {
			return {
				isHoverTitle: false
			}
		}
	}
</script>
<style lang="scss" scoped>
	.title {
		margin: 40px;
		height: 50px;
		text-align: center;
		cursor: pointer;

		.title_h1 {
			position: relative;
			font-weight: normal;
			font-size: 2em;
		}

		span:hover .title_h1 {
			transform: rotate(360deg);
			font-size: 30px;
		}

		.underline {
			margin: 10px auto 50px;

			.underline-content {
				width: 183px;
				overflow: hidden;
				margin: 0 auto;

				.lines {
					float: left;
					height: 4px;
					border-radius: 2px;
				}

				.lines:first-child {
					width: 10px;
					margin-right: 11px;
				}

				.lines:nth-child(2) {
					width: 123px;
					margin-right: 10px;
				}

				.lines:last-child {
					width: 19px;
					margin-right: 0;
				}
			}
		}
	}
</style>
