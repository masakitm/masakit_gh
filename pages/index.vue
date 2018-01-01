<template>
  <article class="wrapper">
    <Boke />
    <SideNav />

    <main>
      <Mv />
      <ContWrap />
    </main>

    <footer>

    </footer>
  </article>
</template>

<script>
import Mv from '../components/nuxt/Mv'
import Boke from '../components/nuxt/Boke'
import SideNav from '../components/nuxt/SideNav'
import ContWrap from '../components/nuxt/ContWrap'

export default {
  data () {
    return {
      asdf: 'asdf'
    }
  },
  components: {
    Mv,
    Boke,
    ContWrap,
    SideNav
  }
}
</script>

<style>

</style>
