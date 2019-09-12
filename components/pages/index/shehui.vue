<template>
  <div>
    <div class="positionr">
      <img src="~/assets/images/index-d-bg.jpg" alt srcset class="hidden-xs">
      <img src="~/assets/images/index/index-phone-bg.jpg" alt srcset class="visible-xs">
      <div class="positionb flex-item">
        <img :src="sociology.pcImg" alt srcset class="hidden-xs ani">
        <img :src="sociology.phoneImg" alt srcset class="visible-xs ani">
      </div>
      <div class="bg-0 positionb flex">
        <div class="flex flex-npwarp">
          <div class="line3 drame-con" v-html="sociology.desc" />
          <div class="dram-btn">
            <nuxt-link to="/sociology#s0" class="a1 trans">
              甘霖计划
            </nuxt-link>
            <nuxt-link to="/sociology#s1" class="a2 trans">
              百善计划
            </nuxt-link>
            <nuxt-link to="/sociology#s2" class="a3 trans">
              救灾行动
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.drame-con {
  width: 100%;
  flex-shrink: 1;
  color: #fff;
  padding: 0 15px;
  height: 63px;
  overflow: hidden;
}
.bg-0 {
  background: url("~@/assets/images/index-bg-line1.png") no-repeat center bottom;
  width: 100%;
  height: 100%;
  align-content: flex-end;
}
.dram-btn {
  width: 332px;
  flex-shrink: 0;
  a {
    display: inline-block;
    width: 105px;
    height: 60px;
    line-height: 60px;
    padding-left: 38px;
  }
  .a1 {
    background: url("~@/assets/images/index/icon-s-1.png") no-repeat 10px center
      #f7f7f7;
  }
  .a1:hover {
    background: url("~@/assets/images/index/icon-s-11.png") no-repeat 10px
      center #0aa5ea;
    color: #f7f7f7;
  }
  .a2 {
    background: url("~@/assets/images/index/icon-s-2.png") no-repeat 10px center
      #f7f7f7;
  }
  .a2:hover {
    background: url("~@/assets/images/index/icon-s-22.png") no-repeat 10px
      center #0aa5ea;
    color: #f7f7f7;
  }
  .a3 {
    background: url("~@/assets/images/index/icon-dram-3.png") no-repeat 10px
      center #f7f7f7;
  }
  .a3:hover {
    background: url("~@/assets/images/index/icon-dram-33.png") no-repeat 10px
      center #0aa5ea;
    color: #f7f7f7;
  }
}
.flex-npwarp {
  flex-wrap: nowrap;
  align-items: flex-end;
  padding-bottom: 20px;
}
@media screen and (max-width: 767px) {
  .flex-npwarp {
    flex-wrap: wrap;
    padding-bottom: 0 !important;
  }
  .dram-btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    a {
      width: 33%;
    }
  }
  .drame-con {
    height: 56px;
  }
}
</style>

<script>
export default {
  props: ['sociology'],
}
</script>
