// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/public/css/globals.css', '~/public/css/styles.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Тестовое ВДНХ'
    }
  },

  vue: {
    // compilerOptions: {
    //   isCustomElement: (tag) => tag.startsWith('swiper-')
    // }
  },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
