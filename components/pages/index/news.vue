<template>
  <div class="flex news-flex">
    <div class="w35">
      <swiper :options="options" class="banner-swiper">
        <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
          <div v-for="(item,i) in newlleft" :key="'newleft'+i" class="swiper-slide curso" @click="goDetail(item.newId,item.typeId)">
            <div class="positionr">
              <img src="~/assets/images/index-new-bg.jpg" alt srcset class="w100">
              <div class="positionb flex-item">
                <img :src="item.newImg" alt srcset class="w100">
              </div>
            </div>
            <div class="new-li-bg">
              <p class="fon12">
                <span>{{ item.typeName }}</span>
                <span>{{ item.newDate }}</span>
              </p>
              <p class="line2 maxh42">
                {{ item.newTitle }}
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination news-page" />
      </swiper>
    </div>
    <ul class="news-right flex w60">
      <li v-for="(item,i) in newright" :key="'newright'+i" class="curso" @click="goDetail(item.newId,item.typeId)">
        <div class="flex flex-nowarp">
          <div class="new-left color6 flex-item">
            <div>
              <p class="new-type fon20">
                {{ item.typeName }}
              </p>
              <p>{{ item.newDate }}</p>
            </div>
          </div>
          <div class="new-right">
            <div class="w100">
              <p class="nowarp color3">
                {{ item.newTitle }}
              </p>
              <p class="color6 line2">
                {{ item.newDesc }}
              </p>
              <div class="taglist">
                <a v-for="(subitem,ii) in item.tag" :key="'tagnew'+ii" href>{{ subitem.text }}</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.curso{ cursor: pointer;}
.flex-nowarp {
  flex-wrap: nowrap;
}
.news-flex {
  justify-content: space-between;
  align-items:initial;
}
.news-page {
  bottom: 80px !important;
}
.taglist {
  a {
    background: #00a2e9;
    padding: 3px 5px;
    color: #fff;
    margin-right: 3px;
    margin-bottom: 3px;
  }
}
.w35 {
  width: 35%;
}
.w60 {
  width: 60.8%;
}
.new-li-bg {
  background: #00a2e9;
  padding: 10px;
  color: #fff;
}
.maxh42 {
  max-height: 42px;
  overflow: hidden;
}
.new-left {
  width: 120px;
  flex-shrink: 0;
  padding-right: 20px;
  border-right: 1px solid #bfbfbf;
  .new-type::after {
    border-bottom: 1px solid #bfbfbf;
    width: 50px;
    display: block;
    content: "";
    padding: 10px 0 0 0;
    margin-bottom: 10px;
  }
}
.news-right {
  align-content: space-between;
  li {
    background: #fff;
    margin-bottom: 1px;
    padding: 20px;
    width: 100%;
  }
}
.new-right {
  width: 100%;
  overflow: hidden;
  flex-shrink: 1;
  padding-left: 20px;

  .line2 {
    margin: 10px 0;
  }
}
</style>

<script>
import Swiper from '../../base/swiper'
export default {
  components: {
    Swiper,
  },
  props: ['newlleft', 'newright'],
  data() {
    return {
      options: {
        // Optional parameters
        // direction: "vertical",
        parallax: true,
        speed: 800,
        autoplay: {
          delay: 3000,
        },
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // observer: true,
        // observeParents: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
    }
  },
  methods: {
    goDetail(newId, typeId) {
      this.$router.push({ path: '/news/listdetail?newid=' + newId + '&cid=' + typeId })
    },
  },
}
</script>
