<template>
  <div class="container flex technology">
    <div class="w45">
      d
    </div>
    <div class="w49">
      <Banner :list="bannerlist" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.technology{
   justify-content: space-between;
   .w45{ width: 45%}
   .w49{ width: 49%;}
}
</style>
<script>
import Banner from '~/components/pages/about/Tbanner.vue'
export default {
  components: {
    Banner,
  },
  async asyncData({ $axios }) {
    const list = await $axios.$post('index/banner')
    // console.log(list)
    return {
      bannerlist: list.swiperSlides,
    }
  },
}
</script>
