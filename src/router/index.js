import Vue from "vue"
import Router from "vue-router"
import routes from "./router"
import ViewUI from "view-design"

Vue.use(Router)

// FIXME vue-router重复点击路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new Router({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  ViewUI.LoadingBar.start()
  next()
})

/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath).then((r) => r)
  }
})

router.afterEach(() => {
  ViewUI.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
