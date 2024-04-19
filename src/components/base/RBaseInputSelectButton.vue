<template>
	<div style="width: 100%">
		<Button
				type="primary"
				@click="handleClickSelectBtn"
				:long="isLong"
				:ghost="isGhost"
				:disabled="disabled"
		>
			{{ `选择${name}` }}
		</Button>
		<span v-if="itemsList.length === 0" style="padding-left: 10px; font-size: 13px; color: #2b85e4">
      {{ `* ${name}列表为空！` }} {{ `${name.indexOf("商品") !== -1 ? "请选择渠道" : ""}` }}
    </span>
		<slot></slot>
		<!--    value={{ value }}-&#45;&#45;{{ selectedList.length }}-->
		<div v-if="selectedList.length > 0" class="item-selected-show">
			<div v-if="isSelectedAll" class="item-text">
				{{ `所有${name}` }}
			</div>
			<div v-else>
				<Tag v-for="item in selectedList" :key="item.id" class="item-tag">
					{{
					item.itemShowSelected
					? item.itemShowSelected
					: item.itemShow
					? item.itemShow
					: item.label
					? item.label
					: "-"
					}}
				</Tag>
			</div>
		</div>
		<Modal
				v-model="modalVisible"
				width="80%"
				:title="`选择${name}`"
				:mask-closable="false"
				:transition-names="[]"
				:styles="{ top: '30px' }"
		>
			<Alert v-if="isItemNum" show-icon type="warning">
				{{ `${name}可选的上限数量为${isItemNum}` }}
			</Alert>
			<Alert v-if="maxPriceNum" show-icon type="warning">
				{{ `${name}可选的上限总价值为${maxPriceNum}，当前选中商品的总价值为` }}
				<strong :class="selectedPriceAmount > maxPriceNum ? 'text-amount-error' : ''">{{
					selectedPriceAmount
					}}</strong>
			</Alert>
			<div v-if="modalVisible">
				<!--  追加覆盖操作    -->
				<div class="assign-cover" v-if="isShowCover">
					<Input class="input" v-model="assign.start"/>
					<Input class="input m-left-5" v-model="assign.end"/>
					<Button type="primary" class="m-left-20" @click="handleClickItemAction('add')"
					>追加
					</Button
					>
					<Button type="primary" class="m-left-5" @click="handleClickItemAction('cover')"
					>覆盖
					</Button
					>
				</div>
				<r-checkbox-all
						:is-goods="isGoods"
						:disabled-count="disabledCount"
						:name="name"
						:tab="tab"
						:tabList="tabList"
						:itemsList="itemListCustom"
						:is-card-type="isCardType"
						:is-server-type="isServerType"
						ref="checkItemRef"
						@on-checked-all="handleWatchCheckedAll"
						@on-items-data="handleItemsListData"
				></r-checkbox-all>
			</div>
			<r-loading :is-fix="false" v-else></r-loading>
			<template slot="footer">
				<Button @click="handleCloseModal">取消</Button>
				<Button type="primary" @click="handleSubmitSelectedData">确定</Button>
			</template>
		</Modal>
	</div>
</template>

