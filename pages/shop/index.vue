<template>
  <div class="bgf7 padding25">
    <div class="container">
      <!-- 直营渠道 -->
      <div class="channel bgf">
        <div class="fon24 title">
          <p class="color0">
            直营渠道
          </p>
          <p class="color6">
            Direct channel
          </p>
        </div>
        <div>
          <ul class="clearfix row shop-list text-center">
            <li v-for="(item,i) in list" :key="'shop'+i" class="col-sm-3 col-xs-6">
              <a :href="item.url" target="_blank">
                <div class="positionr">
                  <img src="~/assets/images/shop-icon.jpg" alt srcset class="w100">
                  <div class="positionb scale">
                    <img :src="item.img" alt srcset class="w100 trans">
                  </div>
                </div>
                <p class="text">
                  {{ item.text }}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Banner class="margin25 shopbanner bgf" :bannerlist="bannerlist" />
    </div>
  </div>
</template>
<style lang="scss"  scoped >
.channel {
  padding: 30px;
}
.title {
  border-bottom: 1px solid #cdcdcd;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.shop-list{
  a{ color: #333; display: block;}
  li{ margin-bottom: 15px;}
  li:hover .scale img{ transform: scale(1.1);}
  li:hover a{ color: #2ea3de}
  .text{ padding: 5px 0;}
}
.shopbanner{
  padding: 30px;
}

@media screen and (max-width: 767px) {
  .channel,.shopbanner{ padding: 15px}
}
</style>
<script>
import Banner from '~/components/pages/shop/Banner.vue'
export default {
  layout: 'ny',
  components: {
    Banner,
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('shop')
    const banner = await $axios.$post('shop/listbanner')
    return {
      list: res.list,
      bannerlist: banner.list,
    }
  },
  mounted() {},
}
</script>
