<template>
  <div class>
    <!-- banner -->
    <div class="socal-banner positionr">
      <img
        src="~/assets/images/ny-banner.jpg"
        alt
        class="hidden-xs margin-auto visible-hidden w100"
      >
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
        <div class="container flex flex-end-center">
          <div class="text-center">
            <p>
              <img src="~/assets/images/jiji-1.png" alt srcset>
            </p>
            <div>
              <img src="~/assets/images/line3.png" alt srcset>
            </div>
            <p class="guangwang">
              <a :href="banner.link" class="enter-link">进入官网</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end banner -->
    <div class="bgf7 padding25">
      <ul class="container shehi-list">
        <li v-for="(item,i) in list" :key="'shehui'+i" class="flex">
          <p :id="'s'+i" style="visible:hidden" class="w100" :name="'s'+i" />
          <div class="w50 flex-item bgf">
            <div>
              <p class="fon18">
                {{ item.title }}
              </p>
              <div class="fon16 desc" v-html="item.desc" />
              <div v-html="item.detail" />
            </div>
          </div>
          <div class="w50 positionr">
            <img src="~/assets/images/shehui-1.jpg" alt srcset class="w100">
            <div class="positionb flex-item">
              <img :src="item.img" alt srcset class="w100">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
  li:nth-child(2n) {
    flex-direction: row-reverse;
  }
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
.guangwang {
  padding: 10px 0;
}
@media screen and (max-width: 767px) {
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
