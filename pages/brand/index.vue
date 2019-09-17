<template>
  <div class="padding-t100">
    <Banner class="phone" />
  </div>
</template>
<style lang="scss" scoped>
.pinpai-list {
  height: 100%;
  flex-wrap: nowrap;
  li {
    width: 140px; position: relative;
    cursor: pointer;
  }
  .jiantou{ display: none;}
  li .list-bg{  background: url('~@/assets/images/about/pinpai-1.jpg') no-repeat center;  height: 90%; background-size: cover;}
  .list-txt{ height: 13%; background: #fff; width: 100%; justify-content: space-between; align-items: center; padding: 0 10px;
    img{max-height: 100%}
  }
  li::after{ position: absolute; width: 100%; height: 100%;  background: rgba($color: #000000, $alpha: 0.5); display: block; content: '';  left: 0; top: 0}
  li.active { width: 100%}
  li.active::after{ display: none;}
  li.active .jiantou{ display: block;}
  .w140 {
    width: 140px;
    overflow: hidden;
    img {
      max-width: auto;
    }
  }
}
@media screen and (max-width: 767px) {
  .phone{ padding: 25px 0;}
}
</style>
<script>
import Banner from '~/components/pages/brand/Banner.vue'
export default {
  layout: 'index',
  components: {
    Banner,
  },
}
</script>
