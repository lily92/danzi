<template>
  <div>
    <swiper :options="options" class="banner-swiper">
      <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
        <!-- 1920-847 -->
        <a
          v-for="(item,index) in list"
          :key="'banner'+item.id+index"
          class="swiper-slide"
          :href="item.linkUrl"
        >
          <div class="pc-banner positionr hidden-xs">
            <img :src="item.src" alt srcset class="w100">
            <div class="positionb flex flex-align-center">
              <div class="banner-txt flex flex-start">
                <div class="max450" data-swiper-parallax="-1000">
                  <p class="b-p1">让人类多一分美丽</p>
                  <p class="b-p1-eng">Bring More Beauty to Humanity</p>
                  <p class="b-p2">
                    化妆品行业是一个“美丽的行业”
                    让人类多一分美丽是我们毕生努力的使命
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="phone-banner positionr visible-xs">
            <img :src="item.srcPhone" alt srcset class="w100">
            <div class="positionb flex flex-align-center">
              <div class="banner-txt flex flex-start">
                <div class="max450" data-swiper-parallax="-1000">
                  <p class="b-p1">{{ item.title }}</p>
                  <p class="b-p1-eng">{{ item.titleEng }}</p>
                  <p class="b-p2">
                    {{ item.titleDesc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="swiper-pagination" />
      <!-- <div class="swiper-button-prev" />
      <div class="swiper-button-next" />-->
    </swiper>
  </div>
</template>

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
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // observer: true,
        // observeParents: true,

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
