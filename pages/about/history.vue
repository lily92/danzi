<template>
  <div>
    <div class="positionr">
      <!-- <img src="~/assets/images/about/history-bg.jpg" alt="" srcset="" class="w100 phone"> -->
      <div class="height60vh">
        <a class="return" href="/about">返回</a>
        <History :list="list" />
        <!-- <img src="~/assets/images/about/history-bg.jpg" alt="" srcset="" class="w100"> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.height60vh{ height: 88vh; background: url('~@/assets/images/about/history-bg.jpg') no-repeat center; background-size: cover;position: relative;}
.return {
  position: absolute;
  top: 20px;
  line-height: 18px;
  height: 18px;
  right: 50px;
  color: #fff;
  z-index: 100;
  padding-left: 25px;
  background: url('~@/assets/images/return.png') no-repeat;

}
@media screen and (max-width: 767px) {
  .height60vh{ height:80vh;}

}

</style>
<script>
import History from '~/components/pages/about/history.vue'
export default {
  layout: 'single',
  components: {
    History,
  },
  // /api/about/history
  async asyncData({ $axios }) {
    const res = await $axios.$post('about/history')
    return {
      list: res.list,
    }
  },
}
</script>
