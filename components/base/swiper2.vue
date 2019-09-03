<template>
  <div class="swiper-container">
    <!-- Swiper -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div v-for="item in productd.largeImgList" :key="'productd'+item" class="swiper-slide">
          <img :src="item" alt srcset />
        </div>
      </div>
      <!-- Add Arrows -->
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div v-for="item in productd.smallImgList" :key="'sproductd'+item" class="swiper-slide">
          <img :src="item" alt srcset />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gallery-top {
  margin-bottom: 5px;
  img {
    width: 100%;
  }
}
</style>

<script>
import load from "@/helper/load";

export default {
  props: ["productd"],
  data() {
    return {};
  },
  created() {
    this.init();
  },
  updated() {
    if (this.instance) {
      this.instanceThumbs.update();
      this.instance.update();
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
      if (!process.client) return;
      await load(["/js/swiper.min.js", "/css/swiper.min.css"], "swiper");

      const Swiper = window.Swiper;
      this.instanceThumbs = new Swiper(".gallery-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      });
      this.instance = new Swiper(".gallery-top", {
        spaceBetween: 10,
        autoplay: {
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        thumbs: {
          swiper: this.instanceThumbs
        }
      });
    }
  }
};
</script>
