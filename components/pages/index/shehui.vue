<template>
  <div>
    <div class="positionr">
      <img src="~/assets/images/index-d-bg.jpg" alt="" srcset="">
      <div class="positionb flex-item">
        <img src="~/assets/images/index-d-bg.jpg" alt="" srcset="">
      </div>
      <div class="bg-0 positionb flex">
        <div class="flex flex-npwarp">
          <div class="line3 drame-con">
            广东省丹姿慈善基金会是一家由丹姿集团捐资成立的社会慈善组织，初创于2007年，
            积极开展企业员工及家属大病关怀、山区助学、慰老恤孤助残活动。2013年正式注册成立非公募基金会，
            以专业视角融入精准扶贫、生态环保、灾害救援、社区关怀等慈善领域
          </div>
          <div class="dram-btn">
            <a href="" class="a1 trans">甘霖计划</a>
            <a href="" class="a2 trans">百善计划 </a>
            <a href="" class="a3 trans">救灾行动</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.drame-con{ width: 100%; flex-shrink: 1; color: #fff; padding: 0 15px; height: 63px; overflow: hidden;}
.bg-0{ background: url('~@/assets/images/index-bg-line1.png') no-repeat center bottom; width: 100%; height: 100%; align-content: flex-end;}
.dram-btn{
  width: 332px; flex-shrink: 0;
  a{ display: inline-block; width: 105px; height: 60px; line-height: 60px; padding-left: 35px;}
  .a1{ background:url('~@/assets/images/index/icon-s-1.png') no-repeat 10px center #ffffff; }
  .a1:hover{background:url('~@/assets/images/index/icon-s-11.png') no-repeat 10px center #0aa5ea; color: #fff; }
  .a2{ background:url('~@/assets/images/index/icon-s-2.png') no-repeat 10px center #ffffff; }
  .a2:hover{background:url('~@/assets/images/index/icon-s-22.png') no-repeat 10px center #0aa5ea; color: #fff; }
  .a3{ background:url('~@/assets/images/index/icon-dram-3.png') no-repeat 10px center #ffffff; }
  .a3:hover{background:url('~@/assets/images/index/icon-dram-33.png') no-repeat 10px center #0aa5ea; color: #fff; }
}
.flex-npwarp{ flex-wrap: nowrap; align-items: center;padding-bottom: 20px;}
</style>

<script>
export default {

}
</script>
