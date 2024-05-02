import { apiPlugin } from '@storyblok/vue';

export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  app: {
    head: {
      viewport: 'viewport-fit=cover, width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'mobile-web-app-capable', content: 'yes' }],
      meta: [{ name: 'apple-mobile-web-app-capable', content: 'yes' }],
      meta: [{ name: 'apple-touch-fullscreen', content: 'yes' }],
      meta: [
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/vars/variables.sass"',
        },
      },
    },
  },

  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/form-reset.css',
    '~/assets/styles/typography.sass',
    '~/assets/styles/transitions.sass',
    '~/assets/styles/body.sass',
  ],

  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.PREVIEWKEY,
        use: [apiPlugin],
      },
    ],
    ['@nuxt/image'],
    ['@pinia/nuxt'],
  ],

  image: {
    format: ['webp'],
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
  },

  build: {
    transpile: ['gsap'],
  },
});
