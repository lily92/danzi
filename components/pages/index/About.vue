<template>
  <div class="bgf7 about-bg">
    <div class="container flex flex-between phone-container">
      <div class="w40">
        <div class="index-h3">
          <span class="colorb"><b>树</b></span>
          <span class="color0">百年伟业</span>
        </div>
        <div class="about-desc color6" v-html="aboutdesc" />
        <div>
          <nuxt-link class="more trans" to="/about/introduce">
            了解更多
          </nuxt-link>
        </div>
      </div>
      <div class="w55 positionr">
        <swiper :options="options" class="about-swiper">
          <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
            <a v-for="(item,i) in aboutlist" :key="'about'+i" :href="item.link" class="swiper-slide">
              <div class="positionr">
                <img src="~/assets/images/index/index-about-imgbg.jpg" alt srcset class="w100">
                <div class="positionb scale">
                  <img :src="item.videoPoster" alt srcset class="w100">
                </div>
                <div v-if="item.isvideo" class="positionb flex-item master" @click="showVideoFun(item)">
                  <img src="~/assets/images/index/icon-player.png" alt srcset class="icon-player trans">
                </div>
                <div class="text flex flex-between">
                  <div class="text-left">
                    <p>{{ item.title }}</p>
                    <p>{{ item.titleEng }}</p>
                  </div>
                  <div>
                    <img src="~/assets/images/index/icon-back.png" alt srcset>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </swiper>
        <div class="w32 hidden-xs" />
        <div class="swiper-pagination index-about-pagination" />
        <div class="number color6 hidden-xs">
          0{{ number +1 }}
        </div>
      </div>
    </div>
    <Videomster v-if="showVideo" :video="video" @close="closevideo" />
  </div>
</template>
<style>
.about-swiper .swiper-slide {
  text-align: center;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
.about-swiper .swiper-slide-active {
  transform: scale(1);
}
.index-about-pagination .swiper-pagination-bullet {
  background: #cdcdcd;
  margin: 3px 5px;
}
.index-about-pagination .swiper-pagination-bullet-active {
  width: 8px !important;
  background: #00a2e9;
}
.w32 {
  position: absolute;
  width: 26%;
  left: 0;
  top: 0;
  height: 100%;
  background: #f7f7f7;
  z-index: 2;
}
.index-about-pagination {
  width: 100%;
  padding: 10px 0;
}
@media screen and (min-width: 768px) {
  .index-about-pagination {
    width: 10px !important;
    left: 22% !important;
    bottom: 0;
    padding: 0;
  }
  .w55 .number {
    position: absolute;
    bottom: 100px;
    left: 22%;
    z-index: 2;
    padding-bottom: 30px;
  }
  .w55 .number::after {
    height: 30px;
    border-right: 1px solid #bcbcbc;
    position: absolute;
    bottom: 0;
    z-index: 3;
    display: block;
    content: "";
    left: 6px;
  }
}
</style>
<style lang="scss" scoped>
.about-desc {
  padding: 10px 0;
}
.w40 {
  width: 40%;
}
.w55 {
  width: 60%;
  // padding-left: 5%;
}
.about-bg {
  padding: 70px 0;
}
.more {
  display: block;
  width: 160px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: #fff;
  background: #00a3e8;
}
.more:hover{ background: #00489a}
.master {
  background: rgba($color: #000000, $alpha: 0.4);
}
.text {
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: url(~@/assets/images/index/index-about-bg.png) no-repeat center;
  padding: 10px 20px;
  background-size: cover;
}
.icon-player{ max-width: 80px;}
.about-swiper{
  .swiper-slide{ cursor: pointer;}
  .swiper-slide:hover{
    .icon-player{ transform: scale(0.9)}
    .scale img{ transform: scale(1.1); transition: .3s linear all}
  }
}
@media screen and (max-width: 767px) {
  .w40 {
    margin-bottom: 20px;
  }
  .w40,
  .w55 {
    width: 100%;
  }
  .about-bg {
    padding: 30px 0;
  }
}
</style>
<script>
import Swiper from '../../base/swiper'
import Videomster from '../../base/video'
export default {
  components: {
    Swiper,
    Videomster,
  },
  props: ['aboutdesc', 'aboutlist'],
  data() {
    return {
      number: 1,
      showVideo: false,
      options: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: false,
        autoplay: true,
        pagination: {
          el: '.index-about-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
        on: {
          slideChangeTransitionEnd() {
            // console.log('改变了，activeIndex为' + this.activeIndex)
          },
        },
      },
      video: {
        poster: '',
        url: '',
      },
    }
  },
  mounted() {
    this.getOption()
  },
  methods: {
    getOption() {
      const _this = this
      const options = {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: false,
        autoplay: true,
        pagination: {
          el: '.index-about-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
        on: {
          slideChangeTransitionEnd() {
            _this.number = this.activeIndex
            // _this.options = options
          },
        },
      }
      _this.options = options
    },
    closevideo() {
      this.showVideo = false
    },
    showVideoFun(item) {
      this.video.poster = item.videoPoster
      this.video.url = item.videoUrl
      this.showVideo = true
    },
  },
}
</script>
