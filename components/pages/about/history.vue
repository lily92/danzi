<template>
  <div class="swiper-container history ">
    <!-- Swiper -->
    <br>
    <br>
    <div class="swiper-container gallery-top ">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="~/assets/images/about/history-img-bg.jpg" alt="" srcset="">
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
    </div>
    <div class="swiper-container gallery-thumbs bgfix-year">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          2003
        </div>
        <div class="swiper-slide">
          2004
        </div>
        <div class="swiper-slide">
          2005
        </div>
        <div class="swiper-slide">
          2006
        </div>
        <div class="swiper-slide">
          2007
        </div>
        <div class="swiper-slide">
          2008
        </div>
        <div class="swiper-slide">
          2009
        </div>
        <div class="swiper-slide">
          2010
        </div>
        <div class="swiper-slide">
          2011
        </div>
        <div class="swiper-slide">
          2012
        </div>
        <div class="swiper-slide">
          2013
        </div>
        <div class="swiper-slide">
          2014
        </div>
        <div class="swiper-slide">
          2015
        </div>
        <div class="swiper-slide">
          2016
        </div>
        <div class="swiper-slide">
          2017
        </div>
        <div class="swiper-slide">
          2018
        </div>
        <div class="swiper-slide">
          2019
        </div>
      </div>
      <i class="prev iconfont icon-left-line">1</i>
      <i class="next iconfont icon-jiantou-you">2</i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$colorb:#00a2e9;
$colorf:#fff;
$color6:#666;
.history{
  .bgfix-year{position: absolute; bottom: 20px; width: 100%; background: url('~@/assets/images/about/yearbg.png') repeat-x center 52px; height: 80px;}
  .gallery-thumbs{ max-width: 1200px; margin: 100px auto 0; height: 80px; position: relative;
    .swiper-slide{ position: relative; text-align: center; color: $colorf; cursor: pointer;}
    .swiper-slide::after{ display: block; content:''; width: 10px; height: 10px; background: $colorf; position: absolute; left: 50%; transform: translateX(-50%); top: 50px; transition: .3s linear all}
    .swiper-slide::before{display: block; content:''; width: 1px; height: 40px; background: $colorb; position: absolute; left: 50%; transform: translateX(-50%); top: 35px; position: absolute; opacity: 0; transition: .3s linear all;}
    .swiper-slide-thumb-active{ color: $colorb;}
    .swiper-slide-thumb-active::before{ opacity: 1;}
    .swiper-slide-thumb-active::after{ background: $colorb;}
  }
  .year{ font-size: 68px; line-height: 1.2}
  .iconfont{  display: block; width: 40px; height: 40px; position: absolute; font-size: 0; z-index: 9;}
  .icon-left-line{ background: url(~@/assets/images/about/history-btn-left.png) no-repeat center ; left: 0; top: 34px;}
  .icon-jiantou-you{ right: 0; top: 34px; left: auto;background: url(~@/assets/images/about/history-btn-right.png) no-repeat center ;}

}
</style>

<script>
import load from '@/helper/load'

export default {
  props: ['productd'],
  data() {
    return {

    }
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
      await load([
        '/js/swiper.min.js',
        '/css/swiper.min.css',
      ], 'swiper')

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
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: this.instanceThumbs,
        },
      })
    },
  },
}
</script>
