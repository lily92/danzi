<template>
  <div class="loctat bgf7">
    <div class="container location" :data-link="link">
      <div class="col-sm-12 flex  loctat-nowarp ">
        <span
          v-for="(item,index) in submenu"
          :key="'locat'+index"
          class="location-li"
          :class="[lastMenu.id==item.id?'cur':'']"
        >
          <img :src="item.icon" alt="" srcset="" class="item-icon">
          <img :src="item.iconHover" alt="" srcset="" class="item-hover">
          <nuxt-link :to="item.link" :class="[lastMenu.id==item.id?'cur':'','a1']">{{ item.name }}</nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$colorb: #00a2e9;
a{ text-decoration: none;}
.location-li{
   width: 20%;
   min-width: 130px;
   border-left: 1px solid #e6e6e6;  padding-left: 20px; display: flex; align-items: center; box-sizing: border-box;
  .item-icon{ display: inline-block;}
  .item-hover{ display: none;}
  .a1{ padding-left: 5px;}
}
.col-sm-12 .location-li:first-child{ border-left: 0;}
.location-li:hover,.location-li.cur{
  .item-icon{ display: none;}
.item-hover{ display: inline-block;}
}
.colorb {
  color: $colorb;
}
.loctat {
  padding: 12px 0;
  a {
    color: #333;
  }
  a:hover,
  a.cur {
    color: $colorb;
  }
}

@media (max-width: 767px) {
.loctat-nowarp{ flex-wrap: nowrap; overflow-x: auto; overflow-y: hidden;}
}
@media (max-width: 992px) {

}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['navlist', 'navid', 'current'],
  data() {
    return {
      submenu: [],
    }
  },
  computed: {
    menuName() {
      return this.$store.state.menuName
    },
    link() {
      this.getLocaton()
      return this.$store.state.link
    },
    ...mapGetters(['currentMenus']),
    lastMenu() {
      const menus = this.currentMenus.filter((i) => i)
      return menus[menus.length - 1] || {}
    },
    fristMenu() {
      const menus = this.currentMenus.filter((i) => i)
      return menus[0] || {}
    },
  },
  watch: {
    lastMenu() {},
    currentMenus() {
      this.getLocaton()
    },
  },
  asyncData() {
    return {}
  },
  mounted() {},
  methods: {
    getLocaton() {
      const navList = this.$store.state.head.nav
      for (let i = 0; i < navList.length; i++) {
        if (navList[i].id === this.fristMenu.id) {
          this.submenu = navList[i].submenu
        }
      }
    },
  },
}
</script>

