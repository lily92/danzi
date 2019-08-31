<template>
  <div>
    <div class="positionr">
      <img src="~/assets/images/about/history-bg.jpg" alt="" srcset="" class="w100">
      <div class="positionb">
        <History />
        <!-- <img src="~/assets/images/about/history-bg.jpg" alt="" srcset="" class="w100"> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import History from '~/components/pages/about/history.vue'
export default {
  layout: 'single',
  components: {
    History,
  },
}
</script>
