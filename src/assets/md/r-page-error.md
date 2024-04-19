```html

<template>
	<div style="padding: 20px">
		<div id="code404">
			<r-page-error @on-click-back="handleClickBack"></r-page-error>
		</div>
		<div id="code403">
			<r-page-error :status="403" @on-click-back="handleClickBack"></r-page-error>
		</div>
		<div id="code500">
			<r-page-error :status="500" @on-click-back="handleClickBack"></r-page-error>
		</div>
		<div id="back">
			<r-page-error :is-color="false" @on-click-back="handleClickBack"></r-page-error>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			handleClickBack() {
				this.$router.push("/rview-components/layout")
			}
		}
	}
</script>
```
