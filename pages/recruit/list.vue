<template>
  <div class="bgf7 padding70">
    <div class="container">
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
                <p class="line5 desc trans">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-show="showbox" class="r-master flex-item animated flipInX">
      <div class="re-con bgf positionr clearfix">
        <img src="~/assets/images/close-0.png" alt="" srcset="" class="btn-close" @click="close">
        <div class="row">
          <div class="col-sm-3 hidden-xs">
            <div class="positionr w100">
              <img src="~/assets/images/r-img-bg.jpg" alt srcset class="w100">
              <div class="positionb">
                <img :src="current.img" alt srcset class="w100">
              </div>
            </div>
          </div>
          <div class="com-sm-9 padding15">
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
  }
  .scale {
    overflow: hidden;
  }
  li {
    cursor: pointer;
  }
  li:hover .desc {
    height: auto;
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
  width: 90%;
  max-width: 1440px;
  padding: 15px;
}
.margin-b10{ margin-bottom: 10px;}
.btn-close{ position: absolute;right: 10px; top: 10px; cursor: pointer;}
@media screen and (max-width: 767px) {
  li {
    margin-bottom: 15px;
  }
  .padding70 {
    padding: 35px 0 20px;
  }
  .padding15{ padding: 15px;}
}
</style>
<script>
export default {
  layout: 'ny',
  data() {
    return {
      current: {
        'title': '',
        'detail': '',
        'img': '',
      },
      showbox: false,
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('recruit/list')
    return {
      list: res.list,
    }
  },
  methods: {
    showDetail(item) {
      if (item.islink) {
        this.$router.push({ path: item.islink })
      } else {
        this.current.title = item.title
        this.current.detail = item.detail
        this.current.img = item.img
        this.showbox = true
      }
    },
    close() {
      this.showbox = false
      this.current = {
        'title': '',
        'detail': '',
        'img': '',
      }
    },
  },
}
</script>
