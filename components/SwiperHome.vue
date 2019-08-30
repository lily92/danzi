<template>
  <div>
    <swiper :options="options">
      <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
        <div class="swiper-slide positionr">
          <swiper :options="optionsBanner" class="banner-swiper">
            <div class="swiper-wrapper">
              <a
                v-for="(item,index) in list"
                :key="'banner'+item.id+index"
                class="swiper-slide "
                :href="item.linkUrl"
                :style="{'background': `url(${item.src}) no-repeat center`,'background-size':'cover'}"
              />
            </div>
            <div class="swiper-pagination" />
            <div class="swiper-button-prev" />
            <div class="swiper-button-next" />
          </swiper>
        </div>
        <div class="swiper-slide">
          2
        </div>
        <div class="swiper-slide">
          3
        </div>
        <div class="swiper-slide">
          4
        </div>
      </div>
    </swiper>
  </div>
</template>
<script>
import Swiper from './base/swiper'
export default {
  components: {
    Swiper,
  },
  props: ['list', 'swiperList'],
  data() {
    return {
      optionsBanner: {
        // Optional parameters
        // direction: 'vertical',
        speed: 800,
        autoplay: {
          delay: 2000,
        },
        mousewheel: false,
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        observer: true,
        observeParents: true,

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
      options: {
        // Optional parameters
        direction: 'vertical',
        speed: 800,
        // autoplay: {
        //   delay: 2000,
        // },
        mousewheel: true,
        loop: false,
        // If we need pagination
        pagination: {
          // el: '.swiper-pagination',
          clickable: true,
        },
        observer: true,
        observeParents: true,

        // Navigation arrows
        navigation: {
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
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
<style lang="scss"  >
.swiper-container {
  height: 100%;
}
.swiper-wrapper {
  height: 100%;
  width: 100%;
}
.swiper-slide {
  width: 100% !important;
  height: 100%;
  display: block;
}
.banner-swiper {
  .swiper-button-prev {
    background: url(~assets/images/btn-left.png) no-repeat;
    background-size: contain;
    left: 100px;
  }
  .swiper-button-next {
    background: url(~assets/images/btn-right.png) no-repeat;
    background-size: contain;
    right: 100px;
  }
  .swiper-pagination {
    bottom: 20px;
    width: 100%;
  }
  .swiper-pagination-bullet {
    margin: 0 5px !important; background: #fff; opacity: .8;
  }
  .swiper-pagination-bullet-active {
    width: 16px;
    border-radius: 5px; background: #3ba5c7; opacity: 1;
  }
}
@media (max-width:767px) {
  // .banner-swiper {
  //    .swiper-button-next.right{ right: 20px;}
  //    .swiper-button-next.left{ left: 20px;}
  // }
}
</style>
