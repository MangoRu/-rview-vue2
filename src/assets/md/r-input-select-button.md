```vim

<template>
	<div style="padding: 20px">
		<r-input-select-button name="城市"></r-input-select-button>
		<br/>
		<r-input-select-button
				name="城市"
				:items-list="itemsListCity"
				:is-card-type="false"
				:value="defaultValueCity"
				@on-change="handleChangeItemCity"
		>
		</r-input-select-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				itemsListCity: [
					{value: "beijing", itemShow: "北京", checked: false},
					{value: "shanghai", itemShow: "上海", checked: false},
					{value: "tianjin", itemShow: "天津", checked: false},
					{value: "shenzhen", itemShow: "深圳", checked: false},
					{value: "guangzhou", itemShow: "广州", checked: false},
					{value: "xiamen", itemShow: "厦门", checked: false},
					{value: "wuhan", itemShow: "武汉", checked: false},
					{value: "changsha", itemShow: "长沙", checked: false}
				],
				defaultValueCity: null
			}
		},
		methods: {
			handleChangeItemCity(selectedList) {
				let city = []
				for (let i in selectedList) {
					city.push(`${selectedList[i].value}`)
				}
				this.$data.defaultValueCity =
						city.length === this.$data.itemsListCity.length ? "all" : city.toString()
			}
		}
	}
</script>
```
