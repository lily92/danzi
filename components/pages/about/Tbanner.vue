<template>
  <div>
    <swiper :options="options" class="banner-swiper">
      <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
        <div
          v-for="(item,index) in list"
          :key="'tbanner'+item.id+index"
          class="swiper-slide positionr"
        >
          <img src="~/assets/images/about/about-ky-bg.jpg" alt="" srcset="" class="w100">
          <div class="positionb">
            <img :src="item.img" alt="" srcset="" class="w100">
          </div>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-tbanner" />
    </swiper>
  </div>
</template>
<style lang="scss" >
.swiper-pagination-tbanner{ width: 100%; bottom: 20px;
 .swiper-pagination-bullet{ margin: 0 5px;}
}
</style>
<style lang="scss" scoped>
$colorb: #00a2e9;

a {
  color: #fff;
}
.banner-txt {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  color: #fff;
  .max450{ max-width: 450px;}
  .b-p1 {
    font-size: 47px;
  }
  .b-p1-eng {
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .b-p2 {
    font-size: 24px; line-height: 1.2;
  }
}
@media screen and (max-width:767px) {
  .banner-txt {
  .b-p1 {
    font-size: 22px;
  }
  .b-p1-eng {
    font-size: 16px;
  }
  .b-p2 {
    font-size: 14px;
  }
}
}
</style>
<script>
import Swiper from '../../base/swiper'
export default {
  components: {
    Swiper,
  },
  props: ['list'],
  data() {
    return {
      options: {
        // Optional parameters
        // direction: "vertical",
        parallax: true,
        speed: 800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
      // list: [],
    }
  },
  mounted() {
    // this.fetchBannerList()
  },
  methods: {
    fetchBannerList() {
      this.$axios.$get('index/banner').then((res) => {
        if (res.code === '1001') {
          this.list = res.swiperSlides
        }
      })
    },
  },
}
</script>
