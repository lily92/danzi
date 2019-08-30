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
    padding: 15px;cursor: pointer;
  }
  .desc{  height: 0;}
  .scale{ overflow: hidden;}
  li{ cursor: pointer;}
  li:hover .desc{  height: auto;}
  li:hover .scale img{ transform: scale(1.1)}
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
@media screen and (max-width: 767px) {
  li{margin-bottom: 15px;}
  .padding70 {
  padding:35px 0 20px;
}
}
</style>
<script>
export default {
  layout: 'ny',
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
      }
    },
  },
}
</script>
