// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/public/css/globals.css', '~/public/css/styles.css'],

  app: {
    baseURL: '/vdnh-test/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Тестовое ВДНХ'
    }
  },
  modules: [
      '@nuxtjs/i18n',
      'nuxt-swiper'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
