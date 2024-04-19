# Description 项目说明

## Standard 项目规范
### Standard-1 命名规范

`camelCase（小驼峰式命名法）` & `PascalCase（大驼峰式命名法）` & `kebab-case（短横线连接式）` & `Snake（下划线连接式）`

<details>
<summary>1.1 项目文件命名</summary>

`1.1 项目文件命名`
> [ 注意：优先选择单个单词命名，小写 (kebab-case & Snake) ] => 静态文件下划线，编译文件短横线
- 目录名: [ 复数结构则复数命名 ]
- 项目名 || CSS文件名 || JS文件名: 短横线分隔
- 图像文件名 || HTML文件名: 下划线分隔
</details>

<details>
<summary>1.2 Vue组件命名</summary>

`1.2 Vue组件命名`
> [ PascalCase 组件名以高级别单词开头(即一般化描述开头，描述性修饰词结尾)]
- 单例组件名: The前缀  
  只拥有单个活跃实例的组件 每个页面只使用一次 => 应用定制，不接受prop，如头部和侧边栏
- 基础组件名: Base前缀  
  不包含业务，独立、具体功能的基础组件 在一个页面内可使用多次 => 任何项目用，高可复用组件，如日期选择器、模态框
- 业务组件: Custom前缀  
  掺杂了复杂业务的组件（拥有自身 data、prop 的相关处理） => 当前项目用，会包含一些业务如数据请求
- 紧密耦合的组件名: 父组件名前缀  
  和父组件紧密耦合的子组件应该以父组件名作为前缀命名
</details>

<details>
<summary>1.3 代码参数命名</summary>

`1.3 代码参数命名`
- `name`: PascalCase&多个单词  
  (App&Vue内置组件transition/component等除外)
- `prop`: camelCase
- `router`: (path)kebab-case
- `模板中组件`: kebab-case
- `变量`: camelCase  
  命名规范：类型 + 对象描述或属性的方式
- `常量`: 大写&下划线分隔
- `方法`: camelCase  
  命名规范：统一使用动词或者动词 + 名词形式
- `自定义事件`: kebab-case  
  (如emit事件) => 建议命名需遵守为 on + 动词 的形式
- `事件方法`: camelCase  
  命名规范：handle + 名称（可选）+ 动词
</details>

### Standard-2 代码规范

<details>
<summary>2.1 Vue</summary>

`2.1 Vue`
- `data`: 必须是一个函数 
- `prop`: Prop定义尽量详细
- `computed`: 把复杂计算属性分割为尽可能多的更简单的属性
- `v-for & v-if`: v-if 和 v-for 互斥(计算属性or父v-if); 为 v-for 设置键值key
- `attribute元素`: 多attribute分行撰写，每个 attribute 一行; 非空 HTML 特性值应该始终带双引号
- `表达式`: 复杂的表达式则应该重构为计算属性或方法
- `指令缩写`: `:` 表示 v-bind: ; `@` 表示 v-on: ; `#` 表示 v-slot:
</details>

<details>
<summary>2.2 HTML & CSS</summary>

`2.2 HTML & CSS`  

HTML
- `元素及标签闭合`: 空元素标签都不加 "/" 字符，如<br>  

CSS
- `样式文件`: 必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写 `@charset "UTF-8";`
- `代码格式化`: 展开格式（Expanded）
- `代码大小写`: 小写
- `代码易读性`: 
- - 左括号与类名一个空格，冒号与属性值一个空格
- - 逗号分隔的取值，逗号之后一个空格
- - 单个 CSS 选择器或新声明开启新行
- - 颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0
- - 属性值十六进制数值能用简写的尽量用简写
- - 不要为 0 指明单位，如0px不可取
- `属性值引号`: 单引号
- `属性书写顺序`:
- - 1 布局定位属性：display / position / float / clear / visibility / overflow
- - 2 自身属性：width / height / margin / padding / border / background
- - 3 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
- - 4 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background: linear-gradient …
- `CSS3 浏览器私有前缀`: 私有在前，标准在后
</details>

<details>
<summary>2.3 JavaScript</summary>

`2.3 JavaScript`
- `单行代码块`: 单行代码块中使用空格
- `大括号风格`: 
  ```javascript
  if (foo) {
    bar()
  } else {
    baz()
  }
  ```
- `代码中的空格`:
  ```javascript
  /* 逗号后面使用空格，逗号前面不加空格 */ 
   var foo = 1, bar = 2
  /* 对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格 */ 
   var obj = { 'foo': 'haha' }
  /* 代码块前要添加空格 */  
  if (a) {
    b()
  }
  /* 函数声明括号前要加空格 */
  function func (x) {
  // ...
  }
  /* 函数调用时禁止使用空格 */
  fn()
  /* 操作符前后加空格 */
  var sum = 1 + 2
  ```
