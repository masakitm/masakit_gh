<template>
  <nav class="fixedNav">
    <div class="fixedNav__single">
      <router-link class="navLink" to="/">
        <span>T</span>
        <span>O</span>
        <span>P</span>
      </router-link>
    </div>
    <div class="fixedNav__single">
      <router-link class="navLink" to="/portfolio">
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </router-link>
    </div>
    <div class="fixedNav__single">
      <router-link class="navLink" to="/about">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span>M</span>
        <span>E</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
.fixedNav{
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  height: 100vh;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #fff;
}

.fixedNav__single{
  flex: 1;
  text-align: center;
  border-top: 1px solid;
}

.fixedNav__single:first-child{
  border-top: none;
}

.navLink{
  display: block;
  padding: 0.5rem;
}

span{
  -webkit-text-combine: horizontal;
    -ms-text-combine-horizontal: all;
    text-combine-upright: all;
}

@media only screen and (max-width: 767px){
  .navLink{
    padding: 0;
  }
}
</style>
