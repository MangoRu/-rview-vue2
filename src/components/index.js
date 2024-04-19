/*
 * Copyright (c) 2023.
 */
import RBaseHeader from "./base/RBaseHeader"
import RBasePageError from "./base/RBasePageError"
import RBaseResult from "./base/RBaseResult"
import RBaseLoading from "./base/RBaseLoading"
import RBaseSiderMenu from "./base/RBaseSiderMenu"
import RBasePageHeader from "./base/RBasePageHeader"
import RBaseBreadcrumb from "./base/RBaseBreadcrumb"
import RBasePageGm from "./base/RBasePageGm"
import RBasePanel from "./base/RBasePanel"
import RBaseSearchPanelGm from "./base/RBaseSearchPanelGm"
import RBaseCustomForm from "./base/RBaseFormCustom"
import RBaseSelectRemote from "./base/RBaseSelectRemote"
import RBaseTableCustom from "./base/RBaseTableCustom"
import RBaseTableAuto from "./base/RBaseTableAuto"
import RBaseClipboard from "./base/RBaseClipboard"
import RBaseNoticePreviewGm from "./base/RBaseNoticePreviewGm"
import RBaseNumberInfo from "./base/RBaseNumberInfo"
import RBaseFormCreate from "./base/RBaseFormCreate"
import RBaseInputSelectButton from "./base/RBaseInputSelectButton"
import RBaseCheckboxAll from "./base/RBaseCheckboxAll"
import RBaseItemsShow from "./base/RBaseItemsShow"
import RBaseCard from "./base/RBaseCard"
import RBaseFooter from "./base/RBaseFooter"
import RBaseLayout from "./base/RBaseLayout"
import RBaseTitleText from "./base/RBaseTitleText"
import RBaseAuth from "./base/RBaseAuth"
import RCustomEditor from "./base/RCustomEditor"
import RCustomFileUpload from "./base/RCustomFileUpload"
import RCustomImagesUpload from "./base/RCustomImagesUpload"
import RCustomTableHttpLogGm from "./base/RCustomTableHttpLogGm"

const components = [
  RBaseHeader,
  RBaseFooter,
  RBaseLayout,
  RBasePageError,
  RBaseResult,
  RBaseLoading,
  RBaseSiderMenu,
  RBaseBreadcrumb,
  RBasePageHeader,
  RBasePageGm,
  RBasePanel,
  RBaseSearchPanelGm,
  RBaseCustomForm,
  RBaseSelectRemote,
  RBaseTableCustom,
  RBaseTableAuto,
  RBaseClipboard,
  RBaseNoticePreviewGm,
  RBaseNumberInfo,
  RBaseFormCreate,
  RBaseInputSelectButton,
  RBaseCheckboxAll,
  RBaseItemsShow,
  RBaseCard,
  RBaseTitleText,
  RBaseAuth,
  RCustomEditor,
  RCustomFileUpload,
  RCustomImagesUpload,
  RCustomTableHttpLogGm
]

// 定义install方法，接收Vue作为参数，可以在Vue的原型上注册组件
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件（通过script导入），如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

// 导出install方法，以便在Vue.use()时调用
export default {
  install
}
