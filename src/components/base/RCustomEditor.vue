<template>
  <div class="tinymce-content">
    <tinymce-editor
      ref="tinymce"
      v-model="content"
      :init="computeInit"
      :disabled="disabled"
      :key="tinymceKey"
    ></tinymce-editor>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce"
import TinymceEditor from "@tinymce/tinymce-vue"
// import { GMRockmanUploadFileToCDN } from "api/gm-rockman/file-request"
import "tinymce/icons/default/icons"
import "tinymce/themes/silver/theme"
import "tinymce/plugins/code"
import "tinymce/plugins/fullscreen"
import "tinymce/plugins/image" // 上传图片插件
import "tinymce/plugins/link"
import "tinymce/plugins/lists" // 列表插件
import "tinymce/plugins/table" // 表格插件
import "tinymce/plugins/wordcount" // 字数统计插件

/** tinymce富文本编辑器的使用 */
// http://tinymce.ax-z.cn/general/basic-setup.php
/**
 * 1. 下载安装相关依赖
 *    npm install tinymce -S
 *    npm install @tinymce/tinymce-vue -S => FIXME vue2.0 版本安装tinymce-vue npm install --save "@tinymce/tinymce-vue@^3"
 * 2. 拷贝tinymce/skins
 *    下载完成后，在vue项目存放静态资源的文件夹中新建一个文件夹tinymce，到node_modules中找到tinymce/skins目录，将skins文件夹拷贝到新建的tinymce文件夹中
 * 3. 汉化
 *    下载语言包，解压将langs文件夹拷贝到vue项目静态资源路径下的tinymce文件夹中 [https://www.tiny.cloud/get-tiny/language-packages/]
 * 4. tinymce封装为组件
 * 2. tinymce封装为组件
 * **/

export default {
  name: "REditor",
  components: { TinymceEditor },
  props: {
    disabled: { type: Boolean, default: false },
    value: { type: String, default: "" },
    editorHeight: { type: Number, default: 500 }
  },
  data() {
    return {
      // 父组件通过ref拿到该组件的值
      content: this.$props.value,
      tinymceKey: new Date().getTime()
    }
  },
  computed: {
    computeInit() {
      return {
        language_url: "/tinymce/langs/zh_CN.js",
        // language_url: require("../../../public/tinymce/langs/zh_CN"),
        language: "zh_CN",
        // 编辑器需要一个skin才能正常工作，所以要设置一个skin_url指向之前复制出来的skin文件
        skin_url: "/tinymce/skins/ui/oxide",
        // skin_url: require("../../../public/tinymce/skins/ui/oxide"),
        content_css: "/tinymce/skins/content/default/content.min.css",
        // content_css: require("../../../public/tinymce/skins/content/default/content.min.css"),
        height: this.$props.editorHeight,
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        plugins: this.computePlugins,
        toolbar: this.computeToolBar,
        // 菜单栏隐藏
        menubar: false,
        // 右下角技术支持隐藏(去水印)
        branding: false,
        // 底部状态栏隐藏
        statusbar: false,
        // 允许粘贴图像
        paste_data_images: true,
        images_upload_credentials: true,
        // 自定义前端上传逻辑 参数(图片数据，成功时的回调函数，失败时的回调函数)
        /**
         * 下面方法是为tinymce添加自定义插入图片按钮
         * 借助iView的Upload组件,将图片先上传到存储云上，再将图片的存储地址放入编辑器内容
         */
        // TODO 富文本图片上传待处理
        images_upload_handler: (blobInfo, success) => {
          this.$Message.info("图片上传中...")
          const formData = new FormData()
          formData.append("file", blobInfo.blob())
          // 上传
          // GMRockmanUploadFileToCDN(formData).then((res) => {
          //   if (res.data) {
          //     success(res.data)
          //   } else {
          //     this.$Message.error("图片上传失败！请更换图片重试")
          //   }
          // })
        }
      }
    },
    computePlugins() {
      // 富文本插件配置
      return "image link code table lists wordcount"
    },
    computeToolBar() {
      // 富文本工具栏配置 "|"分隔 []数组配置多行
      /** TinyMCE默认的工具栏按钮列表
       *    newdocument（新文档）√
       *    bold（加粗）italic（斜体）underline（下划线）strikethrough（删除线）√
       *    alignleft（左对齐）aligncenter（居中对齐）alignright（右对齐）alignjustify（两端对齐）√
       *    outdent（减少缩进）indent（增加缩进）lineheight（行高 5.5新增）√
       *    styleselect（格式设置）formatselect（段落格式）fontselect（字体选择）fontsizeselect（字号选择）√
       *    cut（剪切）copy（复制）paste（粘贴）√
       *    bullist（项目列表UL）numlist（编号列表OL）√
       *    undo（撤销）redo（重做/重复）removeformat（清除格式） √
       *    blockquote（引用） subscript（下角标）superscript（上角标）√
       * **/
      return [
        "removeformat | code newdocument | undo redo | cut copy paste | forecolor backcolor bold italic underline strikethrough",
        "styleselect formatselect fontselect fontsizeselect ",
        "alignleft aligncenter alignright alignjustify | outdent indent lineheight bullist numlist | blockquote subscript superscript link image"
      ]
    }
  },
  watch: {
    content(content) {
      this.$emit("input", content)
    },
    value: {
      handler(newValue) {
        this.$data.content = newValue
      },
      deep: true
    }
  },
  mounted() {
    tinymce.init(this.computeInit)
  }
}
</script>

<style scoped></style>
