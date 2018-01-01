<template>
  <div class="boke"></div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.boke{
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
}

.boke:before{
  content: '';
  background: url(~assets/mv.jpg) no-repeat;
  background-size:cover;
  -webkit-filter: brightness(80%) blur(10px);
  filter: brightness(80%) blur(10px);
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
}
</style>
