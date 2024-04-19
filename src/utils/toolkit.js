import Clipboard from "clipboard"
import commonData from "utils/common-data"

/**
 * 把标准时间(json)时间格式化成yyyy-MM-dd HH:mm:ss
 * 解决后台返回的 '2021-07-08T18:32:07.179' 此类时间格式
 */

export function dateFormat(str) {
  let dateStr = new Date(str).toJSON()
  return new Date(+new Date(dateStr) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "")
}

export function copy(code) {
  const content = document.querySelector(`.markdown-body section${code} code`).innerText
  let clipboard = new Clipboard(".copy-btn", {
    text: () => content
  })
  clipboard.on("success", () => {
    commonData.root_vue.$Message.success("复制成功,已复制到剪切版")
    clipboard.destroy()
  })
  clipboard.on("error", () => {
    commonData.root_vue.$Message.success("当前浏览器不支持自动复制,复制失败")
    clipboard.destroy()
  })
}
