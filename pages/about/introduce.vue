<template>
  <div class="">
    <div class="container padding25">
      <div class="flex">
        <div class="w30 flex-item">
          <div>
            <p class="fon24 title">
              广东丹姿集团有限公司
            </p>
            <p class="fon13 text-uppercase">
              Guangdong Danz Group CO.,LTD
            </p>
            <p class="fon24">
              始于1998
            </p>
          </div>
        </div>
        <div class="w40 positionr">
          <img src="~/assets/images/about/introduct-img-bg1.jpg" alt srcset class="w100">
          <div class="positionb">
            <img :src="introduce.imgTop" alt srcset class="w100">
          </div>
        </div>
        <div class="w26 positionr">
          <img src="~/assets/images/about/introduct-video-bg.jpg" alt srcset class="w100">
          <div class="positionb">
            <img :src="introduce.imgVideoPoster" alt srcset class="w100">
          </div>
          <div class="positionb flex-item">
            <img src="~/assets/images/index/icon-player.png" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="introduct-con" v-html="introduce.desc" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title::before {
  display: block;
  content: "";
  width: 36px;
  border-top: 3px solid #fff;
  margin-bottom: 5px;
}
.title {
  margin-bottom: 5px;
}
.w30 {
  width: 30.7%;
  background: #0093d3;
  color: #fff;
  padding: 15px;
}
.w40 {
  width: 43.1%;
}
.w26 {
  width: 26.2%;
}
.introduct-con{ padding: 25px 0; min-height: 400px;}
@media screen and  (max-width: 767px){
   .w30{ width: 100%;}
   .w40{ width: 100%;}
   .w26{width: 100%;}
}
</style>
<script>
export default {
  // layout: 'single',
  components: {},
  async asyncData({ $axios }) {
    const introduce = await $axios.$post('about/introduction')
    return {
      introduce: introduce.result,
    }
  },
}
</script>
