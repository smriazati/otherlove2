
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      link: [{ rel: 'icon', type: 'image/png', href: './favicon.png' }]
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'layout', mode: 'out-in' }
  },
  build: {
    transpile: ['gsap'],
  },
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/main.scss', '~/assets/scss/rte.scss'],
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: '21sfy6kc'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;'
        }
      }
    }
  },
})