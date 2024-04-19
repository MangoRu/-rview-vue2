```vim

<template>
	<div style="padding: 20px">
		<div>可搜索用户1：张三</div>
		<div style="display: flex">
			<r-search-remote
					:width="300"
					loading-text="用户搜索中..."
					placeholder="搜索用户"
					:selected="userInfo.userSelected"
					:is-search="userInfo.isSearchUser"
					:option-list="userInfo.optionUserList"
					:search-remote="searchUserRemote"
					@on-selected-remote="handleSelectedUser"
			></r-search-remote>
			<Tag color="cyan" size="large" v-if="userInfo.userSelected" class="m-left-5">
				用户{{ userInfo.userSelected }}已被选中
			</Tag>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					userSelected: "",
					isSearchUser: false,
					optionUserList: null
				}
			}
		},
		methods: {
			handleSelectedUser(value) {
				this.$data.userInfo.userSelected = value
			},
			searchUserRemote(query) {
				const data = [
					{label: "张三", value: "zhangsan"},
					{label: "李四", value: "lisi"},
					{label: "王五", value: "wangwu"}
				]
				if (query !== "") {
					this.$data.userInfo.isSearchUser = true
					setTimeout(() => {
						this.$data.userInfo.isSearchUser = false
						this.$data.userInfo.optionUserList = data.filter((item) => item.label.indexOf(query) > -1)
					}, 1000)
				} else {
					this.$data.userInfo.optionUserList = []
				}
			}
		}
	}
</script>

```
