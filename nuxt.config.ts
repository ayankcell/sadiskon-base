// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  //@ts-ignore
  site: {
    url: 'https://www.sadiskon.com',
    name: 'Sadiskon',
    trailingSlash: true,
    defaultLocale: 'id_ID.utf8'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      link: [
        { rel: "manifest", href: "/sds-manifest.json" }
      ],
      script:[
        {type:'application/ld+json', innerHTML:`{"@context": "https://schema.org","@type": "Organization","url": "https://www.sadiskon.com","logo": "https://www.sadiskon.com/img/pwa/sadiskon-icon-pwa-512.png"}`}
      ],
      style: [
        {
          innerHTML: `html {
          scroll-behavior: smooth;
        }`}
      ]
    }
  },
  runtimeConfig: {
    public: {
      sdsDomain: process.env.NUXT_SDS_DOMAIN || 'https://www.sadiskon.com',
    }
  },
  //@ts-ignore
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-schema-org',
    'dayjs-nuxt',
    'nuxt-simple-sitemap',
    'nuxt-delay-hydration',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  ui:{
    icons:['heroicons','bxl']
  },
  sitemap: {
    sitemaps: true,
    defaultSitemapsChunkSize: 150,
    exclude: [
      '/amp/**', '/promodetails'
    ]
  },
  gtm: {
    id: 'GTM-NTG6WQ2',
    defer: true,
    enableRouterSync: true
  },
  delayHydration: {
    mode: 'mount',
    debug: process.env.NODE_ENV === 'development',
    // replayClick: true,
    //@ts-ignore
    idleCallbackTimeout: { mobile: 2000, desktop: 1000 }
  },
  image: {
    providers: {
      customProvider: {
        name: 'photon',
        provider: '~/providers/photon'
      }
    }
  },

  dayjs: {
    locales: ['id'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'id',
    defaultTimezone: 'Asia/Jakarta',
  },
  colorMode: {
    preference: 'light'
  }
})
