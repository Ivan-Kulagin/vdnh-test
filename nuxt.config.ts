// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'mlly'

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

  alias: {
    'app': fileURLToPath(new URL('./src/app', import.meta.url)),
    'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
    'widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
    'features': fileURLToPath(new URL('./src/features', import.meta.url)),
    'entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
    'shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
  },

  modules: [
      '@nuxtjs/i18n',
      'nuxt-swiper'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
