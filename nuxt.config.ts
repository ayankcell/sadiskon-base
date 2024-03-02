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
        { rel: 'dns-prefetch', href: 'https://i0.wp.com' },
        { rel: 'dns-prefetch', href: 'https://i1.wp.com' },
        { rel: 'dns-prefetch', href: 'https://i2.wp.com' },
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
    '@nuxt/image',
    'nuxt-schema-org',
    '@nuxt/ui',
    'dayjs-nuxt',
    // 'nuxt-delay-hydration',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  ui: {
    icons: ['heroicons', 'bxl']
  },
  gtm: {
    id: 'GTM-NTG6WQ2',
    defer: true,
    enableRouterSync: true
  },
  // delayHydration: {
  //   mode: 'mount',
  //   debug: process.env.NODE_ENV === 'development',
  //   // replayClick: true,
  //   //@ts-ignore
  //   idleCallbackTimeout: { mobile: 2000, desktop: 1000 }
  // },
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
