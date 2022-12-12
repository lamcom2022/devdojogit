
import theme from '@nuxt/content-theme-docs'
import { join } from 'path'
export default {
  ssr: false,
  components: true,
  server: {
    port: process.env.APP_PORT || '5000', // default: 5000
  },
  generate: {
    fallback: true
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Swara Nritya Company',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || ' Robotic process automation tool which provides a business to configure software bots as a first step toward implementing more complex AI solutions. Increase productivity and scale up operations using Intelligent Process Automation' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Robotic Process Automation, RPA tools, Robotic Automation Software, RPA Consulting services, Design Automation Services, Custom RPA Solutions, robotic process automation consulting, rpa consulting firms, rpa consulting companies, Robotic Process Automation RPA Tools, RPA Bot Development, Business process Automation'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'SwaraNritya'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: process.env.npm_package_name || 'Swara Nritya Company',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description || 'Robotic process automation tool which provides a business to configure software bots as a first step toward implementing more complex AI solutions. Increase productivity and scale up operations using Intelligent Process Automation'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://res.cloudinary.com/nathansweb/image/upload/v1640864433/www.xyz.com/brand-assets/logos/svg/NO_BORDER/Group_21-1_krgdr9.svg'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'SwaraNritya'
      },
      {
        hid: 'copyright',
        name: 'copyright',
        content: 'SwaraNritya'
      },
      {
        hid: 'reply-to',
        name: 'reply-to',
        content: 'contact@SwaraNritya.com'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.devdojo.com/images/november2020/tails-icon.png' }
    ],
    script: [
      { hid: 'ustr', src: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.string/3.3.5/underscore.string.js', defer: true },
      { hid: 'iconify', src: 'https://code.iconify.design/2/2.0.4/iconify.min.js', defer: true }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [{
      code: 'ru',
      iso: 'ru-RU',
      file: 'ru-RU.js',
      name: 'Русский'
    }, {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }, {
      code: 'ja',
      iso: 'ja_JP',
      file: 'ja_JP.js',
      name: '日本語'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/override.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global.js'
  ],
  router: {
    middleware: 'layoutMiddleware'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  content: {
    // Options
    // $content api will be served on localhost:9000/content-api
    apiPrefix: 'content-api',
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          theme: 'bubble', duration: '7000'
        }
      }
    ]
  },
  axios: {
    proxy: false
  },
  sitemap: {
    hostname: 'https://www.SwaraNritya.com',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
      '/casestudy/swaranritya-website-–-foundations-and-framework',
      '/casestudy/swaranritya-bots-in-application-monitoring',
      '/casestudy/local-dns-setup-in-mac-os',
      '/casestudy/swaranritya-bots-in-agritech-indistry'
    ]
  },
  googleAnalytics: {
    id: 'UA-207352335-2'
    //propertyid : 286077743
  },
  toast: {
    position: 'bottom-right',
    duration: 5000,
    fullWidth: false,
    iconPack: 'material',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          theme: 'bubble', duration: '7000'
        }
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
        'postcss-pxtorem': {
          propList: ['*', '!border*']
        }
      }
    }
  },
  "compilerOptions": {
    "types": [
      "@nuxt/types"
    ]
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || '',
    appLogo: process.env.APP_LOGO || 'logo.svg',
    bizAddress: process.env.BIZ_ADDRESS || 'NA',
    apiURL: 'https://dev.xyz.com/about' || 'https://dev.xyz.com/about',//This is used for netlify
    restEndPoint: process.env.REST_END_POINT || 'https://api.xyz.com',
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  }
}
