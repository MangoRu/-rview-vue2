```html

<template>
	<div style="padding: 20px">
		<r-page-header
				icon="ios-card"
				:breadcrumb="['公共组件库', 'PageHeader 页头']"
				title="PageHeader 页头组件"
				sub-title="r-page-header"
		>
			<template #titleExtra>
				<Button type="primary">标题行操作</Button>
			</template>
			<template #extra>
				<div style="margin-top: 10px; height: 200px; display: flex; flex-direction: column">
					<r-panel full-height>
						<r-result icon="success"></r-result>
					</r-panel>
				</div>
			</template>
			<template #footer>
				<r-footer></r-footer>
			</template>
		</r-page-header>
	</div>
</template>

```
