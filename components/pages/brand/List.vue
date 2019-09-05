<template>
  <div class="">
    <ul class="list clearfix row hidden-xs">
      <li v-for="(item,i) in list" :key="'brand'+i" class="col-sm-3 col-xs-6">
        <div class="bg-bule">
          <div class="list-img positionr">
            <img src="~/assets/images/pinpai-imgbg-1.jpg" alt srcset class="w100">
            <div class="positionb flex-item scale">
              <img :src="item.img" alt srcset class="w100 trans">
            </div>
          </div>
          <div class="text-center margin-top">
            <p class="line2 max180 nohover">
              {{ item.desc }}
            </p>
            <p class="hover">
              <a target="_blank" :href="item.link" class="max180">查看详情</a>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <Swiper :options="options" class="visible-xs">
      <ul class="swiper-wrapper list" style="transform: translate3d(0,0,0)">
        <li v-for="(item,i) in list" :key="'brand'+i" class="swiper-slide">
          <div class="bg-bule">
            <div class="list-img positionr">
              <img src="~/assets/images/pinpai-imgbg-1.jpg" alt srcset class="w100">
              <div class="positionb flex-item scale">
                <img :src="item.img" alt srcset class="w100 trans">
              </div>
            </div>
            <div class="text-center margin-top">
              <p class="line2 max180 nohover">
                {{ item.desc }}
              </p>
              <p class="hover">
                <a target="_blank" :href="item.link" class="max180">查看详情</a>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div class="swiper-pagination-brand" />
    </Swiper>
  </div>
</template>
<style lang="scss" scoped>
.list {
  li {
    margin-bottom: 30px; cursor: pointer;
  }
  li .scale {
    overflow: hidden;
  }
  li:hover .scale img {
    transform: scale(1.1);
  }
  .margin-top {
    margin-top: 20px;
  }
  .line2 {
    height: 42px;
    overflow: hidden;
  }
  .bg-bule {
    background: #e8f6ff;
    padding: 20px;
  }
  .max180 {
    width: 85%;
    max-width: 180px;
    margin: 0 auto;
  }
  .nohover{ transition: .3s linear all}
  .hover {
    transition: .3s linear all;
    a {
      background: #00a2e9;
      color: #fff;
      height: 0;
      transition: .3s linear all;
      display: block; text-align: center; line-height: 0; font-size: 0; cursor: pointer;
    }
  }
  li:hover .hover a {
    opacity: 1;
    height: 42px;
    line-height: 42px;
    font-size: 14px;


  }
  li:hover .nohover {
    height:0;
    opacity: 0;
  }
}

@media screen and (max-width: 767px) {
  .list {
    .line2 {
      height: 50px;
    }
    .margin-top {
      margin-top: 10px;
    }
    .bg-bule {
      padding: 10px;
    }
  }
}
</style>
<style lang="scss">
.swiper-pagination-brand{
  width: 100%; bottom:16px !important; background: #e8f6ff; text-align: center; padding: 5px 0px; position: absolute;  z-index: 2;;
  .swiper-pagination-bullet{ margin: 0 5px;}
}
</style>
<script>
import Swiper from '../../base/swiper'
export default {
  components: {
    Swiper,
  },
  props: ['list'],
  data() {
    return {
      options: {
        pagination: {
          el: '.swiper-pagination-brand',
        },
      },
    }
  },
}
</script>
