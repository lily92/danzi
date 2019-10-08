<template>
  <div class="flex news-flex">
    <div class="w35 hidden-xs">
      <swiper :options="options" class="banner-swiper">
        <div class="swiper-wrapper" style="transform: translate3d(0,0,0)">
          <nuxt-link v-for="(item,i) in newlleft" :key="'newleft'+i" class="swiper-slide curso" :to="'/news/listdetail?newid=' + item.newId + '&cid=' + item.typeId ">
            <div class="positionr">
              <img src="~/assets/images/index-new-bg.jpg" alt srcset class="w100">
              <div class="positionb flex-item">
                <img :src="item.newImg" alt srcset class="w100">
              </div>
            </div>
            <div class="new-li-bg">
              <p class="fon14">
                <span class="fon16">{{ item.typeName }}</span>
                <span>{{ item.newDate }}</span>
              </p>
              <p class="line2 maxh42">
                {{ item.newTitle }}
              </p>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-pagination news-page" />
      </swiper>
      <div class="bgf padding-new-more">
        <nuxt-link :to="'/news/list?id='+newlleft[0].typeId" class="new-more">
          了解更多
        </nuxt-link>
      </div>
    </div>
    <ul class="news-right flex w60">
      <li v-for="(item,i) in newright" :key="'newright'+i" class="curso trans" @click="goDetail(item.newId,item.typeId)">
        <div class="flex flex-nowarp">
          <div class="new-left color6 flex-item">
            <div>
              <p class="new-type fon24">
                {{ item.typeName }}
              </p>
              <p class="date">
                {{ item.newDate }}
              </p>
            </div>
          </div>
          <div class="new-right">
            <div class="w100">
              <p class="nowarp color3">
                <b> {{ item.newTitle }}</b>
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
.fon14{ font-size: 14px;}
.flex-nowarp {
  flex-wrap: nowrap;
}
.news-flex {
  justify-content: space-between;
  align-items:initial;
}
.news-page {
  bottom: 88px !important; text-align: right; padding-right: 10px;
}
.taglist {
  a {
    background: #00a2e9;
    padding: 3px;
    color: #fff;
    margin-right: 3px;
    margin-bottom: 3px;
    line-height: 32px;
  }
}
.padding-new-more{ padding: 5px 0 15px}
.new-more{ transition: .3s linear all; display: block; width: 130px; height: 35px; line-height: 35px; text-align: center; background: #00a2e9; color:#fff; margin:0 auto ;}
.new-more:hover{ background: #0498d9;}
.w35 {
  width: 35%;
}
.w60 {
  width: 60.8%;
}
.new-li-bg {
  background: #fff;
  padding: 10px;
  color: #333;
}
.maxh42 {
  max-height: 42px;
  height: 42px;
  overflow: hidden;
}
.new-left {
  transition: .3s linear all;
  width: 140px;
  flex-shrink: 0;
   position: relative;
  // padding-right: 20px;
  padding: 20px ;
  // border-right: 1px solid #bfbfbf;
  .new-type::after {
    border-bottom: 1px solid #bfbfbf;
    width: 50px;
    display: block;
    content: "";
    padding: 10px 0 0 0;
    margin-bottom: 10px;
  }
}
.new-left::after{ display: block; content: ''; width: 1px; height: 82px; background:#bfbfbf; position: absolute; right: 0; top: 20px; transition: .3s linear all; }

.news-right {
  align-content: space-between;

  li {
    background: #fff;
    margin-bottom: 1px;
    // padding: 20px;
    width: 100%;
  }
  li:hover{ box-shadow: 0 0 5px rgba(0, 0, 0, .1);}
  li:hover .new-left{ background: #00a2e9; color: #fff;}
  li:hover .new-left .new-type::after{  border-bottom: 1px solid #fff;}
}
.new-right {
  width: 100%;
  overflow: hidden;
  flex-shrink: 1;
  // padding-left: 20px;
   padding:20px;
  .line2 {
    margin: 10px 0;
  }
}
@media screen  and (max-width: 767px){
  .w60{ width: 100%}
  .new-left{ width: 88px; padding: 2px;}
  .news-right li{ padding: 10px; border-bottom: 0; margin-bottom: 15px;}
  .new-left .date{ font-size: 12px;}
  .fon14{ font-size: 13px;}
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
          disableOnInteraction: false,
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
  mounted() {
    // console.log(this.newlleft)
    // console.log(this.newright)
  },
  methods: {
    goDetail(newId, typeId) {
      this.$router.push({ path: '/news/listdetail?newid=' + newId + '&cid=' + typeId })
    },
  },
}
</script>
