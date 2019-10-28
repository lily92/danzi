<template>
  <div class="swiper-container history flex">
    <!-- Swiper -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div v-for="(item,i) in list" :key="'history'+i" class="swiper-slide flex-item">
          <div class="positionr max280">
            <img src="~/assets/images/about/history-img-bg.jpg" alt srcset class="w100 visible-hidden">
            <div class="positionb ">
              <img :src="item.img" alt srcset class="w100">
            </div>
            <div class="positionb flex-item master">
              <div>
                <p class="fon24">
                  {{ item.title }}
                </p>
                <div class="lin3" v-html="item.desc">
                  <!-- {{  }} -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white" />
      <div class="swiper-button-prev swiper-button-white" />
    </div>
    <div class="swiper-container gallery-thumbs bgfix-year">
      <div class="swiper-wrapper">
        <div v-for="(item,i) in list" :key="'historyyear'+i" class="swiper-slide" :class="item.ismonth ?'month':''">
          {{ item.year }}
        </div>
      </div>
      <i class="prev iconfont icon-left-line">1</i>
      <i class="next iconfont icon-jiantou-you">2</i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$colorb: #00a2e9;
$colorf: #fff;
$color6: #666;
.history::before {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
}
.history {
  align-content: space-around;
  height: 100%;
  .bgfix-year {
    position: absolute;
    bottom: 20px;
    width: 100%;
    background: url("~@/assets/images/about/yearbg.png") repeat-x center 52px;
    height: 80px;
  }
  .gallery-thumbs {
    max-width: 1200px;
    margin: 30px auto 0;
    height: 80px;
    position: relative;
    font-size: 17px;
     font-weight: bold;
    .swiper-slide {
      position: relative;
      text-align: center;
      color: $colorf;
      cursor: pointer;
    }
    .swiper-slide.month{ width:38px !important; margin-top: 20px}
    .swiper-slide::after {
      display: block;
      content: "";
      width: 10px;
      height: 10px;
      background: $colorf;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 50px;
      transition: 0.3s linear all;
    }
    .swiper-slide.month::after {  display: block;
      content: "";
      width: 2px;
      height: 10px;
      background: $colorf;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 30px;
      transition: 0.3s linear all;}
    .swiper-slide::before {
      display: block;
      content: "";
      width: 1px;
      height: 40px;
      background: $colorb;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 35px;
      position: absolute;
      opacity: 0;
      transition: 0.3s linear all;
    }
    .swiper-slide-thumb-active {
      color: $colorb;
    }
    .swiper-slide-thumb-active::before {
      opacity: 1;
    }
     .swiper-slide-thumb-active.month::before {
      top: 15px
    }
    .swiper-slide-thumb-active::after {
      background: $colorb;
    }
  }
  .year {
    font-size: 68px;
    line-height: 1.2;
  }
  .iconfont {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    font-size: 0;
    z-index: 9;
  }
  .icon-left-line {
    background: url(~@/assets/images/about/history-btn-left.png) no-repeat
      center;
    left: 0;
    top: 34px;
  }
  .icon-jiantou-you {
    right: 0;
    top: 34px;
    left: auto;
    background: url(~@/assets/images/about/history-btn-right.png) no-repeat
      center;
  }
  .master {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 20px;
    opacity: 0;
  }
}
.max280 {
  max-width: 280px;
  margin: 0 auto;
}
@media screen and (max-width: 767px) {
  // .gallery-top .swiper-slide{margin-left: 25px;}
  .gallery-top .swiper-slide::after,.gallery-top .swiper-slide::before{ display: none;}
  .history .master{ position: static; opacity: 1 !important;}
}
</style>
<style lang="scss">
.gallery-top {
  height: auto;
}
.gallery-top .swiper-slide::after {
  display: block;
  content: "";
  width: 100px;
  border-bottom: 1px solid #fff;
  position: absolute;
  left: 295px;
  top: 49.8%;
}
.gallery-top .swiper-slide:hover .master  {
  opacity: 1;
  cursor: pointer;
}
.gallery-top .swiper-slide:last-child::after{ display: none;}

</style>

<script>
import load from '@/helper/load'

export default {
  props: ['list'],
  data() {
    return {}
  },
  created() {
    this.init()
  },
  updated() {
    if (this.instance) {
      this.instanceThumbs.update()
      this.instance.update()
    }
  },
  beforeDestroy() {
    if (this.instance) {
      // this.instanceThumbs.destroy()
      // this.instance.destroy()
    }
  },
  methods: {
    async init() {
      if (!process.client) return
      await load(['/js/swiper.min.js', '/css/swiper.min.css'], 'swiper')

      const Swiper = window.Swiper
      this.instanceThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        slidesPerView: 11,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 11,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 10,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        },
      })

      this.instance = new Swiper('.gallery-top', {
        spaceBetween: 130,
        slidesPerView: 1,
        width: 280,
        loop: false,
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: this.instanceThumbs,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
            width: 375,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        },
      })
      // mousemove
      // this.instance.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
    },
  },
}
</script>
