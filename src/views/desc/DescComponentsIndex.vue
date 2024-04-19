<template>
  <common-components>
    <div>
      <h1>关于RView Design</h1>
      <div class="intro">
        <p>
          <strong> RView Design</strong>
          ，一款基于
          <a href="http://v4.iviewui.com/" target="_blank">iView开源UI框架（Vue.js 2）</a>
          二次开发的前端UI组件库，主要服务于个人用户
          <strong class="tip">基于iView框架开发的中后台产品</strong> ，适用于旧版 Vue2 开发的项目。
        </p>
        <blockquote class="blockquote">
          <p>
            对于iView框架中支持的功能组件，请延用iView实现，该公共组件库当前仅支持少量的特定组件复用，开发者仍可采取iView为主UI框架，以该组件库为辅，根据项目具体需求&原型图等选择性使用。
          </p>
          <p>
            iView UI组件库：
            <a href="https://www.iviewui.com/" target="_blank"> View Design 官网 </a>
          </p>
          <!--   文档首页待补充   -->
        </blockquote>
        <div>
          <span>查看 <strong>RView Design</strong> 组件库说明请戳</span>
          <span class="span-badge">
            <Badge text="公共组件库" type="success" @click.native="handleRouterChange"> </Badge>
          </span>
        </div>
      </div>
      <div class="use">
        <div class="m-top-10">
          <h2>
            <Icon type="md-bookmark" size="26" />
            安装/项目中使用
          </h2>
          <Alert type="success" show-icon class="m-top-10">
            注意：由于是基于iView二次封装的组件，项目需安装 <b>iView组件 依赖</b>！
          </Alert>
        </div>
        <h3>
          <Icon type="md-return-right" />
          方式1：引用git仓库公开项目
        </h3>
        <blockquote class="blockquote">
          <ol class="m-left-20">
            <li class="m-top-5">
              安装依赖包：<br />
              <div>
                项目依赖 <span class="text-highlight">package.json/dependencies</span> 中引入
                <r-clipboard
                  :copy-content="computeDependencies"
                  style="display: inline-block"
                ></r-clipboard>
                ， 然后<span class="text-highlight">npm install </span>安装
              </div>
              <div class="m-top-3">
                或者直接在项目终端（控制台）安装：
                <r-clipboard
                  :copy-content="computeDependenciesNpm"
                  style="display: inline-block"
                ></r-clipboard>
              </div>
            </li>
            <li class="m-top-5">
              全局注册（引入）
              <Icon type="md-arrow-forward" />
              在 <span class="text-highlight">main.js</span> 中引入
              <div class="markdown-body">
                <main-js-md></main-js-md>
              </div>
            </li>
            <li class="m-top-5">
              指定组件引入：新建index.js文件引入可复用组件，此处以
              <span class="text-highlight">src/components/base/index.js</span>为例说明
              <span>（如需引入全部组件，则直接忽略此步骤）</span>
              <div class="markdown-body">
                <base-index-js-md></base-index-js-md>
              </div>
            </li>
            <li class="m-top-5">
              页面中使用，如：
              <r-clipboard :copy-content="computeUse" style="display: inline-block"></r-clipboard>
            </li>
          </ol>
        </blockquote>
        <h3>
          <Icon type="md-return-right" />
          方式2：npm公有包的使用
        </h3>
        <blockquote class="blockquote">
          <ol class="m-left-20">
            <li class="m-top-5">
              安装：
              <strong>
                <r-clipboard
                  :copy-content="`npm i r-view-design --save`"
                  style="display: inline-block"
                ></r-clipboard>
              </strong>
            </li>
            <li class="m-top-5">
              引入 RView
              <Icon type="md-arrow-forward" />
              在 <span class="text-highlight">main.js</span> 中引入
              <div class="markdown-body">
                <main-js-npm-md></main-js-npm-md>
              </div>
            </li>
            <li class="m-top-5">
              页面中使用，如：
              <r-clipboard
                copy-content="<r-footer></r-footer>"
                style="display: inline-block"
              ></r-clipboard>
            </li>
          </ol>
        </blockquote>
      </div>
      <div class="m-top-10 issue">
        <h2>可能出现的错误说明</h2>
        <Alert type="warning" show-icon class="m-top-10">
          注意：可能会需因为 <b>sass依赖</b> 版本问题导致报错，切记sass版本要相互对应！
          <div class="m-top-5">
            示例可用对应版本：
            <b class="text-highlight"> "node-sass": "^6.0.1", "sass-loader": "^10.2.0",</b>
          </div>
        </Alert>
        <div v-if="false">
          当前项目采取封装成公共组件的方式，在其他项目中使用则必须安装相关依赖文件等
        </div>
        <blockquote class="blockquote">
          若引入依赖后运行项目存在如下问题: <br />
          <span style="color: red">PostCSS received undefined instead of CSS string……，</span
          ><br /><br />
          <span>
            node-sass版本问题导致，可能存在的一种情况是：由于本地之前安装过
            <b>node-sass</b>
            版本导致，尝试<b class="text-highlight">
              npm rebuild node-sass/npm rebuild sass-loader</b
            >
            重构依赖解决上述问题(重新编译)
          </span>
        </blockquote>
      </div>
    </div>
  </common-components>
</template>
<script>
import commonData from "utils/common-data"
import CommonComponents from "views/desc/common/CommonComponents"
import BaseIndexJsMd from "assets/md/base-index-js.md"
import MainJsMd from "assets/md/main-js.md"
import MainJsNpmMd from "assets/md/main-js-npm.md"

export default {
  name: "DescComponentsIndex",
  components: { CommonComponents, BaseIndexJsMd, MainJsMd, MainJsNpmMd },
  data() {
    return {
      commonData
    }
  },
  computed: {
    computeUse() {
      return `<r-header></r-header>`
    },
    computeGitRepository() {
      return "git+https://gitea.com/MangoRu/RView-Vue2.git#1.0.0"
    },
    computeDependencies() {
      // "git+http://172.16.2.134:3200/Technology-Organization/DOC-HOME-WEB.git"` LayoutSiderMd
      return `"r-view-design": "${this.computeGitRepository}"`
    },
    computeDependenciesNpm() {
      return "npm install " + this.computeGitRepository
    }
  },
  methods: {
    handleRouterChange() {
      commonData.header_nav = "components"
      this.$router.push("/rview-components/layout")
    }
  },
  created() {
    commonData.header_nav = "docs"
  }
}
</script>
<style lang="scss" scoped>
p {
  margin: 5px;
}

::v-deep .markdown-body pre {
  margin-bottom: 0 !important;
}
</style>
