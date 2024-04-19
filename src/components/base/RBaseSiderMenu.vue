<template>
	<div>
		<Menu
				ref="sideBarMenuRef"
				theme="light"
				:width="computedWidth"
				accordion
				class="side-bar-menu"
				@on-select="handleMenuItemSelect"
				:open-names="openNames"
				:active-name="activeName"
		>
			<template v-for="item in menuList">
				<!--   侧边栏展开无子菜单   -->
				<MenuItem
						v-if="!isCollapsed && !item.children"
						:key="item.id"
						:name="item.id"
						:class="activeName === item.id ? '' : 'menu-item-border-right'"
				>
					<Icon :type="item.icon || 'ios-menu'" v-if="isShowIcon"></Icon>
					<span class="">
            {{ item.name }}
          </span>
					<template v-if="item.slot">
						<div style="float: right">
							<Tag :color="item.slot['color']">
								<span :style="{color: item.slot['textColor']}">
									{{
										item.slot['name']
									}}
								</span>
							</Tag>
						</div>
					</template>
				</MenuItem>
				<!--   侧边栏展开有子菜单   -->
				<Submenu v-else-if="!isCollapsed && item.children.length" :key="item.id" :name="item.id">
					<template slot="title">
						<div
								:class="
                openNames[0] === item.id
                  ? 'menu menu-active menu-item-border-right'
                  : 'menu menu-item-border-right'
              "
						>
              <span v-if="isShowIcon">
	              <Icon type="md-settings" style="font-size: 15px" v-if="!item.icon"></Icon>
                <Icon :type="item.icon" v-else></Icon>
              </span>
							<span class=""> {{ item.name }} </span>
						</div>
					</template>
					<template v-for="child in item.children">
						<MenuItem
								:key="child.id"
								:name="child.id"
								:class="activeName === child.id ? '' : 'menu-item-border-right'"
						>
							<Icon :type="child.icon || 'md-grid'" v-if="isShowIcon"></Icon>
							<span class="">
                {{ child.name }}
              </span>
						</MenuItem>
					</template>
				</Submenu>
				<!--   侧边栏收缩无子菜单   -->
				<Tooltip
						v-else-if="isCollapsed && !item.children"
						:content="item.name"
						placement="right"
						:key="item.id"
						:transfer="true"
				>
					<MenuItem :name="item.id" @click="handleMenuItemSelect(item.id)" style="width: 100%">
						<Icon :type="item.icon || 'ios-menu'" v-if="isShowIcon"></Icon>
					</MenuItem>
				</Tooltip>
				<!--   侧边栏收缩有子菜单   -->
				<Dropdown
						v-else-if="isCollapsed && item.children.length"
						:key="item.id"
						placement="right"
						:transfer="true"
				>
					<MenuItem
							:name="item.id"
							:class="openNames[0] === item.id ? 'menu menu-active ' : 'menu '"
					>
						<Icon type="md-settings" style="font-size: 18px" v-if="!item.icon"></Icon>
						<Icon :type="item.icon" v-else></Icon>
					</MenuItem>
					<DropdownMenu slot="list">
						<DropdownItem
								v-for="(child, index) in item.children"
								:key="index"
								:name="index"
								style="padding: 0 0; background-color: #fff"
						>
							<MenuItem
									:name="child.id"
									@click="handleMenuItemSelect(child.id)"
									:class="activeName === child.id ? 'drop-text menu-active ' : 'drop-text '"
							>
								<Icon :type="child.icon || 'md-grid'" v-if="isShowIcon"></Icon>
								<span style="letter-spacing: 1px"> {{ child.name }} </span>
							</MenuItem>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</template>
		</Menu>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'RSiderMenu',
		props: {
			menuList: {
				type: Array,
				required: true,
				default() {
					return []
				}
			},
			isCollapsed: {
				type: Boolean,
				default: false
			},
			siderWidth: {
				type: Number,
				default: 256
			},
			activeName: {
				type: String || Number,
				default: ''
			},
			openNames: {
				type: Array,
				default() {
					return []
				}
			},
			isShowIcon: {type: Boolean, default: true}
		},
		methods: {
			initMenuState() {
				this.$nextTick(() => {
					this.$refs.sideBarMenuRef.updateActiveName()
					this.$refs.sideBarMenuRef.updateOpened()
				})
			},
			handleMenuItemSelect(menuName) {
				this.$emit('on-select-menu', menuName)
			}
		},
		computed: {
			computedWidth() {
				return this.$props.isCollapsed ? 'auto' : this.$props.siderWidth + 'px'
			}
		},
		updated() {
			this.initMenuState()
		}
	}
</script>
<style lang="scss">
	.ivu-menu-vertical .ivu-menu-item,
	.ivu-menu-vertical .ivu-menu-submenu-title {
		padding: 0;
	}
</style>
<style lang="scss" scoped>
	@import "../../assets/styles/common/menu.scss";

	.ivu-tooltip {
		width: 100%;
	}

	::v-deep .ivu-icon-ios-arrow-down:before {
		font-weight: bolder;
	}

	/* FIXME 侧边栏无菜单项部分默认无右边框处理 */
	/deep/ .ivu-layout-sider-children {
		border-right: 0 !important;
	}
</style>
