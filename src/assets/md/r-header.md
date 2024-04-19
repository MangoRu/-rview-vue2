```vim

<template>
	<r-header header-background="#2b85e4" class="white-color"
	          @on-click-avatar="handleClickAvatar"
	          @on-click-exit="handleClickExit">
		<template #headerLogo>
			<Button type="primary" class="m-right-10">
				<Icon type="md-apps"/>
			</Button>
			<b class="title white-color">
				<Icon size="25" type="md-game-controller-b icon"/>
				游戏管理平台
			</b>
		</template>
	</r-header>
</template>
<script>
	export default {
		methods: {
			handleClickExit() {
				this.$Message.success("点击了退出按钮")
			},
			handleClickAvatar() {
				this.$Message.success("点击了用户头像，自定义返回用户中心事件")
			},
		}
	}
</script>
<style lang="scss" scoped>
	.title {
		font-size: 20px;
		text-align: center;

	.icon {
		margin-right: 10px;
	}

	}
</style>
```
