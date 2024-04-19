<template>
	<Header
			class="base-header height-100-full"
			:style="{ height: headerHeight + 'px', lineHeight: 0, backgroundColor: headerBackground }"
	>
    <span class="header-logo" v-if="headerLogoSrc || $slots.headerLogo">
      <slot name="headerLogo">
        <img :src="headerLogoSrc" alt="logo" @click="handleClickLogo"/>
        <Divider id="divider" type="vertical" class="header-logo-divider"/>
      </slot>
    </span>
		<span class="header-title" v-if="$slots.headerTitle">
      <slot name="headerTitle"></slot>
    </span>
		<span class="header-title-menu" v-if="$slots.headerTitleMenu">
      <slot name="headerTitleMenu"></slot>
    </span>
		<span v-if="headerUser || $slots.headerUser || headerUserName">
      <slot name="headerUser">
        <span class="header-user" v-if="isShowHeaderUser">
          <span>
            <Tooltip content="用户中心" :transfer="true" theme="light">
              <Avatar
		              :class="isAvatarBg ? 'avatar-highlight' : ''"
		              style="cursor: pointer"
		              @mouseover.native="isAvatarBg = true"
		              @mouseleave.native="isAvatarBg = false"
		              @click.native="handleAvatarClick"
              >
                {{ headerUserLogoShow }}
              </Avatar>
            </Tooltip>
          </span>
          <span>
            <strong v-text="headerUser.name ? headerUser.name : headerUserName"></strong>
          </span>
          <span>您好</span>
          <span>
            <Button class="exit-btn" @click="handleExitBtnClick" v-if="isShowExit">退出</Button>
          </span>
        </span>
      </slot>
    </span>
	</Header>
</template>
<script>
	export default {
		name: 'RHeader',
		props: {
			headerLogoSrc: {
				type: String,
				default: 'https://s2.loli.net/2023/09/16/myd8L6KGTvbjUF9.png'
				// default: require('../../assets/logo-rview/logo-rview1.png')
			},
			isShowHeaderUser: {type: Boolean, default: true},
			headerUser: {
				type: Object,
				default() {
					return {
						username: '',
						name: ''
					}
				}
			},
			headerUserName: {
				type: String,
				default: '用户'
			},
			headerBackground: {
				type: String,
				default() {
					return '#fff'
				}
			},
			headerHeight: {
				type: Number,
				default: 60
			},
			isShowExit: {type: Boolean, default: true}
		},
		computed: {
			headerUserUpperFirstLetter() {
				return this.$props.headerUser.username
						.toLowerCase()
						.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
				// return this.$props.headerUser.username
				//   .trim()
				//   .replace(
				//     this.$props.headerUser.username[0],
				//     this.$props.headerUser.username[0].toUpperCase()
				//   )
			},
			headerUserLogoShow() {
				return this.$props.headerUser.username
						? this.headerUserUpperFirstLetter.substr(0, 1)
						: this.$props.headerUserName.substr(0, 1)
			}
		},
		data() {
			return {
				isAvatarBg: false
			}
		},
		methods: {
			handleClickLogo(event) {
				this.$emit('on-click-logo', event)
			},
			handleAvatarClick(event) {
				this.$emit('on-click-avatar', event)
			},
			handleExitBtnClick(event) {
				this.$emit('on-click-exit', event)
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../assets/styles/common/variables";
	@import "../../assets/styles/common/layout";

	.header-logo {
		@include center-flex;
		height: 100%;
		padding-right: 16px;
		cursor: pointer;

		img {
			height: 38px;
		}

		.header-logo-divider {
			margin-left: 30px;
		}
	}

	::v-deep .ivu-divider {
		font-size: 40px;
	}

	.header-title {
		flex: 1;
		//width: 100%;
		text-align: center;
	}

	.header-user {
		display: flex;
		width: 220px;
		align-items: center;
		justify-content: space-around;
		letter-spacing: 1px;

		.avatar-highlight {
			background: $primaryLight;
		}

		.exit-btn {
			background-color: rgba(64, 158, 255, 1);
			color: #fff;
			font-size: 12px;
			height: 31px;
			border-color: white;

			&:hover {
				background-color: rgba(64, 158, 255, 0.9) !important;
				color: #fff !important;
				border-color: #dcdee2 !important;
			}
		}
	}
</style>
