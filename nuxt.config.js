
export default {
  mode: 'universal',
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '安然',
    title: '丹姿',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=Edge,chrome=1' },
      { name: 'keywords', content: '丹姿' },
      { hid: 'description', name: 'description', content: '丹姿' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fullpage.js/dist/fullpage.min.css' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper/dist/css/swiper.min.css' },
      { rel: 'stylesheet', href: '/css/animate.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' }, // static文件夹下
      { rel: 'stylesheet', href: '/css/deafult.min.css' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js' },
      { src: 'http://api.map.baidu.com/api?v=2.0&ak=t54efmF5G4KExHXVR7O7gLIQ8kHxcgz1' },
      //  { src: 'https://cdn.bootcss.com/baguettebox.js/1.11.0/baguetteBox.min.js' },

    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00a2e9' },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-vuex-router-sync',
    ['@modules/eslint', {
      fix: true,
    }],
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    // '@nuxt/http',
  ],
  axios: {
    // retry: { retries: 3 },
    proxy: true,
    proxyHeaders: true,
    prefix: '/api/',
  },
  // http: {
  //   proxy: true,
  //   prefix: '/mock/5d0c7f6c2cf1ae23f0b9d760/api/',
  // },
  // http://47.75.185.34:39004/mock/5d65de1a8f19846bade54a63
  // http://admindz.hk.tanghan.cn
  proxy: {
    '/api': {
      target: 'http://admin.danzi.cn',
    },
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    transpile: ['vue-echarts', 'resize-detector'],
  },
  server: {
    host: '0.0.0.0',
  },
}
