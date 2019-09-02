<template>
  <div class="shop positionr">
    <div class="swiper-pagination-shop" />
    <swiper id="banner-swiper" :options="options" class="banner-swiper">
      <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
        <div v-for="(item,i) in bannerlist" :key="'shopbanner'+i" class="swiper-slide">
          <div class="positionr">
            <img src="~/assets/images/shop-img1.jpg" alt srcset class="w100">
            <div class="positionb flex-item">
              <a :href="item.url" target="_blank">
                <img :src="item.banner" alt srcset class="w100">
              </a>
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
    </swiper>
  </div>
</template>
<style lang="scss" scoped >
#banner-swiper {
  margin-left: 100px;
}
.qrcode-list {
  justify-content: space-between;
  .qrcode-p {
    padding: 5px 0;
  }
  li {
    width: 19.5%;
    padding: 0 10px;
  }
}
@media screen and (max-width: 767px) {
#banner-swiper{ margin-left: 0;}
.qrcode-list {
  .qrcode-p {
    padding: 5px 0;
  }
  li {
    width: 33.33%;
    padding: 0 5px;
  }
}
}

</style>
<style lang="scss">
.swiper-pagination-shop {
  width: 10px !important;
  position: absolute;
  left: 105px;
  top: 25px;
  label {
    width: 100px;
    white-space: nowrap;
    position: absolute;
    right: 17px;
    top: -8px;
    display: block;
    font-weight: normal;
    max-width: 100px;
    text-align: right;
    cursor: pointer;
  }
  .swiper-pagination-bullet {
    position: relative;
    margin: 5px 0;
    background: #333; cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    width: 8px;
    label {
      color: #00a2e9;
    }
  }
  .swiper-pagination-bullet-active::after {
    position: absolute;
    display: block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #333;
    left: -4px;
    top: -4px;
  }
}
@media screen and (max-width: 767px) {
  .swiper-pagination-shop { position: static;}
.swiper-pagination-shop label{ right: auto; text-align: left; left: 20px;}
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
        // direction: 'vertical',
        pagination: {
          el: '.swiper-pagination-shop',
          clickable: true,

          renderBullet: function(index, className) {
            return (
              '<span class="' + className + '"><label>' + 1 + '</label></span>'
            )
          },
        },
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
        // direction: 'vertical',
        pagination: {
          el: '.swiper-pagination-shop',
          clickable: true,
          renderBullet: function(index, className) {
            return (
              '<span class="' +
              className +
              '"><label>' +
              _this.bannerlist[index].shopName +
              '</label></span>'
            )
          },
        },
      }
      this.options = options
    },
  },
}
</script>

