import { apiPlugin } from '@storyblok/vue';

export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  app: {
    pageTransition: { name: 'pages', mode: 'out-in' },
    layoutTransition: { name: 'pages', mode: 'out-in' },
    head: {
      viewport: 'viewport-fit=cover, width=device-width, initial-scale=1',
      title: 'Ode to A ',
      description:
        'Ode to A is a vision, an attitude, an art, an agency. We stand up for those who choose fire. The ones who are ready and willing to express their their most powerful essence into presence. With conviction, with confidence, with full ownership.',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'Carroccera explores the imposed boundaries between the human and the natural world, offers residency and rewilds neglected plots of land.',
        },
      ],
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
