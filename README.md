<p align="center">
    <a href="javascript:">
        <img width="200" src="https://s2.loli.net/2023/09/16/sAx3BrtYGp7X1cQ.png">
    </a>
</p>

[//]: # (<p align="center">)

[//]: # (  <a href="https://www.npmjs.com/package/r-view-design">)

[//]: # (		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="94" height="20" role="img" aria-label="npm: v2.15.14"><title>npm: v2.15.14</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="94" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url&#40;#r&#41;"><rect width="35" height="20" fill="#555"/><rect x="35" width="59" height="20" fill="#007ec6"/><rect width="94" height="20" fill="url&#40;#s&#41;"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="185" y="150" fill="#010101" fill-opacity=".3" transform="scale&#40;.1&#41;" textLength="250">npm</text><text x="185" y="140" transform="scale&#40;.1&#41;" fill="#fff" textLength="250">npm</text><text x="635" y="140" transform="scale&#40;.1&#41;" fill="#fff" textLength="490">v1.0.6</text></g></svg>)

[//]: # (  </a>)

[//]: # (</p>)

<h1>
RView Design
    <h3>基于 iView 二次封装的前端UI公共组件库 RView Design（Based on Vue.js 2）</h3>
</h1>

RView 组件库使用前置条件：项目基于Vue2.js 且使用ViewUI组件库！

一个最简单的使用案例库：[rview-vue2-case](https://gitea.com/MangoRu/rview-vue2-case)
<br>

## Docs

[1.x](http://81.69.247.224:8081/)

## Install

### Install RView

Using npm:

```
npm i r-view-design --save
```

### Project setup - 项目依赖安装

```
npm install
```

### Compiles and hot-reloads for development - 启动本地编译调试

```
npm run dev
```

### Lints and fixes files - 检查代码语法和格式

```
npm run lint
```

## Usage

```
<template>
  <r-layout></r-layout>
</template>
```

Using `import` to `main.js`:

```js
import RView from 'r-view-design'
import 'r-view-design.css'

Vue.use(RView)
```

## Maybe Issues

> Syntax Error: Error: Cannot find module 'vue/compiler-sfc' => vue-loader降低版本 npm i vue-loader@15 -D

## Other Description

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

| NodeJS  | Supported node-sass version | Node Module |
|---------|-----------------------------|-------------|
| Node 16 | 6.0+                        | 93          |
| Node 14 | 4.14+                       | 83          |

</details>
