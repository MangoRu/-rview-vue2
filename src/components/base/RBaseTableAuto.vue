<template>
	<r-loading :text="loadingText" v-if="tableDataLoading" :is-fix="false"></r-loading>
	<r-table-custom
			v-else
			style="height: 100%"
			v-bind="$attrs"
			v-on="$listeners"
			:table-data="tableDataCustom"
			:data="tableDataCurrent"
			:page-size="pageSize"
			@on-change-current-data="handleChangeTableData"
			@on-sort-change="handleTableSortChange"
	></r-table-custom>
</template>

<script>
	export default {
		name: 'RTableAuto',
		props: {
			loadingText: {type: String, default: '加载中...'},
			tableDataLoading: {type: Boolean, default: false},
			tableData: {
				type: Array,
				default: () => {
					return []
				}
			},
			pageSize: {
				type: Number,
				default: 10
			}
		},
		data() {
			return {
				tableDataCurrent: [],
				tableDataCustom: []
			}
		},
		watch: {
			tableData: {
				handler(val) {
					this.$data.tableDataCustom = JSON.parse(JSON.stringify(val))
				},
				deep: true
			},
			tableDataCustom: {
				handler() {
					this.initTableData()
				},
				deep: true
			}
		},
		methods: {
			handleTableSortChange(columnSort) {
				const {column, key, order} = columnSort
				let tableData = JSON.parse(JSON.stringify(this.$data.tableDataCustom))
				let regDate =
						/^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/
				if (order === 'desc') {
					//  desc倒序 从大到小
					this.$data.tableDataCustom = tableData.sort((a, b) => {
						// Date.parse(xx) 等效于 new Date(xxx).getTime
						if (regDate.test(a[key])) {
							return Date.parse(a[key]) - Date.parse(b[key])
						} else if (!isNaN(a[key])) {
							// isNaN 检查是否是非数字值
							return parseInt(a[key]) - parseInt(b[key])
						} else {
							return a[key] - b[key]
						}
					})
				} else {
					//  asc升序 从大到小
					this.$data.tableDataCustom = tableData.sort((a, b) => {
						if (regDate.test(a[key])) {
							return Date.parse(b[key]) - Date.parse(a[key])
						} else if (!isNaN(a[key])) {
							return parseInt(b[key]) - parseInt(a[key])
						} else {
							return b[key] - a[key]
						}
					})
				}
				this.initTableData()
			},
			initTableData() {
				this.$data.tableDataCurrent = []
				if (this.$data.tableDataCustom.length >= this.$props.pageSize) {
					for (let i = 0; i < this.$props.pageSize; i++) {
						this.$data.tableDataCurrent.push(this.$data.tableDataCustom[i])
					}
				} else {
					this.$data.tableDataCurrent = this.$data.tableDataCustom
				}
			},
			handleChangeTableData(start, end) {
				this.$data.tableDataCurrent = this.$props.tableData.slice(start, end)
			}
		},
		created() {
			this.$data.tableDataCustom = JSON.parse(JSON.stringify(this.$props.tableData))
			this.initTableData()
		}
	}
</script>

<style scoped></style>
