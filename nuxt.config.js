// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: 'Ode to A ',
      description: 'Ode to A',
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

    vite: {
      css: {
        preprocessorOptions: {
          sass: {
            additionalData: '@import "@/assets/styles/vars/*.sass"',
          },
        },
      },
    },

    css: [
      '~/assets/styles/reset.css',
      '~/assets/styles/form-reset.css',
      '~/assets/styles/typography.sass',
      '~/assets/styles/transitions.sass',
      '~/assets/styles/main.sass',
    ],

    modules: [
      [
        '@storyblok/nuxt',
        {
          accessToken: process.env.PREVIEWKEY,
          devtools: true,
        },
      ],
      ['@nuxt/image'],
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
  },
});
