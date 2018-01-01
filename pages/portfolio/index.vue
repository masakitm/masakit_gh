<template>
  <article class="wrapper">
    <Boke />
    <SideNav />
    <Mv />
    <main>
      <div id="app">
        <div class="contWrap">
          <h2 class="subtitle">
            ORIGINAL WORKS
            <p class="tips">markup + js programming + design</p>
          </h2>
          <ul class="list">
            <li class="cont" v-for="(app,index) in appList">
              <a class="listLink" :href="app.url" target="_blank">
                <img class="siteThumbs" :src="app.thumb" :alt="app.url">
                <p class="listLink__siteName">
                  <template v-if="app.title">{{ app.title }}</template>
                  <template v-else>LINK</template>
                </p>
              </a>
              <a class="listSrc" :href="app.src" target="_blank">view on github</a>
            </li>
          </ul>
        </div>

        <div class="contWrap">
          <h2 class="subtitle">
            CLIENT WORKS
            <p class="tips">markup + js + support design</p>
          </h2>

          <ul class="list">
            <li class="cont" v-for="(site,index) in siteList">
              <a class="listLink" :href="site.url" target="_blank">
                <!-- <img class="siteThumbs" :src="getThumbs(site.url)" :alt="site.url"> -->
                <img class="siteThumbs" :src="site.thumb" :alt="site.url">
                <p class="listLink__siteName">
                  <template v-if="site.title">{{ site.title }}</template>
                  <template v-else>LINK</template>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>


  </article>
</template>


<script>
import Mv from '../../components/nuxt/Mv'
import Boke from '../../components/nuxt/Boke'
import SideNav from '../../components/nuxt/SideNav'
const siteListJson = require('../../assets/sitedata.json')
const appListJson = require('../../assets/appdata.json')

const apiUrl00 = 'https://s.wordpress.com/mshots/v1/'

export default {
  data () {
    return {
      siteList: siteListJson.siteListData,
      appList: appListJson.appListData,
      thumbSize00: 480
    }
  },
  methods: {
    getThumbs: function (siteUrl, index) {
      var thumbSrc = apiUrl00 + siteUrl + '?w=' + this.thumbSize00 + '.jpg'
      return thumbSrc
    }
  },
  components: {
    Mv,
    Boke,
    SideNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contWrap{
  max-width: 544px;
  text-align: center;
}

.contWrap + .contWrap{
  margin-top: 5rem;
}

.subtitle{
  font-size: 2rem;
  color: #fff;
  padding: 0rem 0 2rem;
}

.siteThumbs{
  filter: brightness(100%);
}
</style>
