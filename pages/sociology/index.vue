<template>
  <div class>
    <!-- banner -->
    <div class="socal-banner positionr">
      <img
        src="~/assets/images/about/ny-banner.jpg"
        alt
        class="hidden-xs margin-auto visible-hidden w100"
      >
      <!-- /_nuxt/assets/images/about/ny-banner.jpg -->
      <img
        src="~/assets/images/ny-banner-phone.jpg"
        alt
        class="visible-xs margin-auto visible-hidden w100"
      >
      <div class="positionb flex-item">
        <img :src="banner.bannerPC" alt class="hidden-xs margin-auto w100">
        <img :src="banner.bannerPhone" alt class="visible-xs margin-auto w100">
      </div>
      <div class="positionb">
        <div class="container flex flex-center pc-pad">
          <div class="text-center">
            <p class="animated delay5 fadeInUp">
              <img src="~/assets/images/jiji-1.png" alt srcset>
            </p>
            <div class="animated delay15 fadeInUp padding15">
              <img src="~/assets/images/line3.png" alt srcset>
            </div>
            <p class="guangwang animated delay2 fadeInUp">
              <a :href="banner.link" class="enter-link">进入官网</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end banner -->
    <div class="bgf7 padding25" style="padding-top:0">
      <ul class="container shehi-list">
        <li v-for="(item,i) in list" :key="'shehui'+i" class="flex">
          <p :id="'s'+i" style="visible:hidden" class="w100" :name="'s'+i" />
          <h3 class="w100 h3">
            <p class="fon34 main-title color3">
              {{ item.title }}
            </p>
            <p class="fon16 color6 text-center">
              {{ item.engtitle }}
            </p>
          </h3>
          <div class="w50 positionr">
            <img src="~/assets/images/shehui-1.jpg" alt srcset class="w100 visible-hidden">
            <div class="positionb flex-item">
              <img :src="item.img" alt srcset class="w100">
            </div>
          </div>
          <div class="w50 flex-item bgbule">
            <div>
              <!-- <div class="fon16 desc" v-html="item.desc" /> -->
              <div v-html="item.detail" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.flex-center{ align-content: center; justify-content: center; align-items: center}
.pc-pad{margin-top:10%;}
.bgbule{ background: #004a9c; color:  #fff !important; padding-left: 20px; padding-right: 20px;}
.fon34{ font-size: 34px}
.h3{ padding: 35px 0; margin-top: 0}
.padding15{ padding: 15px 0;}
.main-title{ position: relative; text-align: center; padding-bottom: 15px; margin-bottom: 10px;}
.main-title::after{ display: block; content: ''; width: 58px;position: absolute; height: 1px; background: #00a2e9; left: 50%; transform: translateX(-50%); bottom: 0}
.delay5 {
  animation-delay: 0.5s;
}
.delay15 {
  animation-delay: 1.5s;
}
.delay2 {
  animation-delay: 2s;
}
.flex-end-center {
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.bgf {
  background: #fff;
  padding: 10px 30px 10px 50px;
}


.shehi-list {
  li:first-child ,li:last-child{
    .bgbule{ border-radius:0 0 100px 0;}
  }
  li:nth-child(2n) {
    flex-direction: row-reverse;
    .positionb.flex-item{ border-radius:0 0 100px 0;}
  }
   li img{ transition: 1s linear all}
  li:hover img{ transform: scale(1.1)}

  .desc {
    padding: 5px 0;
  }
  .desc::after {
    display: block;
    content: "";
    width: 150px;
    border-bottom: 1px solid #b2b2b2;
    padding-bottom: 5px;
  }
}
.enter-link {
  background: #00a2e9;
  color: #fff;
  border-radius: 3px;
  padding: 5px 20px;
}
.enter-link:hover{  background: #00489a}
.guangwang {
  padding: 10px 0;
}
@media screen and (max-width: 767px) {
  .fon34{ font-size: 20px}
  .h3{ padding: 20px 0;}
  .flex-end-center {
    justify-content: center;
  }
  .bgf {
    padding: 15px;
  }
  .shehi-list {
    li:nth-child(2n) {
      flex-direction: row;
    }
    li {
      flex-wrap: wrap-reverse;
      margin-bottom: 15px;
    }
  }
}
</style>
<script>
export default {
  layout: 'single',
  components: {},
  computed: {
    menuId() {
      return this.$store.state.menuId
    },
    hashs() {
      return this.$route.hash
    },
  },
  watch: {
    $route() {
      // console.log(this.$route.hash)
    },
    hashs() {
      this.$router.push({ path: '/sociology' + this.$route.hash })
    },
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('sociology/founindex')
    const banner = await $axios.$post('sociology/banner')
    return {
      list: res.list,
      banner: banner.banner,
    }
  },
  mounted() {
    console.log(this.hashs)
    this.$router.push({ path: '/sociology' + this.hashs })
  },
}
</script>
