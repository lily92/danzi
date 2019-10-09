<template>
  <div class="bgf7 ">
    <div class="container">
      <!--star  banner  -->
      <div class="introduct-banner positionr margin25">
        <img src="~/assets/images/about/introduce-banner-bg.jpg" alt="" srcset="">
        <div class="positionb">
          <img :src="about.banner" alt="" srcset="">
        </div>
        <div class="positionb flex flex-align-center flex-start banner-txt">
          <div>
            <p class="fon24">
              {{ about.company }}
            </p>
            <p class="fon16">
              {{ about.time }}
            </p>
            <p class="fon16">
              <nuxt-link to="/about/introduce" class="more  trans">
                了解更多
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
      <!--end   banner  -->

      <!--star List -->
      <List :list="list" />
      <!--end  List -->
    </div>
  </div>
</template>

<script>
import List from '~/components/pages/about/introduce/List.vue'
export default {
  layout: 'single',
  components: {
    List,
  },
  async asyncData({ $axios }) {
    const list = await $axios.$post('about/introduce')
    return {
      about: list.about,
      list: list.list,

    }
  },

}
</script>
<style lang="scss" scoped>
.margin25{ margin: 25px 0 0 0;}

.banner-txt{
  p{line-height: 1.8;}
   color: #fff; padding: 0 60px;
   .more{ color: #fff; background: #3191db; display: inline-block; padding: 5px 20px; }
   .more:hover{ background: #fff;  color: #3191db}
}
</style>
