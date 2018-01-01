<template>
  <div class="contWrap">
    <router-link v-for="item in links" class="cont" :to="item.link" :key="item.name">
      <div class="cont__tit">
        {{ item.name }}
      </div>
      <div class="cont__txt" v-html="item.text"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links:[
        {
          name: 'PORTFOLIO',
          text: '今までに携わってきたサイト / 自主制作物など',
          link: '/portfolio'
        },
        {
          name: 'ABOUT THIS PAGE',
          text: 'このページは<b>SPA</b>です。<b>Nuxt.js</b>によるサーバーサイドレンダリングで構築されています。Nuxt.jsはVue.jsをもとに作られたSPA開発フレームワークであり、ReactでいうNext.jsにあたります。Webpack/Babelのバンドル設定不要・自動ルーティング機能・単一ファイルコンポーネント対応などシンプルかつ強力な機能を備えています。<br>このサイトのソースに<b>.htmlファイルはひとつも</b>含まれていません。該当の内容は単一ファイルコンポーネントの.vueファイルをherokuにアップし、.vueをもとにnode.js経由でnuxtがサーバーサイドレンダリングを行い、ブラウザに表示しています。各リンクをクリック時に通常のページ遷移が発生せずページ内遷移を行うのがルーティングを活用したSPAの特徴で、快適なブラウジングによりUXの向上が見込めます。<br>github pagesでご覧の場合、サーバーサイドレンダリングではなくNuxt.jsの機能で.vueをもとに.htmlを出力し、デプロイしています。静的htmlサイト構築にも柔軟に対応出来るのがNuxt.jsの強みです。',
          link: '/'
        },
        {
          name: 'ABOUT ME',
          text: '<figure><img src="me.jpg" alt=""> </figure>',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style>
</style>