</details>

### Standard-3 注释规范

> 无必要勿增； 有必要详尽

<details>
<summary>3.1 HTML & CSS注释</summary>

- 单行注释: 前后空1个字符，位于代码上面，独占一行
```html
<!-- Comment Text -->
<div>...</div>
```
```css
/* Comment Text */
.jdc {}

/* 行与行间隔一行 */
.jdc {}
```
- 模块注释:   
  HTML - 前后空1字符，模块间隔一行，\<!-- S Comment Text \-->开始， \<!-- E Comment Text \-->结束  
  CSS - /* 与 模块信息描述占一行，多个横线分隔符 - 与 */ 占一行，行与行间隔两行
```html
<!-- S Comment Text A -->
<div class="mod_a">
  ...
</div>
<!-- E Comment Text A -->
```
```css
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}
```
- HTML嵌套模块注释: 模块内再出现模块注释，则在尾部独占一行
```html
<!-- S Comment Text A -->
<div class="mod_a">
  
    <div class="mod_b">
        ...
    </div>
    <!-- /mod_b -->
  
</div>
<!-- E Comment Text A -->
```
- CSS文件注释: 样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息
```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```
</details>

<details>
<summary>3.2 JavaScript文件注释</summary>

- 单行注释: //，独占一行，注释行的上方空行（块顶部除外）
```javascript
// is current tab
const active = true
```
- 多行注释: /** ... */
```javascript
/**
* make() returns a new element
* based on the passed-in tag name
*/
```
- 注释空格: 注释内容和注释符之间需要有一个空格 `eslint: spaced-comment`
- 特殊标记:  
  // FIXME : 说明问题是什么  
  // TODO : 说明还要做什么或者问题的解决方案  
- 文档类注释: 如函数、类、文件、事件等；都使用 jsdoc 规范
```javascript
/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book (title, author) {
  this.title = title
  this.author = author
}

Book.prototype = {
  /**
   * 获取书本的标题
   * @returns {string|*}
   */
  getTitle: function () {
    return this.title
  },
  /**
   * 设置书本的页数
   * @param pageNum {number} 页数
   */
  setPageNum: function (pageNum) {
    this.pageNum=pageNum
  }
}
```
- 注释工具: ESLint
</details>

### Standard-4 其它
- 缩进换行使用两个空格
- JavaScript 代码末尾加分号（大型多人协作项目）; 不加分号（小型个人）


-----

## 项目目录示例
```
my-project-name/
|- BuildScript                // 流水线部署文件目录（当前项目无）
|- docs                       // 项目的细化文档目录（可选）
|- nginx                      // 部署在容器上前端项目 nginx 代理文件目录
|- node_modules               // 下载的依赖包
|- public                     // 静态页面目录
    |- favicon.ico            // 项目图标
    |- index.html             // 项目入口
|- src                        // 源码目录
    |- api                    // http 请求目录
    |- assets                 // 静态资源目录，这里的资源会被wabpack构建
        |- icon               // icon 存放目录
        |- img                // 图片存放目录
        |- js                 // 公共 js 文件目录
        |- styles             // 公共样式 scss 存放目录
            |- frame.scss     // 入口文件（当前项目无）
            |- global.scss    // 公共样式（当前项目无）
            |- reset.scss     // 重置样式（当前项目无）
    |- components             // 组件
    |- plugins                // 插件（当前项目无）
    |- router                 // 路由
    |- store                  // 全局状态管理（当前项目无）
    |- utils                  // 工具存放目录
        |- request.js         // 公共请求工具（当前项目无）
    |- views                  // 页面存放目录
    |- App.vue                // 根组件
    |- main.js                // 入口文件
    |- tests                  // 测试用例（当前项目无）
    |- .browserslistrc        // 浏览器兼容配置文件
    |- .editorconfig          // 编辑器配置文件（当前项目无）
    |- .eslintignore          // eslint 忽略规则
    |- .eslintrc.js           // eslint 规则
    |- .gitignore             // git 忽略规则
    |- babel.config.js        // babel 规则
    |- Dockerfile             // Docker 部署文件（当前项目无）
    |- jest.config.js         // （当前项目无）
    |- package-lock.json
    |- package.json           // 依赖
    |- README.md              // 项目 README
    |- vue.config.js          // webpack 配置
```
