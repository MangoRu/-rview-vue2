```html

<template>
	<div style="padding: 20px">
		<r-search-panel-gm
				:input-list="inputList1"
				:select-list="selectList1"
				@on-search="handleSearch"
		></r-search-panel-gm>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				inputList1: [],
				selectList1: []
			}
		},
		methods: {
			handleSearch() {
				this.$Message.info("开始查询")
			},
			initParamList() {
				let mainServerObj = {
					label: "主服",
					value: "main1",
					options: [
						{value: "main1", label: "主服1(main1)"},
						{value: "main2", label: "主服2(main2)"}
					],
					width: 170
				}
				if (this.$data.selectList1.length === 0) {
					this.$data.selectList1 = []
					let giftCodeStateObj = {
						label: "查询条件",
						value: "code",
						options: [
							{value: "code", label: "礼包码"},
							{value: "batch", label: "批次编号"}
						],
						width: 135
					}
					this.$data.selectList1.push(mainServerObj, giftCodeStateObj)
				}
				if (this.$data.inputList1.length === 0) {
					this.$data.inputList1 = []
					let selectParam = {
						label: "查询参数",
						value: "",
						placeholder: "请输入查询参数（礼包码或批次编号）",
						width: 252
					}
					this.$data.inputList1.push(selectParam)
				}
			}
		},
		created() {
			this.initParamList()
		}
	}
</script>
```
