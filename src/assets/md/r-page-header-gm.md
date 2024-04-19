```html

<template>
	<div style="padding: 10px">
		<r-page-header-gm title="定制页头"></r-page-header-gm>
		<br/>
		<br/>
		<r-page-header-gm icon="md-flame" title="礼包码使用情况" style="height: 500px">
			<Tag color="blue" size="large" class="m-top-5">自定义内容模块</Tag>
			<r-panel class="m-top-5" full-height>
				<r-page-error :status="500"></r-page-error>
			</r-panel>
		</r-page-header-gm>
	</div>
</template>
```
