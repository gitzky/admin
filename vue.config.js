const path = require("path");

module.exports = {
  // 基本路径
  baseUrl: "./",
  // 输出文件目录
  outputDir: "dist",
  assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)

  lintOnSave: process.env.NODE_ENV === "development",
  devServer: {
    port: 8800,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API, //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
