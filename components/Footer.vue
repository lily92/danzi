<template>
  <div class="footer padding50">
    <footer class="clearfix container  ">
      <div class="flex-between flex col-sm-12">
        <div class="col-sm-6">
          <p class="fon16">
            <b>联系方式</b>
          </p>
          <div class="footer copy-right" v-html="footer.copyRight" />
        </div>
        <div class="col-sm-6 flex text-center flex-end">
          <div v-for="(item,i) in footer.qrcode" :key="'qrcode'+i" class="qrcode">
            <div class="positionr">
              <img src="~/assets/images/index/qrcode-1.jpg" alt srcset class="visible-hidden">
              <div class="positionb">
                <img :src="item.img" alt srcset>
              </div>
            </div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background: #2b2b2b;
  color: #f2f2f2;
  a {
    color: #f2f2f2;
  }
  .flex-end{ border-left: 1px solid #5e5e5e}
  .qrcode {
    margin-left: 20px;
  }
}
@media (max-width: 767px) {
  .footer {
    .qrcode {
      margin-left: 0;
      margin-right: 20px;
      font-size: 12px;
    }
    .flex-end{ justify-content: flex-start; margin-top: 20px; border-left: 0;}
    .flex-between{ justify-content: flex-start;}
  }

}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
</style>

<script>
export default {
  data() {
    return {
      footer: {},
    }
  },
  mounted() {
    this.getFooter()
  },
  methods: {
    getFooter() {
      this.$axios.$post('common/footer').then((res) => {
        if (res.code === '1001') {
          this.footer = res.footer
        }
      })
    },
  },
}
</script>

