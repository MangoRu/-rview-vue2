<template>
	<div id="base-error">
		<div class="error-svg" :style="{ backgroundImage: 'url(' + errorImgElement + ')' }"></div>
		<div class="error-content">
			<h1>{{ status }}</h1>
			<div class="desc">{{ contentShow }}</div>
			<div class="actions" v-if="isBack || $slots.actions">
				<slot name="actions">
					<Button type="primary" @click="handleClickToIndex">返回首页</Button>
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
	const ErrorSvgMap = {
		403: {
			errorImg: 'https://file.iviewui.com/iview-pro/icon-403.svg',
			errorImgColor: 'https://file.iviewui.com/iview-pro/icon-403-color.svg'
			// errorImg: require('../../assets/img/common/icon_403.svg'),
			// errorImgColor: require('../../assets/img/common/icon_403_color.svg')
		},
		404: {
			errorImg: 'https://file.iviewui.com/iview-pro/icon-404.svg',
			errorImgColor: 'https://file.iviewui.com/iview-pro/icon-404-color.svg'
			// errorImg: require("../../assets/img/common/icon_404.svg"),
			// errorImgColor: require('../../assets/img/common/icon_404_color.svg')
		},
		500: {
			errorImg: 'https://file.iviewui.com/iview-pro/icon-500.svg',
			errorImgColor: 'https://file.iviewui.com/iview-pro/icon-500-color.svg'
			// errorImg: require('../../assets/img/common/icon_500.svg'),
			// errorImgColor: require('../../assets/img/common/icon_500_color.svg')
		}
	}

	export default {
		name: 'RPageError',
		props: {
			errorImg: {
				type: String,
				default() {
					return 'https://file.iviewui.com/iview-pro/icon-404-color.svg'
				}
			},
			status: {
				type: Number,
				default: 404
			},
			content: {
				type: String,
				default: '抱歉，页面出错了'
			},
			isBack: {
				type: Boolean,
				default: true
			},
			isColor: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			contentShow() {
				const status = this.$props.status
				const content = this.$props.content
				return status === 403
						? '抱歉，你无权访问该页面'
						: status === 404
								? '抱歉，你访问的页面不存在'
								: status === 500
										? '抱歉，服务器出错了'
										: content
			},
			errorImgElement() {
				const status = this.$props.status
				const errorImg = this.$props.errorImg
				const isColor = this.$props.isColor
				return status && ErrorSvgMap[status]
						? isColor
								? ErrorSvgMap[status].errorImgColor
								: ErrorSvgMap[status].errorImg
						: errorImg
			}
		},
		methods: {
			handleClickToIndex() {
				this.$emit('on-click-back')
			}
		}
	}
</script>

<style lang="scss" scoped>
	#base-error {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;
		height: 100%;

		.error-svg {
			margin: 0 50px;
			width: 100%;
			max-width: 430px;
			height: 360px;
			background-repeat: no-repeat;
			background-position: 50% 50%;
			background-size: contain;
		}

		.error-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 10px;

			h1 {
				margin-bottom: 24px;
				color: #515a6e;
				font-weight: 600;
				font-size: 72px;
				line-height: 72px;
			}

			.desc {
				margin-bottom: 16px;
				color: #808695;
				font-size: 20px;
				line-height: 28px;
			}
		}
	}
</style>
