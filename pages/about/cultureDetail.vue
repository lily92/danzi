<template>
  <div class="cultured positionr">
    <!-- {{ culutreId }} -->
    <img src="~/assets/images/about/c-bg1.jpg" alt srcset class="w100">
    <a href="javascript:history.go(-1)" class="icon-close">
      <img src="~/assets/images/about/icon-close.png" alt srcset>
    </a>

    <div class="positionb">
      <img :src="bgimg" alt srcset class="w100">
    </div>
    <div class="positionb">
      <div class="container h100 padding25 colorf phone-container overfy flex flex-center">
        <div class="context" v-html="detail" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.overfy{ overflow-y: auto; overflow-x: hidden;}
.flex-center{ align-items: center;  justify-content: center;}
.context{ width: 100%;}
.colorf {
  color: #fff;
}
.icon-close {
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 1;
}
</style>
<script>
export default {
  layout: 'single',
  data() {
    return {
      bgimg: '',
      detail: '',
    }
  },
  computed: {
    culutreId() {
      return this.$route.query.culutreId
    },
  },
  watch: {
    culutreId() {
      this.getDetail(this.culutreId)
    },
  },
  mounted() {
    this.getDetail(this.culutreId)
  },
  methods: {
    getDetail(culutreId) {
      this.$axios
          .$post('about/cultureDetail', { culutreId: Number(culutreId) })
          .then((res) => {
            if (res.code === '1001') {
              window.scroll(0, 0)
              this.detail = res.detail
              this.bgimg = res.bgimg
            }
          })
    },
  },
}
</script>
