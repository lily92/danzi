<template>
  <div>
    <Headers :navid="navIndex" navi="1" />
    <BannerNy :menuid="menuId" />
    <Location :navlist="navList" :navid="navIndex" :current="menuId" :bgf="bgf" />
    <nuxt />

    <Footer />
  </div>
</template>
<script>
import Headers from '~/components/Header.vue'
import BannerNy from '~/components/BannerNy.vue'
import Location from '~/components/Location.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Headers,
    BannerNy,
    Location,
    Footer,
  },
  data() {
    return {
      bgf: 'bgf',
    }
  },
  computed: {
    navList() {
      return this.$store.state.head.nav
    },
    navIndex() {
      return this.$store.state.head.index
    },
    menuId() {
      return this.$store.state.menuId
    },
    link() {
      return this.$store.state.link
    },
  },
  mounted() {
    // this.getLocaton()
  },
  methods: {
    getLocaton() {
      const navList = this.$store.state.head.nav
      const pathName = this.$store.state.link
      for (let i = 0; i < navList.length; i++) {
        if (navList[i].link === pathName) {
          this.$store.commit('setHeadIndex', navList[i].id)
          this.$store.commit('setLocation', navList[i].submenu)
          this.$store.commit('setMenuName', navList[i].menu)
          this.$store.commit('setMenuId', navList[i].id)
          return
        }
        for (let j = 0; j < navList[i].submenu.length; j++) {
          if (navList[i].submenu[j].link === pathName) {
            this.$store.commit('setHeadIndex', navList[i].submenu[j].parentId)
            this.$store.commit('setLocation', navList[i].submenu)
            this.$store.commit('setMenuName', navList[i].submenu[j].name)
            this.$store.commit('setMenuId', navList[i].submenu[j].id)
          }
        }
      }
    },
  },
}
</script>

<style lang="scss"  >

</style>
