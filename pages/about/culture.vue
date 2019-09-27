<template>
  <div class="culture positionr">
    <!-- <img src="~/assets/images/about/wenhua-bg.jpg" alt srcset class="w100"> -->
    <div class="flex-item">
      <ul class="cluture-list flex">
        <li
          v-for="(item,i) in list"
          :key="'c-list'+i"
          class="trans"
          :data-id="item.id"
          @click="linkDetail(item.id)"
        >
          <div>
            <div class="positionr">
              <img src="~/assets/images/about/cultrure-item-bg.png" alt srcset class="w100">
              <div class="positionb flex-item">
                <img :src="item.img" alt srcset class="w100">
              </div>
            </div>
          </div>
          <div class="text-center bgf positionr text padding25">
            <div class="c-icon trans">
              <img :src="item.icon" alt srcset class="w100">
            </div>
            <p class="fon20">
              {{ item.title }}
            </p>
            <textarea v-model="item.desc" class="fon16 color6 line2 height48" />
          </div>
        </li>
      </ul>
    </div>
    <div v-show="showbox" class="r-master flex-item animated flipInX">
      <div class="re-con bgf positionr clearfix">
        <img src="~/assets/images/close-0.png" alt srcset class="btn-close" @click="close">
        <div class="row">
          <div class="col-sm-3 hidden-xs">
            <div class="positionr w100">
              <img src="~/assets/images/r-img-bg.jpg" alt srcset class="w100">
              <div class="positionb">
                <img :src="current.img" alt srcset class="w100">
              </div>
            </div>
          </div>
          <div class="col-sm-9 padding15 warp">
            <p class="fon24 color0 margin-b10">
              {{ current.title }}
            </p>

            <div v-html="current.detail" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.culture {
  background: url("~@/assets/images/about/wenhua-bg.jpg") no-repeat center;
  background-size: cover;
  padding: 50px 0;
}
.cluture-list {
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 12%;
  li {
    width: 22%;
    cursor: pointer;
  }
  li:hover {
    transform: translateY(-10px);
  }
  .c-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #232323;
    border-radius: 50%;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    img {
      border-radius: 50%;
    }
  }
  li:hover .i-icon {
    background: #00a2e9;
  }
}
.height48 {
  height: 48px;
  width: 100%;
  border: 0;
  resize: none;
  text-align: center;
}
.r-master {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 100;
  left: 0;
  top: 0;
}
.re-con {
  width: 90%;
  max-width: 1440px;
  padding: 15px;
}
.margin-b10 {
  margin-bottom: 10px;
}
.btn-close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 3;
}
@media screen and (max-width: 767px) {
  .cluture-list li {
    width: 47%;
    margin-bottom: 15px;
  }
  .fon20 {
    margin-top: 15px;
  }
}
</style>
<script>
export default {
  layout: 'single',
  data() {
    return {
      showbox: false,
      current: {
        title: '',
        detail: '',
        img: '',
      },
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('culture/culturelist')
    return {
      list: res.list,
    }
  },
  methods: {
    // linkDetail(id) {
    //   this.$router.push({ path: '/about/cultureDetail?culutreId=' + id })
    // },
    linkDetail(culutreId) {
      this.$axios
          .$post('about/cultureDetail', { culutreId: Number(culutreId) })
          .then((res) => {
            if (res.code === '1001') {
              window.scroll(0, 0)
              // this.detail = res.detail
              // this.bgimg = res.bgimg
              this.current = {
              // title: "",
                detail: res.detail,
                img: res.bgimg,
              }
              this.showbox = true
            }
          })
    },
    close() {
      this.showbox = false
      this.current = {
        title: '',
        detail: '',
        img: '',
      }
    },
  },
}
</script>
