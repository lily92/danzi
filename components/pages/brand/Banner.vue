<template>
  <div>
    <!-- pc -->
    <div class="positionr pc hidden-xs">
      <img src="~/assets/images/about/pinpai-1.jpg" alt srcset class="visible-hidden">
      <ul class="flex pinpai-list positionb">
        <li
          v-for="(item,i) in brandList"
          :key="'brand'+i"
          class="trans"
          :class="item.isShow?'active':''"
          @mouseenter="activeFun(i)"
          @click="goBrandDeatil(item.id)"
        >
          <div
            class="list-bg"
            :style="{'background': `url(${item.img}) no-repeat center`,'background-size':'cover'}"
          />
          <div class="list-txt flex">
            <img :src="item.logo" alt srcset>
            <img src="~/assets/images/about/jaintou-icon.png" alt srcset class="jiantou">
          </div>
        </li>
      </ul>
    </div>

    <div class="phone visible-xs row">
      <Swiper :options="options">
        <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
          <div v-for="(item,i) in brandList" :key="'brand1'+i" class="swiper-slide trans box-shadow" @click="goBrandDeatil(item.id)">
            <img :src="item.img" alt srcset>
            <p class="text-center bglogo">
              <img :src="item.logo" alt srcset>
            </p>
          </div>
        </div>
        <div class="swiper-pagination" />
      </Swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pinpai-list {
  height: 100%;
  flex-wrap: nowrap;
  li {
    width: 140px;
    position: relative;
    cursor: pointer;
  }
  .jiantou {
    display: none;
  }
  li .list-bg {
    background: url("~@/assets/images/about/pinpai-1.jpg") no-repeat center;
    height: 90%;
    background-size: cover;
  }
  .list-txt {
    height: 10%;
    background: #fff;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  li::after {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    display: block;
    content: "";
    left: 0;
    top: 0;
  }
  li.active {
    width: 100%;
  }
  li.active::after {
    display: none;
  }
  li.active .jiantou {
    display: block;
  }
  .w140 {
    width: 140px;
    overflow: hidden;
    img {
      max-width: auto;
    }
  }
}
.phone{
  .swiper-slide{ width: 250px;}
  .bglogo{ background: #fff; padding: 5px 0;}
}
</style>
<script>
import Swiper from '../../base/swiper'
export default {
  components: {
    Swiper,
  },
  data() {
    return {
      activeIndex: -1,
      list: [],
      options: {
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  computed: {
    brandList() {
      return this.list.map((item, index) => {
        return { ...item, isShow: this.activeIndex === index }
      })
    },
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.$axios.$post('brand/brandlist').then((res) => {
        if (res.code === '1001') {
          this.list = res.list
          this.activeFun(0)
        }
      })
    },
    activeFun(index) {
      this.activeIndex = this.activeIndex === index ? -1 : index
    },
    goBrandDeatil(id) {
      this.$router.push({ path: 'brand/detail?brandId=' + id })
    },
  },
}
</script>
