<template>
  <article class="wrapper">
    <Boke />
    <Mv />
    <SideNav />

    <div class="contWrap">
      <div class="cont">
        <h1>about</h1>
        <div class="profile">
          <div class="profile__single">1987 島根県東部の山地にて誕生</div>
          <div class="profile__single">1998 父の影響でYMOを聞いて育ち、自ら作曲を始める</div>
          <div class="profile__single">2005 クラブミュージックの制作を開始</div>
          <div class="profile__single">2008 クリエイティブな仕事を目指し看板デザイナーとして就職</div>
          <div class="profile__single">2010 退職を機に上京</div>
          <div class="profile__single">2013 web業界へ転身　マークアップエンジニア/デザイナーとして活躍</div>
          <div class="profile__single">2017 webプログラミングの面白さに開眼</div>
        </div>
        現在に至り 友人たちと酒を酌み交わしながらコードを書く日々を過ごす
      </div>
    </div>
  </article>
</template>

<script>
import Mv from '../../components/nuxt/Mv'
import Boke from '../../components/nuxt/Boke'
import SideNav from '../../components/nuxt/SideNav'

export default {
  components: {
    Mv,
    Boke,
    SideNav
  }
}
</script>

<style scoped>

</style>
