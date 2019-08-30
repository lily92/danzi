<template>
  <div>
    <BannerNy :menuid="menuId" />
    <div class="bgf7 padding25">
      <ul class="container  shehi-list">
        <li v-for="(item,i) in list" :key="'shehui'+i" class="flex">
          <div class="w50 flex-item bgf">
            <div>
              <p class="fon18">
                {{ item.title }}
              </p>
              <p class="fon16 desc">
                {{ item.desc }}
              </p>
              <p> {{ item.detail }}</p>
            </div>
          </div>
          <div class="w50 positionr">
            <img src="~/assets/images/shehui-1.jpg" alt srcset>
            <div class="positionb flex-item">
              <img :src="item.img" alt srcset>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bgf{ background: #fff; padding: 10px 30px 10px 50px}
.shehi-list{
  li:nth-child(2n){ flex-direction: row-reverse}
  .desc{ padding: 5px 0;}
  .desc::after{ display: block;  content: ''; width: 150px; border-bottom: 1px solid #b2b2b2; padding-bottom: 5px;}
}

@media screen and (max-width: 767px) {
  .bgf{padding: 15px;}
  .shehi-list{
  li:nth-child(2n){ flex-direction: row}
  li{ flex-wrap: wrap-reverse; margin-bottom: 15px;}
}
}
</style>
<script>
import BannerNy from '~/components/BannerNy.vue'
export default {
  layout: 'single',
  components: {
    BannerNy,
  },
  computed: {
    menuId() {
      return this.$store.state.menuId
    },
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('sociology/index')
    return {
      list: res.list,
    }
  },
}
</script>
