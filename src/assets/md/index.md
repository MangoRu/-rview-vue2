# 基于iView二次封装的前端UI公共组件库 RView Design

> 主UI组件：iView；部分Icon图标为ElementUI  
> Syntax Error: Error: Cannot find module 'vue/compiler-sfc'
> => vue-loader降低版本 npm i vue-loader@15 -D

## 项目依赖安装

```linux
npm install
```

### 启动本地编译调试

```
npm run dev
```

### 编译到测试环境

```
npm run build:test 测试
```

### 编译到生产环境

```
npm run build:production
```

### 检查代码语法和格式

```
npm run lint
```

#### 其他描述

<details>
<summary>1. 项目特征</summary>

##### `Project features`:

- Babel
- Router (use history mode)
- CSS Pre-processors [Sass/SCSS (with node-sass)]
- Linter / Formatter [ESLint + Prettier] (lint on save)
- In dedicated config files

</details>

<details>
<summary>2. 版本配置</summary>

##### `Version configuration`:

```
npm -v [8.1.0]
node -v [v16.13.0] (npm: 8.1.0 node-sass: 6.0.1 sass-loader: 10.2.0)
vue -V [@vue/cli 4.5.15]
```

- `vue: ^2.6.11`
- `vue-router: ^3.2.0`
- `axios: ^0.24.0`
- `view-design: ^4.7.0-beta.11`
- `element-ui: ^2.15.6`
- `node-sass: ^6.0.1`
- `sass-loader: ^10.2.0`
- `eslint: ^6.7.2`
- `prettier: ^2.2.1`

|  NodeJS  | Supported node-sass version  | Node Module  |
|  ------  | ---------------------------  | -----------  |
| Node 16  | 6.0+                         | 93           |
| Node 14  | 4.14+                        | 83           |

</details>

