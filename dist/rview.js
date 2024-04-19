import RBaseHeader from "../src/components/base/RBaseHeader"
import RBasePageError from "../src/components/base/RBasePageError"
import RBaseResult from "../src/components/base/RBaseResult"
import RBaseLoading from "../src/components/base/RBaseLoading"
import RBaseSiderMenu from "../src/components/base/RBaseSiderMenu"
import RBasePageHeader from "../src/components/base/RBasePageHeader"
import RBaseBreadcrumb from "../src/components/base/RBaseBreadcrumb"
import RBasePageGm from "../src/components/base/RBasePageGm"
import RBasePanel from "../src/components/base/RBasePanel"
import RBaseSearchPanelGm from "../src/components/base/RBaseSearchPanelGm"
import RBaseCustomForm from "../src/components/base/RBaseFormCustom"
import RBaseSelectRemote from "../src/components/base/RBaseSelectRemote"
import RBaseTableCustom from "../src/components/base/RBaseTableCustom"
import RBaseTableAuto from "../src/components/base/RBaseTableAuto"
import RBaseClipboard from "../src/components/base/RBaseClipboard"
import RBaseNoticePreviewGm from "../src/components/base/RBaseNoticePreviewGm"
import RBaseNumberInfo from "../src/components/base/RBaseNumberInfo"
import RBaseFormCreate from "../src/components/base/RBaseFormCreate"
import RBaseInputSelectButton from "../src/components/base/RBaseInputSelectButton"
import RBaseCheckboxAll from "../src/components/base/RBaseCheckboxAll"
import RBaseItemsShow from "../src/components/base/RBaseItemsShow"
import RBaseCard from "../src/components/base/RBaseCard"
import RBaseFooter from "../src/components/base/RBaseFooter"
import RBaseLayout from "../src/components/base/RBaseLayout"
import RBaseTitleText from "../src/components/base/RBaseTitleText"
import RBaseAuth from "../src/components/base/RBaseAuth"
import RCustomEditor from "../src/components/base/RCustomEditor"
import RCustomFileUpload from "../src/components/base/RCustomFileUpload"
import RCustomImagesUpload from "../src/components/base/RCustomImagesUpload"
import RCustomTableHttpLogGm from "../src/components/base/RCustomTableHttpLogGm"

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
