```html

<template>
	<div style="padding: 10px">
		<r-number-info></r-number-info>
		<Card class="m-top-15">
			<r-number-info
					:sub-title="['已使用', '未使用']"
					:total-list="['80%', '20%']"
					:trend-list="['1', '0']"
			></r-number-info>
		</Card>
		<r-panel class="m-top-15" is-column-direction>
			<r-number-info
					:sub-title="['近7日活跃设备', '近30日活跃设备']"
					:total-list="['12,321', '50,193']"
					:trend-list="[17.1, 5.3]"
			></r-number-info>
		</r-panel>
	</div>
</template>
```
