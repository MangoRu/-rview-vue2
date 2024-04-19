<template>
	<r-result
			icon="ios-folder-open-outline"
			sub-title="暂无数据"
			v-if="tableDataAll.length === 0"
	></r-result>
	<div v-else>
		<div v-if="isShowMode" class="mode-change">
			<span>切换视图：</span>
			<ButtonGroup>
				<Button
						width="80px"
						v-for="item in modeOptions"
						:type="showMode === item.value ? 'primary' : 'default'"
						:icon="item.icon"
						:key="item.value"
						:value="item.value"
						@click="showMode = item.value"
				>
					{{ item.label }}
				</Button>
			</ButtonGroup>
		</div>
		<div v-if="showMode === 'table'">
			<Table v-bind="$attrs" v-on="$listeners" border class="m-top-15" width="100%">
				<!--   图片自定义渲染 slot=img 图片预览 附加功能 不支持 -->
				<template slot-scope="{ row, column }" slot="img">
					<img
							v-if="row.img"
							:src="row.img"
							alt="img"
							class="img-table"
							:style="{ maxWidth: column.minWidth / 2 + 'px' }"
					/>
					<span v-else>-</span>
				</template>
				<!--   内容自定义渲染 slot=content  -->
				<template slot-scope="{ row }" slot="content">
          <span v-if="row.content && row.content.length <= 50" style="cursor: pointer">
            {{ row.content }}
          </span>
					<span v-else-if="row.content && row.content.length > 50" style="cursor: pointer">
            <Tooltip placement="top" max-width="800" :transfer="true">
              {{ row.content.slice(0, 50) }}......
              <div slot="content" style="overflow: scroll; max-height: 300px; padding-right: 10px">
                {{ row.content }}
              </div>
            </Tooltip>
          </span>
					<span v-else>-</span>
				</template>
				<!--   操作列自定义渲染 action  v-if="isShowAction" -->
				<template slot="action" slot-scope="{ row }">
          <span v-for="(action, index) in tableActions" :key="index" class="action-container">
            <Button
		            size="small"
		            :type="action.type"
		            :ghost="action.ghost"
		            v-if="handleActionBtnHidden(action.hidden, row)"
		            :style="{ marginRight: handleActionBtnHidden(action.hidden, row) ? '6px' : '0' }"
		            @click="handleAction(action.action, row)"
            >
              {{ action.label }}
            </Button>
          </span>
				</template>
			</Table>
		</div>
		<div v-else-if="showMode === 'card'">
			<Card v-for="(itemData, itemIndex) in $attrs.data" :key="itemIndex" class="m-top-15">
				<p slot="title">{{ $attrs.columns[0].title }}：{{ itemData[$attrs.columns[0].key] }}</p>
				<span slot="extra">
          <span v-for="(action, index) in tableActions" :key="index" class="action-container">
            <Button
		            size="small"
		            :type="action.type"
		            :ghost="action.ghost"
		            v-if="handleActionBtnHidden(action.hidden, itemData)"
		            :style="{ marginRight: handleActionBtnHidden(action.hidden, itemData) ? '6px' : '0' }"
		            @click="handleAction(action.action, itemData)"
            >
              {{ action.label }}
            </Button>
          </span>
        </span>
				<div
						v-for="(columns, columnsIndex) in computeCardDataColumns"
						:key="columnsIndex"
						class="card-content"
				>
          <span class="content-label" v-if="columns.title">
            <span>{{ columns.title }}：</span>
            <span class="content-show">
              <Tooltip max-width="600" placement="right" :transfer="true">
                <span slot="content">
                  {{ itemData[columns.key] ? itemData[columns.key] : "-" }}
                </span>
                <span v-if="columns.key === 'img'">
                  <img
		                  v-if="itemData[columns.key]"
		                  :src="itemData[columns.key]"
		                  alt="img"
		                  style="width: 80px; text-align: start"
                  />
                  <span v-else>-</span>
                </span>
                <span v-else-if="columns.key === 'content'">
                  {{
                    itemData[columns.key].length > 30
                      ? itemData[columns.key].slice(0, 30) + "..."
                      : itemData[columns.key]
                  }}
                </span>
                <span v-else>{{ itemData[columns.key] }}</span>
              </Tooltip>
            </span>
          </span>
				</div>
			</Card>
		</div>
		<div style="text-align: center; margin: 30px 0 20px" v-if="isShowPage">
			<Page
					:total="pageObjCustom.total"
					:page-size="pageObjCustom.pageSize"
					show-total
					show-elevator
					:show-sizer="pageSize === 10"
					@on-change="handleChangePage"
					@on-page-size-change="handleChangePageSize"
			/>
		</div>
	</div>
</template>

