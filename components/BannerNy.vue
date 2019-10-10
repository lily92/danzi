<template>
  <div class="banner-ny padding-t100">
    <div class="banners text-center positionr">
      <img src="~/assets/images/about/ny-banner.jpg" alt class="hidden-xs margin-auto visible-hidden">
      <img src="~/assets/images/ny-banner-phone.jpg" alt class="visible-xs margin-auto visible-hidden">
      <img :src="bannerPC" class="hidden-xs positionb">
      <img :src="bannerphone" class="visible-xs positionb">
      <div class="container flex-item banner-txt">
        <div class="margin-b10">
          <h3>
            {{ lastMenu && (lastMenu.menu || lastMenu.name ) }}
          </h3>
          <p class="text-left nybanner-eng">
            {{ menuNameEng }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$colorb:#018bb9;
.banners{ position: relative;}
.margin-b10{ margin-bottom: 15%;}
.banners img{ display: block; margin: 0 auto; background: #ccc;}
.banner-txt{ position: absolute; left: 50%; transform: translateX(-50%); height: 100%; top: 0;  padding-bottom: 20px;justify-content: start; }
h3{ font-size: 26px; color: #fff; font-weight: normal; position: relative;}
h3::after{display: block;content:''; width: 20px; height: 4px; background: #fff; position: absolute; left: 0; top: -15px;}
.positionb{ left: 0; top: 0; width: 100%; height: 100%;}
.nybanner-eng{ color: #fff; text-transform: uppercase; font-size: 14px;}
@media (max-width: 767px) {
  .banner-txt{  align-items: center;align-items: flex-end; left: 25%;}
}


</style>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['currentName', 'menuid'],
  data() {
    return {
      bannerPC: '',
      bannerphone: '',
      // menuName: '',
      isshowBanner: true,
      mname: '',
      menuNameEng: '',
    }
  },
  computed: {
    ...mapGetters([
      'currentMenus',
    ]),
    lastMenu() {
      const menus = this.currentMenus.filter((i) => i)
      if (!menus[menus.length - 1].id) {
        return menus[0]
      } else {
        return menus[menus.length - 1] || {}
      }
    },

  },
  watch: {
    currentMenus() {
      // console.log(this.currentMenus)
      this.getBanner()
    },

  },
  created() {
  },
  mounted() {
    this.getBanner()
  },
  methods: {
    getBanner() {
      const { id: lastId } = this.lastMenu
      if (!lastId || lastId <= 0) {

      } else {
        this.bannerPC = ''
        this.bannerphone = ''
        this.$axios.$post('common/nybanner', { 'menId': lastId }).then((res) => {
          if (res.code === '1001') {
            this.bannerPC = res.bannerPC
            this.bannerphone = res.bannerPhone
            this.menuName = res.menuName
            this.menuNameEng = res.menuNameEng
            this.$store.commit('setMenuName', res.menuName)
          }
        })
      }
    },
  },
}
</script>

