<template>
	<div style="padding: 8px">
		<div v-if="itemsList && itemsList.length > 0">
			<!--  这里是追加覆盖操作 不支持  -->
			<div class="checkbox-all" :style="{ borderBottom: isBorderShow ? '1px solid #e9e9e9' : '' }">
				<Checkbox :indeterminate="indeterminate" :value="checkAll" @on-change="handleCheckAll">
					全选
					<!--          -checkAll={{ checkAll }}-indeterminate={{ indeterminate }}-->
				</Checkbox>
			</div>
			<!--      selectedItemList={{ selectedItemList }}         @on-items-data="handleItemsListData"-->
			<r-items-show
					:is-goods="isGoods"
					:is-server-type="isServerType"
					:is-border-top-show="isBorderTopShow"
					:is-card-width-auto="isCardWidthAuto"
					:disabled-count="disabledCount"
					:tab="tab"
					:tabList="tabList"
					:itemsList="itemsListData"
					:is-card-type="isCardType"
					@on-items-data="handleItemsListData"
			></r-items-show>
		</div>
		<r-result v-else icon="ios-folder-open-outline" :sub-title="`当前${name}列表为空`"></r-result>
	</div>
</template>
<script>
	export default {
		name: 'RCheckboxAll',
		props: {
			isBorderShow: {type: Boolean, default: false},
			disabledCount: {type: Boolean, default: false},
			name: {type: String, default: ''},
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
			isBorderTopShow: {type: Boolean, default: false},
			isCardWidthAuto: {type: Boolean, default: false},
			// 不良人服务器类型专用
			isServerType: {type: Boolean, default: false},
			// 不良人游戏商品
			isGoods: {type: Boolean, default: false}
		},
		data() {
			return {
				indeterminate: true,
				checkAll: false,
				selectedItemList: [],
				itemsListData: []
			}
		},
		watch: {
			itemsListData: {
				handler(val) {
					if (val && val.length > 0) {
						this.handleCheckedItemList(val)
					}
				},
				deep: true
			},
			itemsList: {
				handler(val) {
					// before this.$data.itemsListData = val
					if (val.length > 0) {
						this.$data.itemsListData = this.initItemsListDataIsChecked(val)
					}
				},
				deep: true
			},
			checkAll: {
				handler(val) {
					this.$data.indeterminate = !val
					this.$emit('on-checked-all', val)
				},
				deep: true
			},
			selectedItemList: {
				handler(selectedItemList) {
					// on-selected-list
					this.$emit('on-items-data', selectedItemList)
				},
				deep: true
			}
		},
		methods: {
			handleCheckedItemList(itemsListData) {
				itemsListData.map((_) => {
					_['itemShowSelected'] = _.count ? `${_.itemShow} x${_.count}` : `${_.itemShow}`
					return _
				})
				let checkedItemList = itemsListData.filter((item) => {
					return item.checked
				})
				this.$data.checkAll = checkedItemList.length === this.$props.itemsList.length
				this.$data.selectedItemList = checkedItemList
			},
			handleItemsListData(itemListData) {
				this.$data.itemsListData = itemListData
			},
			handleCheckAll(icCheckedAll) {
				this.$data.checkAll = icCheckedAll
				this.$data.itemsListData.map((_) => {
					_['checked'] = this.$data.checkAll
					return _
				})
				this.handleCheckedItemList(this.$data.itemsListData)
				// this.$props.itemsList.map((_) => {
				//   _["checked"] = this.$data.checkAll
				//   return _
				// })
				this.$data.indeterminate = !icCheckedAll
			},
			initItemsListDataIsChecked(itemsList) {
				let data = JSON.parse(JSON.stringify(itemsList))
				// 判断列表项是否存在checked属性
				if ('checked' in data[0]) {
					return data
				} else {
					return data.map((_) => {
						_['checked'] = false
						return _
					})
				}
			},
			initItemsListData() {
				// before this.$data.itemsListData = this.$props.itemsList
				this.$data.itemsListData = JSON.parse(JSON.stringify(this.$props.itemsList))
			}
		},
		created() {
			this.initItemsListData()
		}
	}
</script>
<style scoped>
	.checkbox-all {
		padding-bottom: 6px;
		margin-bottom: 6px;
	}
</style>
