<template>
	<Row>
		<Col span="12">
			<div class="number-info">
				<div class="sub-title">{{ subTitle[0] }}</div>
				<div class="info-value">
					<span class="total">{{ totalList[0] }}</span>
					<span class="trend">
            <span class="trend-text">{{ trendList[0] }}</span>
            <Icon type="md-arrow-dropup" class="trend-icon" color="#3f8600"/>
          </span>
				</div>
			</div>
		</Col>
		<Col span="12">
			<div class="number-info">
				<div class="sub-title">{{ subTitle[1] }}</div>
				<div class="info-value">
					<span class="total">{{ totalList[1] }}</span>
					<span class="trend">
            <span class="trend-text">{{ trendList[1] }}</span>
            <Icon type="md-arrow-dropdown" class="trend-icon" color="#cf1322"/>
          </span>
				</div>
			</div>
		</Col>
	</Row>
</template>

<script>
	export default {
		name: 'RNumberInfo',
		props: {
			subTitle: {
				type: Array,
				default: () => {
					return ['subTitle1', 'subTitle2']
				}
			},
			totalList: {
				type: Array,
				default: () => {
					return [100, 0]
				}
			},
			trendList: {
				type: Array,
				default: () => {
					return [100, 0]
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.number-info {
		margin: 0 10px;

		.sub-title,
		.info-value {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			word-break: break-all;
		}

		.sub-title {
			height: 22px;
			color: #808695;
			font-size: 14px;
			line-height: 22px;
		}

		.info-value {
			display: flex;
			margin-top: 8px;
			align-content: center;
			align-items: center;

			.total,
			.trend {
				display: inline-block;
				height: 32px;
				line-height: 32px;
			}
		}

		.total {
			margin-right: 32px;
			color: #515a6e;
			font-size: 24px;
		}

		.trend {
			margin-right: 0;
			vertical-align: top;
			font-size: 14px;
			color: #808695;

			.trend-text,
			.trend-icon {
				vertical-align: middle;
			}

			.trend-icon {
				font-size: 18px;
			}
		}
	}
</style>
