<template>
  <div class="mv">
    <div class="mv__catch">
      <h1><a href="/">Masaki Tomotsuka</a></h1>
      <div class="sns">
        <a href="https://www.facebook.com/pnk.mnmt" target="_blank">f</a>
        <a href="https://twitter.com/_minapin_" target="_blank">t</a>
        <a href="https://github.com/masakitm" target="_blank">G</a>
        <a href="https://qiita.com/minapin" target="_blank">Q</a>
      </div>
    </div>

  </div>
</template>

<style scoped>
.mv{
  position: relative;
  height: 25vw;
  min-height: 300px;
  overflow:hidden;
  text-align: center;
}

img{
  position: absolute;
  top: 80%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  filter: brightness(80%);
}

.mv__catch{
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
}

.sns{
  font-size: 1rem;
  margin-top: 1.5rem;
}

.sns a{
  border-radius: 50%;
  background: #000;
  color: #fff;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2;
  margin: 0 0.5rem;
}

a[href="https://www.facebook.com/pnk.mnmt"]{
  background: #4267b2;
}

a[href="https://twitter.com/_minapin_"]{
  background: #1da1f2;
}

a[href^="https://qiita.com/"]{
  background: #59BB0C;
}
</style>
