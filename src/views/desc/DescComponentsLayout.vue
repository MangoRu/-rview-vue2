<template>
	<div>
		<common-anchor :anchor-link-list="computeAnchorList"></common-anchor>
		<common-desc-components-content
				title="Layout 布局"
				name="r-layout"
				desc="协助进行页面级整体布局"
				:api-table-list="computeLayoutApiTableList"
		>
			<div id="basic-layout">
				<custom-content-code-examples code-title="基本布局" code-desc="典型的页面基本布局"
				                              @on-click-copy="copy('#basic-md')">
					<template #codeExample>
						<r-layout :is-show-back-to-top="false"></r-layout>
					</template>
					<layout-basic-md id="basic-md"></layout-basic-md>
				</custom-content-code-examples>
			</div>
			<div id="sider-layout">
				<custom-content-code-examples code-title="含侧边栏页面布局" @on-click-copy="copy('#layout-sider-md')">
					<template #codeDesc>
						<p>包含侧边栏的页面基本布局</p>
						<p class="m-top-3">
							注意：需要给该组件设置一个高度以适配页面，侧边栏具体展示内容由用户自定义。
						</p>
						<p>
							自定义侧边栏使用slot具名插槽<span class="text-highlight"> sider </span> 和
							<span class="text-highlight">isShowSider</span>
							属性配合使用，且需在外部使用iView的侧边栏属性
							<span class="text-highlight">Sider</span>。
						</p>
					</template>
					<template #codeExample>
						<r-layout :is-show-back-to-top="false" :is-show-sider="true" style="height: 300px">
							<template #sider>
								<Sider class="base-side-bar scroll-hide" :width="256">
									<r-sider-menu :menu-list="computeMenuList"></r-sider-menu>
								</Sider>
							</template>
							<div>内容展示区</div>
						</r-layout>
					</template>
					<layout-sider-md id="layout-sider-md"></layout-sider-md>
				</custom-content-code-examples>
			</div>
			<div id="header">
				<custom-content-code-examples code-title="自定义顶部导航栏" @on-click-copy="copy('#header-md')">
					<template #codeDesc>
						<Tag color="green">r-header</Tag>
						<p class="m-top-5">基本页面布局中的顶部导航示例，可自定义设置导航栏。</p>
						<p class="m-top-5">
							用户可通过设置
							<span class="text-highlight">headerBackground</span>
							属性来自定义顶部背景色，也可通过具名插槽的使用替换默认导航展示，如该例中 插槽
							<span class="text-highlight">headerUserLogo</span> 的使用。
						</p>
						<p>
							通过事件 <span class="text-highlight">on-click-avatar</span>与事件
							<span class="text-highlight">on-click-exit</span>
							可以分别控制用户点击头像或点击退出按钮的自定义操作。
						</p>
					</template>
					<template #codeExample>
						<r-header
								header-background="#2b85e4"
								class="white-color"
								@on-click-avatar="handleClickAvatar"
								@on-click-exit="handleClickExit"
						>
							<template #headerLogo>
								<Button type="primary" class="m-right-10">
									<Icon type="md-apps"/>
								</Button>
								<b class="title white-color">
									<Icon size="25" type="md-game-controller-b icon"/>
									xx管理平台
								</b>
							</template>
						</r-header>
					</template>
					<header-md id="header-md"></header-md>
				</custom-content-code-examples>
			</div>
			<div id="sider">
				<custom-content-code-examples code-title="侧边栏菜单" @on-click-copy="copy('#sider-md')">
					<template #codeDesc>
						<Tag color="green">r-sider-menu</Tag>
						<p class="m-top-5">侧边栏菜单的基本使用示例。</p>
						<p>
							用户可通过可通过
							<span class="text-highlight">activeName</span> 属性来设置选中菜单项(注意该属性需与
							<span class="text-highlight">menuList</span> 列表中 <strong>id</strong> 对应才有效)。
							通过 <span class="text-highlight">openNames</span>
							属性来设置展开菜单项，具体使用请见示例。
						</p>
						<Alert class="m-top-10" type="warning">
							侧边栏的收缩功能沿用iView自带的Sider收缩，详情见文档
							<a href="https://www.iviewui.com/components/layout#ZDYCFQ"> iView-Sider </a>
							或以下示例
						</Alert>
					</template>
					<template #codeExample>
						<div style="height: 100%; overflow: hidden">
							<div style="display: flex">
								<Card class="m-right-30" title="含子菜单侧边栏">
									<Sider
											class="base-side-bar scroll-hide"
											collapsible
											:collapsed-width="72"
											:width="siderWidth"
											hide-trigger
											v-model="collapsed"
									>
										<r-sider-menu
												:menu-list="computeMenuChildList"
												:is-collapsed="collapsed"
												:open-names="openNames"
												:active-name="activeName"
												@on-select-menu="handleSelectMenu"
										></r-sider-menu>
									</Sider>
								</Card>
								<Card title="无子菜单侧边栏">
									<Sider
											class="base-side-bar scroll-hide"
											collapsible
											:collapsed-width="72"
											:width="siderWidth"
											hide-trigger
											v-model="collapsed"
									>
										<r-sider-menu
												:is-collapsed="collapsed"
												:menu-list="computeMenuChildNullList"
												active-name="common-announcement"
										></r-sider-menu>
									</Sider>
								</Card>
							</div>
							<RadioGroup v-model="menuCollapsed" class="m-top-10 m-left-5">
								<Radio :label="0">菜单展开</Radio>
								<Radio :label="1">菜单收缩</Radio>
							</RadioGroup>
						</div>
					</template>
					<sider-md id="sider-md"></sider-md>
				</custom-content-code-examples>
			</div>
			<div id="footer">
				<custom-content-code-examples code-title="页脚" @on-click-copy="copy('#footer-md')">
					<template #codeDesc>
						<Tag color="green">r-footer</Tag>
						<p class="m-top-5">页脚使用示例。</p>
					</template>
					<template #codeExample>
						<r-footer background-color="#f0faff"> 这里是自定义的页脚</r-footer>
					</template>
					<footer-md id="footer-md"></footer-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>
