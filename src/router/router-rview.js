const TITLE = "RView | 组件库"

export default [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "DescComponentsIndex" */ "@/views/desc/DescComponentsIndex"),
    meta: { title: TITLE + " - 介绍" }
  },
  {
    path: "/rview-components",
    component: () => import(/* webpackChunkName: "DescComponents" */ "@/views/desc/DescComponents"),
    meta: { title: TITLE },
    redirect: "/rview-components/layout",
    children: [
      {
        path: "/rview-components/layout",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsLayout" */ "@/views/desc/DescComponentsLayout"
          ),
        meta: { title: TITLE + " - 布局 Layout" }
      },
      {
        path: "/rview-components/panel",
        component: () =>
          import(/* webpackChunkName: "DescComponentsPanel" */ "@/views/desc/DescComponentsPanel"),
        meta: { title: TITLE + " - 卡片面板 Panel" }
      },
      {
        path: "/rview-components/page-header",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsPageHeader" */ "@/views/desc/DescComponentsPageHeader"
          ),
        meta: { title: TITLE + " - 页头 PageHeader" }
      },
      {
        path: "/rview-components/title-text",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsTitleText" */ "@/views/desc/DescComponentsTitleText"
          ),
        meta: { title: TITLE + " - 标题文字 TitleText" }
      },
      {
        path: "/rview-components/breadcrumb",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsBreadCrumb" */ "@/views/desc/DescComponentsBreadCrumb"
          ),
        meta: { title: TITLE + " - 面包屑导航 BreadCrumb" }
      },
      {
        path: "/rview-components/page-error",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsPageError" */ "@/views/desc/DescComponentsPageError"
          ),
        meta: { title: TITLE + " - 异常 PageError" }
      },
      {
        path: "/rview-components/result",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsResult" */ "@/views/desc/DescComponentsResult"
          ),
        meta: { title: TITLE + " - 处理结果 Result" }
      },
      {
        path: "/rview-components/loading",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsLoading" */ "@/views/desc/DescComponentsLoading"
          ),
        meta: { title: TITLE + " - 加载中 Loading" }
      },
      {
        path: "/rview-components/card",
        component: () =>
          import(/* webpackChunkName: "DescComponentsCard" */ "@/views/desc/DescComponentsCard"),
        meta: { title: TITLE + " - 卡片展示 Card" }
      },
      {
        path: "/rview-components/page-header-gm",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsPageHeaderGm" */ "@/views/desc/DescComponentsPageHeaderGm"
          ),
        meta: { title: TITLE + " - GM定制页头 PageHeaderGm" }
      },
      {
        path: "/rview-components/number-info",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsNumberInfo" */ "@/views/desc/DescComponentsNumberInfo"
          ),
        meta: { title: TITLE + " - 数字趋势标记 NumberInfo" }
      },
      // {
      //   path: "/rview-components/notice-preview-gm",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "DescComponentsNoticePreviewGm" */ "@/views/desc/DescComponentsNoticePreviewGm"
      //     ),
      //   meta: { title: TITLE + " - 内联框架预览 NoticePreviewGm" }
      // },
      {
        path: "/rview-components/search-remote",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsSearchRemote" */ "@/views/desc/DescComponentsSearchRemote"
          ),
        meta: { title: TITLE + " - 远程搜索 SearchRemote" }
      },
      {
        path: "/rview-components/checkbox-all",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsCheckboxAll" */ "@/views/desc/DescComponentsCheckboxAll"
          ),
        meta: { title: TITLE + " - 多选 CheckboxAll" }
      },
      {
        path: "/rview-components/items-show",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsItemsShow" */ "@/views/desc/DescComponentsItemsShow"
          ),
        meta: { title: TITLE + " - 多列表项 ItemsShow" }
      },
      {
        path: "/rview-components/clipboard",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsClipboard" */ "@/views/desc/DescComponentsClipboard"
          ),
        meta: { title: TITLE + " - 复制板 Clipboard" }
      },
      {
        path: "/rview-components/input-select-button",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsInputSelectButton" */ "@/views/desc/DescComponentsInputSelectButton"
          ),
        meta: { title: TITLE + " - 选择列表 InputSelectButton" }
      },
      {
        path: "/rview-components/table-auto",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsTableAuto" */ "@/views/desc/DescComponentsTableAuto"
          ),
        meta: { title: TITLE + " - 自定义表格 TableAuto" }
      },
      {
        path: "/rview-components/form-custom",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsFormCustom" */ "@/views/desc/DescComponentsFormCustom"
          ),
        meta: { title: TITLE + " - 搜素表单 FormCustom" }
      },
      {
        path: "/rview-components/form-create",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsFormCreate" */ "@/views/desc/DescComponentsFormCreate"
          ),
        meta: { title: TITLE + " - 动态表单 FormCreate" }
      },
      // {
      //   path: "/rview-components/search-panel-gm",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "DescComponentsSearchPanelGm" */ "@/views/desc/DescComponentsSearchPanelGm"
      //     ),
      //   meta: { title: TITLE + " - GM搜索表单 SearchPanelGm" }
      // },
      {
        path: "/rview-components/auth",
        component: () =>
          import(/* webpackChunkName: "DescComponentsAuth" */ "@/views/desc/DescComponentsAuth"),
        meta: { title: TITLE + " - 鉴权页 Auth" }
      },
      {
        path: "/rview-components/editor",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsEditor" */ "@/views/desc/DescComponentsEditor"
          ),
        meta: { title: TITLE + " - 富文本编辑器 Editor" }
      },
      {
        path: "/rview-components/file-upload",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsFileUpload" */ "@/views/desc/DescComponentsFileUpload"
          ),
        meta: { title: TITLE + " - 文件上传 FileUpload" }
      },
      {
        path: "/rview-components/images-upload",
        component: () =>
          import(
            /* webpackChunkName: "DescComponentsImagesUpload" */ "@/views/desc/DescComponentsImagesUpload"
          ),
        meta: { title: TITLE + " - 图片上传 ImagesUpload" }
      }
    ]
  },
  {
    path: "/auth",
    component: () => import(/* webpackChunkName: "Auth" */ "@/views/custom/Auth"),
    meta: { title: TITLE + " - 鉴权" }
  }
]
