const path = require("path")
// 每次打包前的文件清除工作
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// 通过压缩算法，将前端打包好的资源文件进一步压缩，生成指定的、体积更小的压缩文件，让浏览器能够更快的加载资源
const CompressionWebpackPlugin = require("compression-webpack-plugin")

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

function resolve(dir) {
  return path.join(__dirname, dir)
  // return path.join("..", dir)
}

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "RView 组件"
    }
  },
  outputDir:
    process.env.NODE_ENV === "production"
      ? "prod"
      : process.env.NODE_ENV === "test"
      ? "test"
      : "dev",
  devServer: {
    port: 8081,
    disableHostCheck: true
  },
  chainWebpack: (config) => {
    config.plugin("compressionPlugin").use(
      new CompressionWebpackPlugin({
        // filename: '[path].gz[query]',
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8
      })
    )
    // 配置目录别名,非js引入别名前加 ~
    config.resolve.alias
      .set("@", resolve("src"))
      .set("api", resolve("src/api"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("router", resolve("src/router"))
      .set("utils", resolve("src/utils"))
      .set("views", resolve("src/views"))
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true
      })
  },
  configureWebpack: {
    plugins: [
      // 生产环境编译文件时先清除再生成新文件
      new CleanWebpackPlugin()
    ]
  },
  // CSS解析
  css: {
    // sass-loader版本不同,loaderOptions键名不同 => v8-:data / v8:prependData / v10+:additionalData
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/common/variables.scss"`
      },
      scss: {
        additionalData: `@import "~@/assets/styles/common/variables.scss";`
      }
    }
    //  强制内联CSS(使用组件时，不需要再引入css) extract: false
  }
}
