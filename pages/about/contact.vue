<template>
  <div class="contact container">
    <div class="contact-form row flex clearfix">
      <div class="col-sm-6 flex contact-line col-xs-12">
        <div class="w100">
          <h3 class="fon-impact fon24">
            <img src="~/assets/images/about/Feedback.png" alt srcset>
          </h3>
          <p class="fon24">
            在线留言
          </p>
        </div>
        <div
          class="max350"
        >
          {{ contact.desc }}
        </div>
        <div class="fon-ar fon14 text-uppercase color9 w100">
          <p>Thank you</p>
          <p>For your support</p>
        </div>
      </div>
      <div class="col-sm-6 col-xs-12">
        <!-- 提交表单 -->
        <From />
      </div>
    </div>

    <!-- 地图 -->
    <div class="map flex">
      <div class="w76 positionr">
        <img src="~/assets/images/about/map-img.jpg" alt srcset class="w100 h100">
        <div class="positionb">
          地图
        </div>
      </div>
      <div class="w24 flex-item">
        <div>
          <div v-html="contact.map" />
          <p>
            <a :href="contact.mapUrl" target="_blank" class="more">查看详细线路</a>
          </p>
        </div>
      </div>
    </div>

    <!-- 地图 -->
  </div>
</template>
<style lang="scss" scoped>
.contact-form {
  padding: 25px 0 0;
}
.fon-ar {
  font-weight: bold;
}
.max350 {
  max-width: 350px;
  padding: 15px 0;
}
.fon-impact {
  font-family: "Impact";
  font-weight: bold;
}
.contact-line {
  align-content: space-between;
  align-items: center;
}
.map {
  padding: 60px 0;
  .w76 {
    width: 76%;
  }
  .w24 {
    width: 24%; background: #33ace2; color: #fff; padding: 15px;
  }
}
.more{ display: inline-block; width: 150px; height: 45px; line-height: 45px; background: #f7f7f7; text-align:center; color: #333; margin: 30px 0 0 0 ;}

@media screen and (max-width: 767px) {
  .map {
    .w76{ height: 300px;}
    .w76,.w24 { width: 100%}
  }
}
</style>
<script>
import From from '~/components/pages/about/Contact.vue'
export default {
  components: {
    From,
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('about/contact')
    return {
      contact: res.contact,
    }
  },
}
</script>
