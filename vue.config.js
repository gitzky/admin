module.exports = {
  devServer: {
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
