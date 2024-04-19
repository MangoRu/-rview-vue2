import RBaseHeader from "./RBaseHeader"
import RBasePageError from "./RBasePageError"
import RBaseResult from "./RBaseResult"
import RBaseLoading from "./RBaseLoading"
import RBaseSiderMenu from "./RBaseSiderMenu"
import RBasePageHeader from "./RBasePageHeader"
import RBaseBreadcrumb from "./RBaseBreadcrumb"
import RBasePageGm from "./RBasePageGm"
import RBasePanel from "./RBasePanel"
import RBaseSearchPanelGm from "./RBaseSearchPanelGm"
import RBaseCustomForm from "./RBaseFormCustom"
import RBaseSelectRemote from "./RBaseSelectRemote"
import RBaseTableCustom from "./RBaseTableCustom"
import RBaseTableAuto from "./RBaseTableAuto"
import RBaseClipboard from "./RBaseClipboard"
import RBaseNoticePreviewGm from "./RBaseNoticePreviewGm"
import RBaseNumberInfo from "./RBaseNumberInfo"
import RBaseFormCreate from "./RBaseFormCreate"
import RBaseInputSelectButton from "./RBaseInputSelectButton"
import RBaseCheckboxAll from "./RBaseCheckboxAll"
import RBaseItemsShow from "./RBaseItemsShow"
import RBaseCard from "./RBaseCard"
import RBaseFooter from "./RBaseFooter"
import RBaseLayout from "./RBaseLayout"
import RBaseTitleText from "./RBaseTitleText"
import RBaseAuth from "./RBaseAuth"
import RCustomEditor from "./RCustomEditor"
import RCustomFileUpload from "./RCustomFileUpload"
import RCustomImagesUpload from "./RCustomImagesUpload"
import RCustomTableHttpLogGm from "./RCustomTableHttpLogGm"

export default {
  install: function (Vue) {
    Vue.component("r-header", RBaseHeader)
    Vue.component("r-footer", RBaseFooter)
    Vue.component("r-layout", RBaseLayout)
    Vue.component("r-page-error", RBasePageError)
    Vue.component("r-result", RBaseResult)
    Vue.component("r-loading", RBaseLoading)
    Vue.component("r-sider-menu", RBaseSiderMenu)
    Vue.component("r-breadcrumb", RBaseBreadcrumb)
    Vue.component("r-page-header", RBasePageHeader)
    Vue.component("r-page-header-gm", RBasePageGm)
    Vue.component("r-panel", RBasePanel)
    Vue.component("r-search-panel-gm", RBaseSearchPanelGm)
    Vue.component("r-form-custom", RBaseCustomForm)
    Vue.component("r-search-remote", RBaseSelectRemote)
    Vue.component("r-table-custom", RBaseTableCustom)
    Vue.component("r-table-auto", RBaseTableAuto)
    Vue.component("r-clipboard", RBaseClipboard)
    Vue.component("r-notice-preview-gm", RBaseNoticePreviewGm)
    Vue.component("r-number-info", RBaseNumberInfo)
    Vue.component("r-input-select-button", RBaseInputSelectButton)
    Vue.component("r-checkbox-all", RBaseCheckboxAll)
    Vue.component("r-items-show", RBaseItemsShow)
    Vue.component("r-form-create", RBaseFormCreate)
    Vue.component("r-card", RBaseCard)
    Vue.component("r-title-text", RBaseTitleText)
    Vue.component("r-auth", RBaseAuth)
    Vue.component("r-editor", RCustomEditor)
    Vue.component("r-file-upload", RCustomFileUpload)
    Vue.component("r-images-upload", RCustomImagesUpload)
    Vue.component("r-gm-table-http-log", RCustomTableHttpLogGm)
  }
}
