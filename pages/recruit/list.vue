<template>
  <div class="bgf7 padding70">
    <div v-show="!cid" class="container">
      <ul class="row recurt-list">
        <li v-for="(item,i) in list" :key="'recurt'+i" class="col-sm-4" @click="showDetail(item)">
          <div class="positionr">
            <img src="~/assets/images/r-img-bg.jpg" alt srcset class="w100">
            <div class="positionb flex-item scale">
              <img :src="item.img" alt srcset class="w100 trans">
            </div>
            <div class="positionb master flex-item text-center">
              <div>
                <p>
                  <img :src="item.icon" alt srcset>
                </p>
                <p class="title">
                  {{ item.title }}
                </p>
                <div class="line5 desc trans" v-html="item.desc" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-show="cid" class="container">
      <div class="re-con bgf positionr clearfix">
        <!-- <img src="~/assets/images/close-0.png" alt srcset class="btn-close" @click="close"> -->
        <div class="row flex al-cetner cccdf">
          <div v-if="cid!=70" class="col-sm-3 hidden-xs">
            <div class="positionr w100">
              <img src="~/assets/images/r-img-bg.jpg" alt srcset class="w100">
              <div class="positionb">
                <img :src="current.img" alt srcset class="w100">
              </div>
            </div>
          </div>
          <div v-if="cid==69" class="col-sm-9 padding15 warp h100">
            <p v-if="cid!=70" class="fon24 color0 margin-b10">
              {{ current.title }}
            </p>

            <div v-html="current.detail" />
          </div>


          <div v-if="cid==70" class="col-sm-9 padding15 warp h100 w100">
            <p v-if="cid!=70" class="fon24 color0 margin-b10">
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
.cccdf .w100{width:100% !important;}
.h100{ display: flex; align-items: center;}
.al-cetner{ align-items: center;}
.warp {
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
}
.padding70 {
  padding: 70px 0;
}
.recurt-list {
  .master {
    background: rgba($color: #000000, $alpha: 0.5);
    color: #fff;
    padding: 15px;
    cursor: pointer;
  }
  .desc {
    height: 0;
    transition: 0.3s linear all;
    opacity: 0;
  }
  .scale {
    overflow: hidden;
  }
  li {
    cursor: pointer;
  }
  li:hover .desc {
    height: 105px;
    opacity: 1;
  }
  li:hover .scale img {
    transform: scale(1.1);
  }
}
.line5 {
  max-height: 105px;
  overflow: hidden;
}
.title {
  font-size: 21px;
}
.title::after {
  display: block;
  content: "";
  width: 50px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  margin: 0 auto 10px;
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
  width: 100%;
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
  li {
    margin-bottom: 15px;
  }
  .padding70 {
    padding: 35px 0 20px;
  }
  .padding15 {
    padding: 15px;
  }
}
</style>
<script>
export default {
  layout: 'ny',
  data() {
    return {
      current: {
        title: '',
        detail: '',
        img: '',
      },
      showbox: false,
      // cid: 0,
    }
  },
  computed: {
    cid() {
      return this.$route.query.cid
    },
  },
  watch: {
    cid() {
      this.showBox()
    },
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('recruit/founlist')
    return {
      list: res.list,
    }
  },
  mounted() {
    this.showBox()
  },
  methods: {
    showBox() {
      const _this = this
      if (this.$route.query.cid) {
        this.showbox = true
        for (let i = 0; i < _this.list.length; i++) {
          if (_this.list[i].id === Number(this.$route.query.cid)) {
            this.current = {
              title: _this.list[i].title,
              detail: _this.list[i].detail,
              img: _this.list[i].img,
            }
          }
        }
      }
    },
    showDetail(item) {
      console.log(item)
      if (item.title === '人才招聘') {
        this.$router.push({ path: '/recruit/listdetail' })
      } else {
        this.$router.push({ path: '/recruit/list?cid=' + item.id })
        // this.current.title = item.title
        // this.current.detail = item.detail
        // this.current.img = item.img
        // this.showbox = true
      }
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
