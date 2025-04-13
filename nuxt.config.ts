// https://nuxt.com/docs/api/configuration/nuxt-config
const environment = process.env.APP_STAGE || 'production';

const envSet = require(`./env.${environment}.js`);

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@pinia/nuxt'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['vue'],
    },
  ],

  devtools: {
    enabled: false,
  },

  app: {
    head: {
      title: 'nuxt-starter',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  css: ['@/assets/css/reset.css'],

  runtimeConfig: {
    public: envSet,
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetch: false,
      },
    },
  },

  compatibilityDate: '2025-04-13',

  typescript: {
    strict: true,
    typeCheck: true,
  },

  eslint: {
    config: {
      stylistic: {
        quoteProps: 'as-needed',
        semi: true,
        braceStyle: '1tbs',
        arrowParens: true,
      },
    },
  },
});
