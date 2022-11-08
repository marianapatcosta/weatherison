module.exports = {
  configureWebpack: {
    devtool: "source-map"
  }
};

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/_main.scss";`
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  },

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Weatherison";
      return args;
    });
  }
};
