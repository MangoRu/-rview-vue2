import RoutesRView from "./router-rview.js"

const routes = [
  ...RoutesRView,
  // 默认路由配置
  { path: "*", redirect: "/" }
]

export default routes
