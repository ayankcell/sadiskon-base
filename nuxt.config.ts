import { fileURLToPath } from "url"
import { dirname, join } from "path"

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  //@ts-ignore
  site: {
    url: 'https://www.sadiskon.com',
    name: 'Sadiskon',
    trailingSlash: true,
    defaultLocale: 'id_ID.utf8'
  },
  css: [
    join(currentDir, './assets/css/tailwind.css')
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      link: [
        { rel: "manifest", href: "https://www.sadiskon.com/sds-manifest.json" },
        { rel: 'preconnect', href: 'https://i0.wp.com' },
        { rel: 'preconnect', href: 'https://i1.wp.com' },
        { rel: 'preconnect', href: 'https://i2.wp.com' },
        { rel: 'preconnect', href: 'https://weserve.nl' },
      ],
      script: [
        { type: 'application/ld+json', innerHTML: `{"@context": "https://schema.org","@type": "Organization","url": "https://www.sadiskon.com","logo": "https://www.sadiskon.com/img/pwa/sadiskon-icon-pwa-512.png"}` }
      ],
      style: [
        {
          innerHTML: `html { scroll-behavior: smooth;}`
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      sdsDomain: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.sadiskon.com',
      trailingSlash: true
    }
  },
  //@ts-ignore
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-schema-org',
    'dayjs-nuxt',
    '@nuxtjs/sitemap',
    'nuxt-delay-hydration',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  ui: {
    icons: ['heroicons', 'bxl']
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
      photon: {
        name: 'photon',
        options: {
          baseDomain: 'sadiskon.com',
        },
        provider: join(currentDir, './providers/photon')
      },
      weserve: {
        name: 'weserve',
        options: {
          baseDomain: 'sadiskon.com'
        },
        provider: join(currentDir, './providers/weserve')
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
