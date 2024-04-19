<template>
	<div :style="{ borderTop: computeIsBorderTopShow ? '1px solid #e9e9e9' : '' }">
		<Tabs v-model="itemTab" type="card" v-if="tabList.length > 1" :animated="false">
			<TabPane
					v-for="(item, index) in itemsListByType"
					:key="`${index}-${item}`"
					:label="`${item.label}`"
					:name="item.value"
			>
				<div class="pane-content">
					<div v-for="(item, itemIndex) in item.itemList" :key="`${itemIndex + 1}-${item}`">
						<div :class="computeContentCardClass(item)">
							<Checkbox v-model="item.checked">
								<Tooltip
										v-if="isGoods"
										:content="item.tooltipContent"
										transfer
										placement="top"
										max-width="400"
										class="card-text"
								>
									<div class="card-text" v-if="item.itemShow">{{ `${item.itemShow}` }}</div>
								</Tooltip>
								<label class="card-text" v-else-if="item.itemShow">{{ `${item.itemShow}` }}</label>
								<!--      注意：所传列表项若需展示数字输入框，则要带showCount属性      -->
								<InputNumber
										:disabled="disabledCount || !item.checked"
										v-show="item.showCount"
										class="card-number"
										v-model="item.count"
										:min="1"
										@on-change="(count) => handleChangeCount(count, item)"
								></InputNumber>
							</Checkbox>
						</div>
					</div>
				</div>
			</TabPane>
		</Tabs>
		<!--  FIXME form表单导致页面加载延迟 itemsList参数 => iView 渲染组件过多导致<当前一千多条> v-if控制Modal弹框为true才显示 -->
		<div class="pane-content" v-else-if="itemsListData.length > 0">
			<div v-for="(item, itemIndex) in itemsListData" :key="`${itemIndex}-${item}`">
				<!--      原版 => rockman -->
				<!--        <Checkbox v-model="item.checked"></Checkbox>-->
				<!--        <div class="card-text" v-if="item.itemShow">{{ `${item.itemShow}` }}</div>-->
				<!--        <InputNumber-->
				<!--          :disabled="disabledCount"-->
				<!--          v-show="item.count"-->
				<!--          class="card-number"-->
				<!--          v-model="item.count"-->
				<!--          :min="1"-->
				<!--        ></InputNumber>-->
				<Checkbox v-model="item.checked" :class="computeContentCardClass(item)">
					<Tooltip
							v-if="isGoods"
							:content="item.tooltipContent"
							transfer
							placement="top"
							max-width="400"
							class="card-text"
					>
						<div class="card-text" v-if="item.itemShow">{{ `${item.itemShow}` }}</div>
					</Tooltip>
					<div class="card-text" v-else-if="item.itemShow">{{ `${item.itemShow}` }}</div>
					<InputNumber
							:disabled="disabledCount || !item.checked"
							v-show="item.showCount"
							class="card-number"
							v-model="item.count"
							:min="1"
							@on-change="(count) => handleChangeCount(count, item)"
					></InputNumber>
				</Checkbox>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RItemsShow',
		props: {
			isBorderTopShow: {type: Boolean, default: false},
			disabledCount: {type: Boolean, default: false},
			tab: {type: String || Number},
			tabList: {
				type: Array,
				default: () => {
					return []
				}
			},
			itemsList: {
				type: Array,
				default: () => {
					return []
				}
			},
			isCardType: {type: Boolean, default: true},
			isCardWidthAuto: {type: Boolean, default: false},
			// 不良人服务器类型专用
			isServerType: {type: Boolean, default: false},
			// 不良人游戏商品
			isGoods: {type: Boolean, default: false}
		},
		data() {
			return {
				itemsListData: [],
				itemsListByType: [],
				itemTab: null
			}
		},
		watch: {
			itemsListData: {
				handler(val) {
					this.$emit('on-items-data', val)
				},
				deep: true
			},
			itemsList: {
				handler(val) {
					this.initItemsListData()
					this.$data.itemsListData = val
				},
				deep: true
			}
		},
		computed: {
			computeIsBorderTopShow() {
				return this.$props.isBorderTopShow
			}
		},
		methods: {
			handleChangeCount(count, item) {
				item.count = count > 0 ? count : 1
			},
			computeContentCardClass(item) {
				if (this.$props.isServerType) {
					return 'content content-server'
				} else {
					if (!this.$props.isCardType) {
						return 'content'
					} else if (item.checked) {
						return this.$props.isCardWidthAuto
								? 'content-card content-card-checked content-width-auto'
								: 'content-card content-card-checked content-width-fix'
					} else {
						return this.$props.isCardWidthAuto
								? 'content-card content-width-auto'
								: 'content-card content-width-fix'
					}
				}
			},
			computeItemsListByType(tabList, itemsList) {
				return tabList.map((itemType) => {
					let itemTypeList = itemsList.filter((item) => {
						// 考勤
						return item.typeId === itemType.id
						// return item.rewardType === itemType.id
					})
					return {...itemType, itemList: itemTypeList}
				})
			},
			initItemsListData() {
				this.$data.itemsListData = JSON.parse(JSON.stringify(this.$props.itemsList))
				if (this.$props.tabList.length > 1) {
					this.$data.itemsListByType = this.computeItemsListByType(
							this.$props.tabList,
							this.$props.itemsList
					)
				}
			}
		},
		mounted() {
			this.initItemsListData()
			this.$data.itemTab = this.$props.tab
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/common/scrollbar.scss";

	.pane-content {
		// before 550
		max-height: 600px;
		overflow-y: auto;
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;

		.content-server {
			min-width: 300px;
		}

		.content-card,
		.content {
			display: flex;
			align-items: center;
			margin: 0 15px 3px 0;
		}

		.content {
			background-color: transparent;

			.card-text {
				//font-weight: bolder;
				margin-left: 5px;
			}
		}

		.content-width-auto {
			max-width: 280px;
		}

		.content-width-fix {
			width: 280px;
		}

		.content-card {
			border: 1px solid #ccc;
			border-radius: 5px;
			padding: 5px;

			&:nth-child(5n) {
				margin-right: 0;
			}

			.card-text {
				display: inline-block;
				margin: 0 20px 0 5px;
				color: #333;
				font-size: 12px;
				flex: 1;
			}

			.card-number {
				width: 72px;
			}
		}

		.content-card-checked {
			border-color: #40a9ff;

			.card-text {
				color: #2d8cf0;
			}

			// FIXME 样式穿透错误 /deep/ 替换成 ::v-deep
			::v-deep .ivu-input-number-input {
				color: #2d8cf0 !important;
			}
		}
	}
</style>
