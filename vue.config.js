module.exports = {

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
