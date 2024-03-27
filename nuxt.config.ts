// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/global.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    spoonacular: {
      apiKey: ''
    }
  },
  $development: {
    nitro: {
      storage: {
        recipes: {
          driver: 'fs',
          base: 'recipes'
        }
      }
    }
  }
})
