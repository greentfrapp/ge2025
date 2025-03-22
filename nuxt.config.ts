import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    baseURL: '/ge2025/',
    buildAssetsDir: 'assets',
    head: {
      title: 'GE2025',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxt/content'],
  compatibilityDate: '2025-03-19',
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
  watch: ['content/**/*'],
})
