module.exports = {

  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/styles/varibles.scss";',
      },
    },
  },
};
