```html

<template>
	<div style="padding: 20px">
		<r-panel>
			<template #left>
				<div>
					<span style="font-weight: bolder; margin-right: 5px">城市</span>
					<Select v-model="city" style="width: 200px">
						<Option v-for="item in cityList" :value="item.value" :key="item.value">
							{{ item.label }}
						</Option>
					</Select>
				</div>
			</template>
			<template #right>
				<Button type="primary">{{ city }}</Button>
			</template>
		</r-panel>
		<div style="height: 100px; display: flex; flex-direction: column">
			<r-panel full-height is-column-direction>
				<div>
					<Icon type="ios-albums"/>
					自定义内容
				</div>
			</r-panel>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				cityList: [
					{
						value: "New York",
						label: "New York"
					},
					{
						value: "London",
						label: "London"
					},
					{
						value: "Sydney",
						label: "Sydney"
					},
					{
						value: "Ottawa",
						label: "Ottawa"
					},
					{
						value: "Paris",
						label: "Paris"
					},
					{
						value: "Canberra",
						label: "Canberra"
					}
				],
				city: "New York"
			}
		}
	}
</script>
<style lang="scss" scoped></style>
```
