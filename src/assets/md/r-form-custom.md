```html

<template>
	<div style="padding: 20px">
		<div>
			<r-form-custom :input-list="[]" :select-list="selectList"></r-form-custom>
		</div>
		<div class="m-top-15">
			<r-form-custom :input-list="inputList1" :select-list="selectList1"></r-form-custom>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selectList: [],
				inputList1: [],
				selectList1: []
			}
		},
		methods: {
			initParamList() {
				let mainServerObj = {
					label: '城市',
					value: 'city',
					options: [
						{
							value: 'New York',
							label: 'New York'
						},
						{
							value: 'London',
							label: 'London'
						},
						{
							value: 'Sydney',
							label: 'Sydney'
						},
						{
							value: 'Ottawa',
							label: 'Ottawa'
						}
					],
					width: 170
				}
				if (this.$data.selectList.length === 0) {
					this.$data.selectList = []
					let giftCodeStateObj = {
						label: '状态',
						value: 'all',
						options: [
							{value: 'all', label: '全部'},
							{value: '1', label: '有效'},
							{value: '0', label: '失效'}
						],
						width: 150
					}
					this.$data.selectList.push(mainServerObj, giftCodeStateObj)
				}
				if (this.$data.selectList1.length === 0) {
					this.$data.selectList1 = []
					let giftCodeStateObj = {
						label: '查询条件',
						value: '',
						options: [
							{value: '1', label: '一线'},
							{value: '2', label: '二线'}
						],
						width: 135
					}
					this.$data.selectList1.push(mainServerObj, giftCodeStateObj)
				}
				if (this.$data.inputList1.length === 0) {
					this.$data.inputList1 = []
					let selectParam = {
						label: '查询参数',
						value: '',
						placeholder: '请输入查询参数',
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
