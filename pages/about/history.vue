<template>
  <div>
    <div class="positionr">
      <img src="~/assets/images/about/history-bg.jpg" alt="" srcset="" class="w100 phone">
      <div class="positionb">
        <History :list="list" />
        <!-- <img src="~/assets/images/about/history-bg.jpg" alt="" srcset="" class="w100"> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .phone{ height:80vh;}
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
