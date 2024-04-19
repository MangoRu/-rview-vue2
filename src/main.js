import Vue from "vue"
import App from "@/App.vue"
import ViewUI from "view-design"
import "view-design/dist/styles/iview.css"
import router from "router"
import FormCreate from "@form-create/iview4"
import BaseComponents from "@/components/base/index"
import "../dist/rview.scss"
import "github-markdown-css"
import "highlight.js/styles/atom-one-light.css"

Vue.config.productionTip = false

Vue.use(ViewUI)
Vue.use(FormCreate)
Vue.use(BaseComponents)

// 正式环境清除所有console.log
if (process.env.NODE_ENV === "production") {
  if (window) {
    window.console.log = function () {}
  }
}

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")