<script>
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import LayoutSiderMd from 'assets/md/r-layout-sider.md'
	import LayoutBasicMd from 'assets/md/r-layout-basic.md'
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import HeaderMd from 'assets/md/r-header.md'
	import FooterMd from 'assets/md/r-footer.md'
	import SiderMd from 'assets/md/r-sider.md'
	import CommonAnchor from 'views/desc/common/CommonAnchor'
	import {copy} from 'utils/toolkit.js'

	export default {
		name: 'DescComponentsLayout',
		components: {
			CustomContentCodeExamples,
			CommonDescComponentsContent,
			LayoutBasicMd,
			LayoutSiderMd,
			HeaderMd,
			FooterMd,
			SiderMd,
			CommonAnchor
		},
		data() {
			return {
				collapsed: false,
				menuCollapsed: 0,
				anchorCollapsed: true,
				siderWidth: 256,
				openNames: ['item'],
				activeName: 'item/item-config'
			}
		},
		computed: {
			code() {
				return `<template>
					<r-header header-background="#2b85e4" class="white-color" @on-click-avatar="handleClickAvatar"
					@on-click-exit="handleClickExit">
					<template #headerLogo>
					<Button type="primary" class="m-right-10">
						<Icon type="md-apps"/>
					</Button>
					<b class="title white-color">
						<Icon size="25" type="md-game-controller-b icon"/>
						游戏管理平台</b>
				</template>
			</r-header>
			</template>`
			},
			computeAnchorList() {
				return [
					{id: '#basic-layout', title: '基本布局'},
					{id: '#sider-layout', title: '含侧边栏页面布局'},
					{id: '#header', title: '自定义顶部导航栏'},
					{id: '#sider', title: '侧边栏菜单'},
					{id: '#footer', title: '页脚'},
					{id: '#API', title: 'API'}
				]
			},
			computeMenuChildList() {
				return [
					{
						id: 'common-announcement',
						name: '公告管理',
						icon: 'md-albums',
						children: [
							{id: 'common-announcement/login', name: '登录公告', children: []},
							{
								id: 'common-announcement/record-search',
								name: '同步记录',
								children: []
							}
						]
					},
					{
						id: 'item',
						name: '道具管理',
						icon: 'logo-apple',
						children: [{id: 'item/item-config', name: '道具列表', children: []}]
					},
					{
						id: 'present',
						name: '礼包码管理',
						icon: 'md-at',
						children: [
							{id: 'present/add', name: '新增礼包码', children: []},
							{id: 'present/list', name: '礼包码列表', children: []},
							{id: 'present/used', name: '使用情况查询', children: []}
						]
					}
				]
			},
			computeMenuChildNullList() {
				return [
					{
						id: 'common-announcement',
						name: '公告管理',
						icon: 'md-albums'
					},
					{
						id: 'item',
						name: '道具管理',
						icon: 'logo-apple'
					},
					{
						id: 'present',
						name: '礼包码管理',
						icon: 'md-at'
					}
				]
			},
			computeLayoutApiTableList() {
				return [
					{title: 'Layout', type: 'props', data: this.layoutPropsDataCompute},
					{title: 'Layout', type: 'slot', data: this.layoutSlotDataCompute},
					{title: 'Header', type: 'props', data: this.headerPropsDataCompute},
					{title: 'Header', type: 'events', data: this.headerEventsDataCompute},
					{title: 'Header', type: 'slot', data: this.headerSlotDataCompute},
					{title: 'Sider', type: 'props', data: this.siderPropsDataCompute},
					{title: 'Sider', type: 'events', data: this.siderEventsDataCompute},
					{title: 'Sider', type: 'slot', data: this.siderSlotDataCompute},
					{title: 'Footer', type: 'props', data: this.footerPropsDataCompute},
					{title: 'Footer', type: 'slot', data: this.footerSlotDataCompute}
				]
			},
			computeMenuList() {
				return [
					{
						id: 'common-announcement',
						name: '内容管理',
						icon: 'ios-paper',
						children: [
							{id: 'common-announcement/login', name: '文章管理', icon: 'ios-bookmarks', children: []},
							{
								id: 'common-announcement/record-search',
								name: '评论管理',
								icon: 'md-chatbubbles',
								children: []
							}
						]
					},
					{
						id: 'item',
						name: '道具管理',
						icon: 'md-settings',
						children: [{id: 'item/item-config', name: '道具列表', icon: 'md-settings', children: []}]
					},
					{
						id: 'present',
						name: '统计分析',
						icon: 'md-flag',
						children: [
							{id: 'present/add', name: '活跃分析', icon: 'md-flame', children: []},
							{id: 'present/list', name: '时段分析', icon: 'md-flash', children: []},
							{id: 'present/used', name: '用户留存', icon: 'md-contact', children: []}
						]
					}
				]
			},
			siderSlotDataCompute() {
				return [{name: '无', desc: '自定义出菜单列表外侧边栏内的其他内容'}]
			},
			siderEventsDataCompute() {
				return [
					{
						name: 'on-select-menu',
						desc: '选择菜单（MenuItem）时触发',
						returnValue: 'menuName'
					}
				]
			},
			siderPropsDataCompute() {
				return [
					{
						attr: 'menuList',
						desc: '必填，菜单项列表',
						type: 'Array',
						defaultValue: '[ ]'
					},
					{
						attr: 'isCollapsed',
						desc: '侧边栏是否收缩，设为true后菜单项收缩，默认为展开，值为false',
						type: 'Boolean',
						defaultValue: 'false'
					},
					{
						attr: 'siderWidth',
						desc: '侧边栏宽度',
						type: 'Number',
						defaultValue: '256'
					},
					{
						attr: 'activeName',
						desc: '激活菜单的name值，即高亮菜单项',
						type: 'String || Number',
						defaultValue: '-'
					},
					{
						attr: 'openNames',
						desc: '展开的菜单项集合，当且仅当侧边栏菜单列表含子菜单时有效',
						type: 'Array',
						defaultValue: '[ ]'
					},
					{
						attr: 'isShowIcon',
						desc: '是否展示菜单项图标',
						type: 'Boolean',
						defaultValue: 'true'
					}
				]
			},
			footerSlotDataCompute() {
				return [{name: '无', desc: '页脚主体内容'}]
			},
			footerPropsDataCompute() {
				return [
					{
						attr: 'backgroundColor',
						desc: '页脚背景色',
						type: 'String',
						defaultValue: 'rgba(230, 236, 241,1)'
					}
				]
			},
			headerSlotDataCompute() {
				return [
					{name: 'headerLogo', desc: '自定义项目Logo'},
					{name: 'headerTitle', desc: '自定义导航标题'},
					{name: 'headerTitleMenu', desc: '自定义导航标题菜单'},
					{name: 'headerUser', desc: '自定义用户模块'}
				]
			},
			headerEventsDataCompute() {
				return [
					{
						name: 'on-click-avatar',
						desc: '点击用户头像的回调，用户可自定义事件处理，如跳转至用户中心页',
						returnValue: '-'
					},
					{
						name: 'on-click-exit',
						desc: '点击退出按钮的回调，用户可自定义事件处理，如当前用户退出事件',
						returnValue: '-'
					}
				]
			},
			headerPropsDataCompute() {
				return [
					{
						attr: 'headerLogoSrc',
						desc: '顶部导航Logo，必须使用require引入所需的项目Logo',
						type: 'String',
						defaultValue: '默认展示\'RView\'Logo字样'
					},
					{
						attr: 'isShowHeaderUser',
						desc: '是否展示顶部导航用户模块',
						type: 'Boolean',
						defaultValue: 'true'
					},
					{
						attr: 'headerUser',
						desc: `用户模块的用户对象，对象必传属性username & name，否则可能导致用户名错误`,
						type: 'Object',
						defaultValue: '-'
					},
					{attr: 'headerUserName', desc: '用户名', type: 'String', defaultValue: '用户'},
					{attr: 'headerBackground', desc: '顶部导航背景色', type: 'String', defaultValue: '#fff'},
					{attr: 'headerHeight', desc: '顶部导航高度', type: 'Number', defaultValue: '60'},
					{attr: 'isShowExit', desc: '是否展示用户退出按钮', type: 'Boolean', defaultValue: 'true'}
				]
			},
			layoutSlotDataCompute() {
				return [
					{name: 'header', desc: '自定义Header顶部导航'},
					{name: 'sider', desc: '自定义Sider侧边栏菜单'},
					{name: 'footer', desc: '自定义Footer页脚'},
					{name: '无', desc: 'Content主体内容'}
				]
			},
			layoutPropsDataCompute() {
				return [
					{
						attr: 'isShowFooter',
						desc: '是否展示Footer页脚',
						type: 'Boolean',
						defaultValue: 'true'
					},
					{
						attr: 'isShowSider',
						desc: '是否展示Sider侧边栏',
						type: 'Boolean',
						defaultValue: 'false'
					},
					// {
					//   attr: "width",
					//   desc: "侧边栏宽度",
					//   type: "Number",
					//   defaultValue: "256"
					// },
					{
						attr: 'isContentBgWhite',
						desc: '内容页背景是否为白色',
						type: 'Boolean',
						defaultValue: 'false'
					},
					{
						attr: 'isShowBackToTop',
						desc: '是否展示返回顶部按钮，当一个页面内嵌过多该组件时，返回顶部按钮会失效，给其他组件添加该属性为false',
						type: 'Boolean',
						defaultValue: 'true'
					}
				]
			}
		},
		watch: {
			menuCollapsed: {
				handler(val) {
					this.$data.collapsed = val !== 0
				},
				deep: true
			}
		},
		methods: {
			// copy(code) {
			// 	return copy(code)
			// },
			copy,
			handleSelectMenu(menu) {
				this.$data.activeName = menu
				let menuChildList = JSON.parse(JSON.stringify(this.computeMenuChildList))
				let openMenu = []
				menuChildList.map((_) => {
					_.children.filter((child) => {
						if (child.id === menu) {
							openMenu.push(_.id)
						}
					})
				})
				this.$data.openNames = openMenu
			},
			handleClickExit() {
				this.$Message.success('点击了退出按钮')
			},
			handleClickAvatar() {
				this.$Message.success('点击了用户头像，自定义返回用户中心事件')
			}
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
