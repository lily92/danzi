<template>
  <div class="index">
    <Banner :list="bannerlist" class="padding-t100" />
    <!-- about -->
    <div>about</div>

    <!--star 创一流品牌 -->
    <div class="padding25">
      <div class="container">
        <div class="index-h3">
          <span class="colorb">创</span>
          <span class="color0">一流品牌</span>
        </div>
        <!-- banner -->
        <BrandBanner />
      </div>
    </div>
    <!--end  创一流品牌 -->

    <!--star 造成长梦想 -->
    <div class="bgf7 padding25">
      <div class="container">
        <div class="index-h3">
          <span class="colorb">造</span>
          <span class="color0">成长梦想</span>
        </div>
        <Dram />
      </div>
    </div>
    <!--end  造成长梦想 -->

    <!--star 誓造福社会 -->
    <div class=" padding25 ">
      <div class="container">
        <div class="index-h3">
          <span class="colorb">誓</span>
          <span class="color0">造福社会</span>
        </div>
        <Shehui />
      </div>
    </div>
    <!--end  誓造福社会 -->

    <!--star 聚百家之言 -->
    <div class="padding25 bgf7">
      <div class="container">
        <div class="index-h3">
          <span class="colorb">聚</span>
          <span class="color0">百家之言</span>
        </div>
        <News :newlleft="newlLeft" :newright="newRight" />
      </div>
    </div>
    <!--end  聚百家之言 -->
  </div>
</template>
<style lang="scss" scoped>
.index-h3 {
  .colorb {
    font-size: 48px;
  }
  .color0 {
    font-size: 36px;
  }
}
</style>
<script>
import Banner from '~/components/pages/index/Banner.vue'
import BrandBanner from '~/components/pages/brand/Banner.vue'
import Dram from '~/components/pages/index/drame.vue'
import Shehui from '~/components/pages/index/shehui.vue'
import News from '~/components/pages/index/news.vue'
export default {
  layout: 'index',
  components: {
    Banner,
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
    return {
      bannerlist: list.swiperSlides,
      newlLeft: res.newLeft,
      newRight: res.newRight,
    }
  },
}
</script>
