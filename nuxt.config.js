const site_title = 'James Paik | Full Stack Developer & Entrepreneur';
const site_description = 'Currently the Lead Front End Developer at Actovia. Full Stack Developer by trade.';
const site_url = 'https://jpaik.me';
const site_keywords = 'James Paik, front end developer, full stack developer, New Jersey, Web Developer, frontend developer, lead developer, senior developer, software developer';

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: site_title,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: site_description
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffc40d'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        name: 'keywords',
        content: site_keywords
      },
      /**
       * TWITTER SEO
       */
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: site_url
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: site_title
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: site_title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: site_description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/logo.png'
      },
      /**
       * Open Graph SEO
       */
      {
        hid: 'og:title',
        name: 'og:title',
        content: site_title
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: site_url
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/logo.png'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: site_title
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: site_description
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_US'
      },
      /**
       * For Search Engine Crawling
       */
      {
        hid: 'robots',
        name: 'robots',
        content: 'index,follow'
      },
      {
        hid: 'googlebot',
        name: 'googlebot',
        content: 'index,follow'
      },
    ],
    link: [{
        rel: 'canonical',
        href: site_url
      }, {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand:400,500|Raleway:400,500&display=swap'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: "32x32",
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: "16x16",
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
    ],
    script: [{
      src: 'https://kit.fontawesome.com/c90f0a0f3d.js'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#2c7873',
    height: '4px'
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-53386344-1'
    }],
  ],
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'semi': [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', {
      'semi': false
    }]
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    optimizatin: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    filenames: {
      app: ({
        isDev
      }) => isDev ? '[name].js' : '[chunkhash].js',
      chunk: ({
        isDev
      }) => isDev ? '[name].js' : '[chunkhash].js'
    },


    /*
     ** Run ESLint on Save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  sitemap: {
    hostname: site_url,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: [
      '/'
    ]
  }
}
