```html

<template>
	<div style="padding: 20px">
		<div id="basic">
			<r-result></r-result>
		</div>
		<div id="result-icon">
			<Card style="width: 25%; display: inline-block">
				<r-result icon="success" title="success"></r-result>
			</Card>
			<Card style="width: 25%; display: inline-block">
				<r-result icon="warning" title="warning"></r-result>
			</Card>
			<Card style="width: 25%; display: inline-block">
				<r-result icon="error" title="error"></r-result>
			</Card>
			<Card style="width: 25%; display: inline-block">
				<r-result icon="info" title="info"></r-result>
			</Card>
		</div>
		<div id="result-custom">
			<r-panel class="m-top-15">
				<r-result
						title="空数据"
						sub-title="当前查询结果为空"
						icon="ios-archive"
						:icon-size="140"
				>
				</r-result>
			</r-panel>
			<r-panel class="m-top-15">
				<r-result title="提交成功" sub-title="您已提交此申请" icon="success">
					<template #extraResult>
						<p>已提交申请，待部门审核。</p>
					</template>
					<template #btnResult>
						<Button type="primary" class="m-right-10">查询进度</Button>
						<Button>返回</Button>
					</template>
				</r-result>
			</r-panel>
		</div>
	</div>
</template>

```
