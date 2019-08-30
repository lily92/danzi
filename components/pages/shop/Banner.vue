<template>
  <div class="shop">
    <swiper id="banner-swiper" :options="options" class="banner-swiper">
      <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
        <div v-for="(item,i) in bannerlist" :key="'shopbanner'+i" class="swiper-slide">
          <div class="positionr">
            <img src="~/assets/images/shop-img1.jpg" alt srcset class="w100">
            <div class="positionb flex-item">
              <a :href="item.url" target="_blank"><img :src="item.banner" alt srcset class="w100"></a>
            </div>
          </div>
          <div class="bgf7 padding25">
            <ul class="clearfix qrcode-list text-center flex">
              <li v-for="(subitem,index) in item.qrcode" :key="'qrcodeList'+index">
                <div>
                  <p class="qrcode-p">
                    {{ subitem.text }}
                  </p>
                  <div class="positionr">
                    <img src="~/assets/images/shop-qrcode.jpg" alt srcset class="w100">
                    <div class="positionb flex-item">
                      <img :src="subitem.img" alt srcset class="w100">
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="swiper-pagination" />
    </swiper>
  </div>
</template>
<style lang="scss" >
.qrcode-list{
  .qrcode-p{ padding: 5px 0;}
  li{ width: 20%; padding: 0 10px;}
}

</style>
<script>
import Swiper from '~/components/base/swiper.vue'
export default {
  components: {
    Swiper,
  },
  props: ['bannerlist'],
  data() {
    return {
      options: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // renderBullet: function(index, className) {
          //   let text = ''
          //   switch (index) {
          //     case 0:
          //       text = '首页'
          //       break
          //     case 1:
          //       text = '关于安然'
          //       break
          //     case 2:
          //       text = '董事长寄语'
          //       break
          //     case 3:
          //       text = '咨询报道'
          //       break
          //     case 4:
          //       text = '产品展馆'
          //       break
          //     case 5:
          //       text = '联系我们'
          //       break
          //   }
          //   return (
          //     '<span class="' +
          //     className +
          //     '"><label>' +
          //     text +
          //     '</label></span>'
          //   )
          // },
        },
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>

