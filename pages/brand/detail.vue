<template>
  <div class="padding-t100">
    <!--star  banner -->
    <div class="brand flex">
      <div class="w50 positionr">
        <img src="~/assets/images/pinpai-banner-bg.jpg" alt srcset class="w100">
        <div
          class="positionb flex-item"
          :style="{'background': `url(${brand.img}) no-repeat center`,'background-size':'cover'}"
        />
      </div>
      <div class="w50 bg0 flex flex-align-center" :style="{'background': brand.bgcolor}">
        <div>
          <p>
            <img :src="brand.logo" alt srcset>
          </p>
          <p class="title fon24">
            {{ brand.title }}
          </p>
          <div>{{ brand.desc }}</div>
          <div class="brand-link">
            <a
              v-for="(item,i) in brand.linkArray"
              :id="'brand'+i"
              :key="'link'+i"
              :href="item.link"
              class="trans linka"
              :class="link"
              target="_blank"
              @mouseleave="classActive('none','brand'+i)"
              @mouseover="classActive(brand.bgcolor,'brand'+i)"
            >{{ item.text }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- end banner -->

    <!--star  video -->
    <div class="video ">
      <div class="padding25">
        <div class="positionr">
          <img src="~/assets/images/pinpai-video.jpg" alt srcset class="w100">
          <div class="positionb flex-item scale">
            <img :src="video.posterImg" alt srcset class="w100 trans" :data-url="video.url">
          </div>
          <div class="positionb flex-item" @click="showvideo">
            <img src="~/assets/images/index/icon-player.png" alt srcset class="icon-player trans">
          </div>
        </div>
      </div>
    </div>
    <!--end video -->

    <!-- list -->
    <List :list="list" />
    <!--end  list -->
    <Videomster v-if="showVideo" :video="videod" @close="closevideo" />
  </div>
</template>
<style lang="scss" scoped>
.bg0 {
  background: #00a2e9;
  color: #fff;
  padding: 10px 60px;
  a {
    display: inline-block;
    border: 2px solid #fff;
    color: #fff;
    padding: 5px 10px;
  }

  .brand-link {
    margin-top: 20px;
    a {
      margin-right: 10px;
    }
  }
  a:hover,
  a.active {
    background: #fff;
  }
}
.title {
  padding: 10px 0;
}
.brand {
  .w50 {
    width: 50%;
  }
}
.scale {
  overflow: hidden;
}
.video{ cursor: pointer;}
.video:hover .scale img {
  transform: scale(1.1);
}
.video:hover .icon-player {
  transform: scale(0.9);
}
@media screen and (max-width: 767px) {
  .bg0 {
    padding: 10px 20px;
  }
  .brand {
    .w50 {
      width: 100%;
    }
  }
  .icon-player {
    max-width: 60px;
  }
}
</style>
<script>
import List from '~/components/pages/brand/List.vue'
import Videomster from '~/components/base/video'
export default {
  layout: 'index',
  components: {
    List,
    Videomster,
  },
  data() {
    return {
      link: '',
      brand: {},
      video: {},
      list: [],
      showVideo: false,
      videod: {},
    }
  },
  computed: {
    brandId() {
      return this.$route.query.brandId
    },
  },
  watch: {
    brandId() {
      this.getDetail(this.brandId)
    },
  },
  mounted() {
    this.getDetail(this.brandId)
  },
  methods: {
    getDetail(brandId) {
      this.$axios.$post('brand/detail', { id: Number(brandId) }).then((res) => {
        this.brand = res.brand
        this.list = res.list
        this.video = res.video
        this.videod = {
          poster: res.video.posterImg,
          url: res.video.url,
        }
      })
    },
    classActive(color, id) {
      const box = document.getElementById(id)
      if (color === 'none') {
        box.style.background = color
        box.style.color = '#fff'
      } else {
        box.style.background = '#fff'
        box.style.color = color
      }
    },
    showvideo() {
      this.showVideo = true
    },
    closevideo() {
      this.showVideo = false
    },
  },
}
</script>
