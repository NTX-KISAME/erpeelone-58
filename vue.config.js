const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'ntx-dist',

  pwa: {
    name: 'XI RPL 1 | Erpeelone',
    themeColor: '#F39520',
    msTileColor: '#E39A16',
    manifestCrossorigin: 'anonymous'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'id',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
})
