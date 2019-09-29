<template>
  <div class="index">
    <Banner :list="bannerlist" class="padding-t100" />
    <!-- about -->
    <About :aboutdesc="aboutDesc" :aboutlist="aboutList" />

    <!--star 创一流品牌 -->
    <div class="padding25">
      <div class="container max767">
        <div class="index-h3 phone-container">
          <span class="colorb"><b>创</b></span>
          <span class="color0">一流品牌</span>
        </div>
        <!-- banner -->
        <BrandBanner />
      </div>
    </div>
    <!--end  创一流品牌 -->

    <!--star 造成长梦想 -->
    <div class="bgf7 padding25">
      <div class="container phone-container">
        <div class="index-h3">
          <span class="colorb"><b>造</b></span>
          <span class="color0">成长梦想</span>
        </div>
        <Dram :dream="dream" />
      </div>
    </div>
    <!--end  造成长梦想 -->

    <!--star 誓造福社会 -->
    <div class="padding25">
      <div class="container phone-container">
        <div class="index-h3">
          <span class="colorb"><b>誓</b></span>
          <span class="color0">造福社会</span>
        </div>
        <Shehui :sociology="sociology" />
      </div>
    </div>
    <!--end  誓造福社会 -->

    <!--star 聚百家之言 -->
    <div class="padding25 bgf7">
      <div class="container phone-container">
        <div class="index-h3">
          <span class="colorb"><b>聚</b></span>
          <span class="color0">百家之言</span>
        </div>
        <News :newlleft="newlLeft" :newright="newRight" />
      </div>
    </div>
    <!--end  聚百家之言 -->
  </div>
</template>
<style lang="scss" >
.index-h3 {
  .colorb {
    font-size: 48px;
  }
  .color0 {
    font-size: 36px;
  }
  b{ margin-right: 8px;}
}
@media screen and (max-width: 767px) {
  .index-h3 {
    .colorb {
      font-size: 30px;
    }
    .color0 {
      font-size: 20px;
    }
  }
  .container.max767 {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
<script>
import Banner from '~/components/pages/index/Banner.vue'
import About from '~/components/pages/index/About.vue'
import BrandBanner from '~/components/pages/brand/BannerIndex.vue'
import Dram from '~/components/pages/index/drame.vue'
import Shehui from '~/components/pages/index/shehui.vue'
import News from '~/components/pages/index/news.vue'
export default {
  layout: 'index',
  components: {
    Banner,
    About,
    BrandBanner,
    Dram,
    Shehui,
    News,
  },
  computed: {
    navList() {
      return this.$store.state.head.nav
    },
    navIndex() {
      return this.$store.state.head.index
    },
  },
  async asyncData({ $axios }) {
    const list = await $axios.$post('index/banner')
    const res = await $axios.$post('index/newlist')
    const dream = await $axios.$post('index/dream')
    const about = await $axios.$post('index/about')
    return {
      bannerlist: list.swiperSlides,
      newlLeft: res.newLeft,
      newRight: res.newRight,
      dream: dream.dream,
      sociology: dream.sociology,
      aboutDesc: about.aboutDesc,
      aboutList: about.aboutList,
    }
  },
}
</script>
