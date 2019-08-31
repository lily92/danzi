<template>
  <div class="container flex technology padding25 margin25">
    <div class="w45 flex-align-between flex">
      <h3 class="fon24 w100">
        科研创新
      </h3>
      <div class="positionr w100">
        <img src="~/assets/images/about/ky-srcoll.jpg" alt srcset class="visible-hidden w100">
        <!--star  滚动条内容 -->
        <div class="positionb padding5">
          <swiper :options="options" class="h100">
            <div class="swiper-wrapper">
              <div class="swiper-slide padding-r20" style="height:auto" v-html="selectOn.detail" />
            </div>
            <div class="swiper-scrollbar" />
          </swiper>
        </div>
        <!--end  滚动条内容 -->
      </div>
      <!--star 选择内容 -->
      <ul class="select-box flex row w100">
        <li v-for="(item,i) in list" :key="'select-box'+i" class="col-sm-4 col-xs-6" @click="selectOnFun(i)">
          <div class="positionr">
            <img src="~/assets/images/about/chuangxin-img1.jpg" alt srcset class="w100">
            <div class="positionb trans scale">
              <img :src="item.img" alt srcset class="w100">
            </div>
          </div>
          <p class="fon16 trans">
            {{ item.title }}
          </p>
        </li>
      </ul>
      <!--end  选择内容 -->
    </div>
    <div class="w49">
      <Banner :list="selectOn.bannerList" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.padding5{ padding: 5px 0;}
.padding-r20{ padding-right: 20px;}
.technology {
  justify-content: space-between;
  .w45 {
    width: 45%;
  }
  .w49 {
    width: 49%;
  }
}
.select-box {
  justify-content: space-between;
  li {
    margin-top: 15px;
    text-align: center; cursor: pointer;
  }
  .fon16 {
    padding: 5px 0;
    background: #f2f2f2;
  }
  li:hover .fon16 {
    background: #00a2e9;
    color: #fff;
  }
  li:hover .scale img {
    transform: scale(1.1);
  }
}
@media screen and( max-width: 767px) {
  .technology {
  .w45 {
    width: 100%;
  }
  .w49 {
    width: 100%;margin-top: 15px;
  }
  .select-box.row{ margin: 0; justify-content: center;}
}
}
</style>
<script>
import Swiper from '~/components/base/swiper'
import Banner from '~/components/pages/about/Tbanner.vue'
export default {
  components: {
    Banner,
    Swiper,
  },
  data() {
    return {
      options: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      },
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('about/technology')
    return {
      list: res.list,
      selectOn: {
        title: res.list[0].title,
        detail: res.list[0].detail,
        img: res.list[0].img,
        bannerList: res.list[0].bannerList,
      },
    }
  },
  methods: {
    selectOnFun(i) {
      window.scroll(0, 300)
      this.selectOn = {
        title: this.list[i].title,
        detail: this.list[i].detail,
        img: this.list[i].img,
        bannerList: this.list[i].bannerList,
      }
    },
  },
}
</script>
