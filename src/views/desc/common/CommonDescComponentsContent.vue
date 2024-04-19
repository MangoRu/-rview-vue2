<template>
	<div>
		<Alert show-icon type="error">建议前往PC端查看文档！！！</Alert>
		<div v-if="title && name && desc">
			<custom-content-header :title="title" :name="name" :desc="desc"></custom-content-header>
		</div>
		<h2 class="m-top-5">代码示例</h2>
		<div>
			<slot>这里是代码展示片段</slot>
		</div>
		<h2 class="m-top-15" id="API" v-if="apiTableList.length > 0">API</h2>
		<div v-if="apiTableList.length > 0">
			<custom-content-api-table
					v-for="(apiTable, index) in apiTableList"
					:key="index"
					:title="apiTable.title"
					:type="apiTable.type"
					:data="apiTable.data"
			>
			</custom-content-api-table>
		</div>
	</div>
</template>
<script>
	import CustomContentHeader from 'components/rview/CustomContentHeader'
	import CustomContentApiTable from 'components/rview/CustomContentApiTable'

	export default {
		name: 'CommonDescComponentsContent',
		components: {CustomContentHeader, CustomContentApiTable},
		props: {
			title: {type: String, default: '示例：Layout 布局'},
			name: {type: String, default: '示例：r-layout'},
			desc: {type: String, default: '示例：协助进行页面级整体布局'},
			apiTableList: {
				type: Array,
				default: () => {
					return []
				}
			}
		}
	}
</script>
<style lang="scss" scoped></style>
