module.exports = {
  head: {
    title: 'Masaki Tomotsuka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  css: [
    'assets/main.css'
  ],
  generate: {
    dir: 'docs'
  },
  build: {
    publicPath: '_nuxt/'
  }
}
