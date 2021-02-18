module.exports = {
  devServer: {
    // webpack-dev-serve提供的
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock',
        },
      },
    },
  },
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/varibles.scss"; 
        @import "~@/assets/styles/mixins.scss";`,

      },
    },
  },
};
