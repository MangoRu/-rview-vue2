<template>
	<div>
		<common-desc-components-content
				title="Auth 鉴权页"
				name="r-auth"
				desc="用户登录鉴权页的处理"
				:api-table-list="[]"
		>
			<div id="basic-auth">
				<custom-content-code-examples code-title="基础用法" code-desc="" @on-click-copy="copy('#auth-md')">
					<template #codeDesc>
						<div class="m-top-5">
							注意需在单独页面中使用该组件，直接引入
							<Tag color="blue">r-auth</Tag>
							即可
						</div>
					</template>
					<template #codeExample>
						<Button @click="handleToAuth" type="error" ghost>点击跳转至鉴权页</Button>
					</template>
					<auth-md id="auth-md"></auth-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import AuthMd from 'assets/md/r-auth.md'
	import {copy} from 'utils/toolkit'

	export default {
		name: 'DescComponentsAuth',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, AuthMd},
		methods: {
			copy,
			handleToAuth() {
				this.$router.push('/auth')
			}
		}
	}
</script>

<style scoped></style>