<script>
	const modeOptions = [
		{label: '卡片', value: 'card', icon: 'md-square-outline'},
		{label: '表格', value: 'table', icon: 'md-grid'}
	]
	export default {
		name: 'RTableCustom',
		props: {
			actionColumn: {
				type: Object,
				default: () => {
					return {
						title: '操作',
						slot: 'action',
						key: 'action',
						fixed: 'right',
						align: 'center',
						minWidth: 210
					}
				}
			},
			isShowAction: {
				type: Boolean,
				default: true
			},
			// 分页的页数 保留
			pageSize: {
				type: Number,
				default: 10
			},
			// 操作列 待保留
			tableActions: {
				type: Array,
				default() {
					return []
				}
			},
			// 是否显示分页 保留
			isShowPage: {
				type: Boolean,
				default: true
			},
			// 是否显示视图切换 保留
			isShowMode: {
				type: Boolean,
				default: true
			},
			tableData: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				pageObjCustom: {
					total: 0,
					page: 0,
					pageSize: 10
				},
				currentTableDataCustom: [],
				modeOptions,
				showMode: 'table',
				tableActionsCustom: null
			}
		},
		computed: {
			computeCardDataColumns() {
				return this.$attrs.columns.filter((columnLabel) => {
					return columnLabel.title && columnLabel.title.indexOf('操作') === -1
				})
				// return columns.slice(0, columns.length - 1)
			},
			tableDataAll() {
				return JSON.parse(JSON.stringify(this.$props.tableData))
			}
		},
		watch: {
			'$attrs.columns': {
				handler(columns) {
					this.$attrs.columns = this.fixColumns(columns)
				},
				deep: true
			},
			isShowAction: {
				handler(val) {
					// eslint-disable-next-line no-unused-expressions
					val ? this.mergeTableColumns() : this.resetTableColumns()
				},
				immediate: true
			},
			tableDataAll: {
				handler(val) {
					this.$data.pageObjCustom.total = val ? val.length : 0
				},
				deep: true
			}
		},
		methods: {
			fixColumns(columns) {
				return columns.filter((_) => {
					return _.title
				})
				// columns.findIndex((_) => {
				//   return !_.title
				// })
			},
			refreshTableColumns() {
				let actionColumn = this.$props.actionColumn
				let attrsColumns = this.fixColumns(JSON.parse(JSON.stringify(this.$attrs.columns)))
				if (
						actionColumn &&
						attrsColumns &&
						attrsColumns[attrsColumns.length - 1].key === 'action' &&
						actionColumn.minWidth !== attrsColumns[attrsColumns.length - 1].minWidth
				) {
					// const { columns } = JSON.parse(JSON.stringify(this.$attrs))
					const {columns} = this.$attrs
					if (columns && columns[columns.length - 1].key === 'action') {
						columns.pop()
					}
					this.$attrs.columns = columns
					this.mergeTableColumns()
				}
			},
			resetTableColumns() {
				const {columns} = this.$attrs
				if (columns && columns[columns.length - 1].key === 'action') {
					columns.pop()
				}
				this.$attrs.columns = columns
			},
			// 合并表格列
			mergeTableColumns() {
				// 勿动
				const columns = this.$attrs.columns
				if (columns && columns[columns.length - 1].key === 'action') {
					return
				}
				const merge = this.getTableActions()
				columns.push(merge)
				this.$attrs.columns = columns
			},
			getTableActions() {
				const action = {...this.$props.actionColumn}
				return {...action}
			},
			handleActionBtnHidden(hidden, row) {
				// console.log("hidden row", hidden, row.httpLogList, row.httpLogList.length)
				if (!hidden) {
					return true
				}
				let hiddenFlag
				if (typeof hidden === 'boolean') {
					hiddenFlag = !hidden
				} else {
					if (hidden.isHttpLog) {
						hiddenFlag =
								row.httpLogList.length === 0
										? false
										: hidden.status
												? !(hidden.status.indexOf(row.status) !== -1)
												: true
					} else {
						hiddenFlag = hidden.status ? !(hidden.status.indexOf(row.status) !== -1) : true
					}
				}
				return hiddenFlag
			},
			handleAction(action, row) {
				this.$emit(action, row)
			},
			handleChangePage(page) {
				let start = (page - 1) * this.$data.pageObjCustom.pageSize
				let end = page * this.$data.pageObjCustom.pageSize
				this.$emit('on-change-current-data', start, end)
				this.$data.pageObjCustom.page = page
			},
			handleChangePageSize(pageSize) {
				this.$data.pageObjCustom.pageSize = pageSize
				this.handleChangePage(1)
			},
			initTableData() {
				this.$data.pageObjCustom.pageSize = this.$props.pageSize
				this.$data.pageObjCustom.total = this.tableDataAll ? this.tableDataAll.length : 0
				this.$data.tableActionsCustom = JSON.parse(JSON.stringify(this.$props.tableActions))
				// this.$data.tableActionsCustom = this.$props.tableActions
			}
		},
		created() {
			this.initTableData()
			this.refreshTableColumns()
		},
		mounted() {
			this.$attrs.columns = this.fixColumns(this.$attrs.columns)
		}
	}
</script>

<style lang="scss" scoped>
	.mode-change {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: flex-end;

		span {
			letter-spacing: 1px;
			margin-right: 5px;
		}
	}

	.action-container {
		&:not(:last-child) {
			//margin-right: 6px;
		}
	}

	.img-table {
		margin: 10px 0;
	}

	.card-content {
		width: 25%;
		display: inline-block;

		.content-label {
			display: inline-block;
			margin-bottom: 15px;
		}

		.content-show {
			max-width: 100%;
			//background-color: #b3d4fc;
		}
	}
</style>
