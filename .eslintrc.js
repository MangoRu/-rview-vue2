module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  env: {
    // 预定义的全局变量，这里是浏览器环境
    browser: true,
    node: true,
    es6: true
  },
  // 扩展风格 "@vue/prettier"
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    // 对Babel解析器的包装使其与 ESLint 兼容
    parser: "babel-eslint",
    // 代码是 ECMAScript 模块, 有两种script或module
    sourceType: "module"
  },
  rules: {
    // 0 关闭 1 警告 2 开启
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "off", // error
    // 块语句中的内容不能为空
    "no-empty": 1,
    // 禁止多余的冒号
    "no-extra-semi": 1,
    // 空行最多不能超过2行
    "no-multiple-empty-lines": [1, { max: 2 }],
    // 禁止重复声明变量
    "no-redeclare": 1,
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-keys": 2,
    // 禁止对null使用==或!=运算符
    "no-eq-null": 1,
    // 禁止非必要的括号
    "no-extra-parens": 1,
    // 禁止重复的函数声明
    "no-func-assign": 2,
    // 禁止行内备注
    "no-inline-comments": 0,
    // 禁止无效的正则表达式
    "no-invalid-regexp": 2,
    // 禁止不必要的嵌套块
    "no-lone-blocks": 2,
    // 禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [1, false],
    // 不能用多余的空格
    "no-multi-spaces": 1,
    // 函数调用时 函数名与()之间不能有空格
    "no-spaced-func": 2,
    // 不能有未定义的变量
    "no-undef": 1,
    // 避免多行表达式
    "no-unexpected-multiline": 1,
    // 标识符不能以_开头或结尾
    "no-underscore-dangle": 1,
    // 不能有无法执行的代码
    "no-unreachable": 2,
    // 禁止无用的表达式
    "no-unused-expressions": 1,
    // 不能有声明后未被使用的变量或参数
    "no-unused-vars": [1, { vars: "all", args: "after-used" }],
    // 控制逗号前后的空格
    "comma-spacing": [1, { before: false, after: true }],
    // 引号类型 `` "" ''
    quotes: [0, "single"]
  }
}