<script>
	export default {
		name: 'RInputSelectButton',
		props: {
			name: {type: String, required: true},
			disabled: {type: Boolean, default: false},
			disabledCount: {type: Boolean, default: false},
			isItemNum: {type: Number},
			isGhost: {type: Boolean, required: false},
			isLong: {type: Boolean, default: false},
			searchRequiredParams: {type: String || Number || Boolean || Array || Object},
			searchRequiredDesc: {type: String, default: ''},
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
			//  默认选中值
			value: {
				type: [String, Number],
				default() {
					return undefined
				}
			},
			// 不良人服务器类型专用
			isServerType: {type: Boolean, default: false},
			isShowCover: {type: Boolean, default: false},
			// 不良人 选择商品专用 [如充值补单的选择商品]
			isGoods: {type: Boolean, default: false},
			maxPriceNum: {type: Number}
		},
		data() {
			return {
				selectedList: [],
				modalVisible: false,
				isSelectedAll: false,
				itemListCustom: null,
				assign: {
					start: 1,
					end: 1
				},
				selectedPriceAmount: 0,
				selectedItemListUnhandled: []
			}
		},
		watch: {
			// 弹框内选中的项目列表，监听价值总额时使用
			selectedItemListUnhandled: {
				handler(val) {
					let amount = 0
					if (val.length > 0) {
						for (let i in val) {
							if (val[i].count) {
								amount = amount + val[i].price * val[i].count
							}
						}
					}
					if (this.$props.maxPriceNum) {
						this.$data.selectedPriceAmount = amount
					}
					this.$emit('on-change', val)
				},
				deep: true
			},
			selectedPriceAmount: {
				handler(val) {
					if (val > this.$props.maxPriceNum) {
						this.$Message.error(`超额，您当前可选择的商品总价值上限为${this.$props.maxPriceNum}！`)
					}
				},
				deep: true
			},
			itemsList: {
				immediate: true,
				handler() {
					this.handleItemList(this.$props.value)
				}
			},
			selectedList(selectedList) {
				if (selectedList.length > 0) {
					this.$emit('on-change', selectedList)
				}
			},
			value: {
				handler(val) {
					if (!val) {
						this.initItemListEmptyData()
					} else {
						this.handleItemList(val)
					}
				},
				deep: true
			}
		},
		methods: {
			handleClickItemAction(type) {
				const start = parseInt(this.$data.assign.start)
				const end = parseInt(this.$data.assign.end)
				if (start >= end) {
					this.$Message.error('起始值必须小于结束值哦')
					return
				}
				if (type === 'add') {
					//  追加
					this.$data.itemListCustom.map((element) => {
						if (start <= element.value && element.value <= end) {
							element.checked = true
						}
						return element
					})
				} else if (type === 'cover') {
					//  覆盖
					this.$data.itemListCustom.map((element) => {
						if (start <= element.value && element.value <= end) {
							element.checked = true
						} else {
							element.checked = false
						}
						return element
					})
				}
			},
			handleItemsListData(itemListData) {
				// this.$data.itemListCustom = itemListData
				// this.$data.selectedList = itemListData.filter((item) => {
				//   return item.checked
				// })
				this.$data.selectedItemListUnhandled = itemListData
			},
			handleItemStrFormat(itemsStr, start, end) {
				return itemsStr.split(',').slice(start, end).toString().replaceAll(',', ':')
			},
			handleItemList(val) {
				if (val) {
					let value = val
					// 奖励道具格式处理  排行道具与星级道具处理
					if (this.$props.name.indexOf('奖励道具') !== -1) {
						let itemsStr =
								this.handleItemStrFormat(value, 1, 3) +
								',' +
								this.handleItemStrFormat(value, 4, 6) +
								',' +
								this.handleItemStrFormat(value, 7, 9)
						value = itemsStr.replaceAll(',0:0', '')
					} else if (
							this.$props.name.indexOf('排行道具') !== -1 ||
							this.$props.name.indexOf('星级道具') !== -1
					) {
						value = val + ':1'
					}
					let defaultList = value.toString().replaceAll('；', ';').replaceAll(';', ',').split(',')
					// console.log("---------defaultList", defaultList)
					let itemList = JSON.parse(JSON.stringify(this.$props.itemsList))
					itemList.forEach((item) => {
						if (item.value && defaultList.includes(item.value.toString())) {
							item.checked = true
							item.count = 0
						} else if (defaultList[0].includes(':')) {
							//  道具选中项格式转换
							let rewardsDefaultList = defaultList.map((rewards) => {
								let index = rewards.indexOf(':')
								let idValue = rewards.substr(0, index)
								let countValue = rewards.substr(index + 1)
								return {
									id: idValue,
									count: parseInt(countValue)
								}
							})
							// 选中项处理
							let matched = rewardsDefaultList.find((rewards) => {
								return rewards.id === item.id.toString()
							})
							if (matched) {
								item.checked = true
								item.count = matched.count
								item.itemShowSelected = `${item.itemShow}x${matched.count}`
							}
						}
					})
					if (defaultList[0] === 'all') {
						this.$data.isSelectedAll = true
						itemList.map((_) => {
							_.checked = true
							return _
						})
					} else {
						this.$data.isSelectedAll = false
					}
					this.$data.itemListCustom = itemList
					this.$data.selectedList = itemList.filter((item) => {
						return item.checked
					})
				} else {
					this.initItemListEmptyData()
				}
			},
			initItemListEmptyData() {
				this.$data.itemListCustom = JSON.parse(JSON.stringify(this.$props.itemsList)).map((_) => {
					_.checked = false
					// _.count = this.$props.name.indexOf("道具") !== -1 ? 1 : 0
					// 道具 商品 count初始化操作
					_.count =
							this.$props.name.indexOf('道具') !== -1 || this.$props.name.indexOf('商品') !== -1 ? 1 : 0
					return _
				})
				this.$data.selectedList = []
			},
			handleWatchCheckedAll(isCheckedAll) {
				this.$data.isSelectedAll = isCheckedAll
			},
			handleCloseModal() {
				this.$data.modalVisible = false
			},
			handleSubmitSelectedData() {
				let selectedItemList = this.$refs.checkItemRef.$data.selectedItemList
				if (selectedItemList.length === 0) {
					this.$Message.info(`您还没有选择数据呢！`)
				} else if (this.$props.isItemNum && selectedItemList.length > this.$props.isItemNum) {
					this.$Message.error(`您当前可选择的数量上限为${this.$props.isItemNum}！`)
				} else if (this.$data.selectedPriceAmount > this.$props.maxPriceNum) {
					this.$Message.error(`超额，您当前可选择的商品总价值上限为${this.$props.maxPriceNum}！`)
				} else {
					this.$data.selectedList = selectedItemList
					this.$data.modalVisible = false
				}
			},
			handleClickSelectBtn() {
				// 无需选择主服 主服重构优化
				if (this.$props.searchRequiredDesc && !this.$props.searchRequiredParams) {
					this.$Message.warning(
							`请先选择${this.$props.searchRequiredDesc}后再选择${this.$props.name}！`
					)
					return
				}
				this.$data.modalVisible = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item-selected-show {
		max-height: 108px;
		overflow-y: auto;
		margin-top: 5px;
		padding: 5px;
		border: 1px solid rgba(205, 205, 205, 0.8);
		border-radius: 2px;

		.item-text {
			margin-left: 8px;
			color: #40a9ff;
		}

		.item-tag {
			margin-right: 8px;
		}
	}

	.assign-cover {
		padding-bottom: 20px;
		//border-bottom: 1px solid #e8eaec;
		.input {
			width: 200px;
		}
	}

	.text-amount-error {
		color: #ed4014;
	}

	.ivu-input-wrapper {
		width: auto;
	}
</style>
