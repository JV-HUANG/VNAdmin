import { aliases } from 'vuetify/iconsets/mdi'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    'nuxt-auth-utils',
    'nuxt-echarts',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],
  css: ['~/assets/styles/index.css'],
  experimental: { typedPages: true },
  typescript: { shim: false, strict: true },
  vue: { propsDestructure: true },
  vueuse: { ssrHandlers: true },
  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        viewportSize: true,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {},
        reloadOnFirstRequest: true,
      },
    },
  },
  icon: {
    clientBundle: {
      icons: Object.values(aliases).map((v) =>
        (v as string).replace(/^mdi-/, 'mdi:'),
      ),
      scan: true,
    },
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
  },
  echarts: {
    charts: ['LineChart', 'BarChart', 'PieChart', 'RadarChart'],
    renderer: 'svg',
    components: [
      'DataZoomComponent',
      'LegendComponent',
      'TooltipComponent',
      'ToolboxComponent',
      'GridComponent',
      'TitleComponent',
      'DatasetComponent',
      'VisualMapComponent',
    ],
  },
  build: {
    transpile: [/vue-i18n/]
  },
  vite: {
    build: {
      sourcemap: false
     },
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      },
    plugins: [
        VueI18nVitePlugin({
          include: [
            resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
          ]
        })
      ]
    },
  },
  runtimeConfig: {
    github: {
      clientId: '',
      clientSecret: '',
    },
    session: {
      name: 'nuxt-session',
      password: '',
    },
  },
  compatibilityDate: '2024-08-05',
})
