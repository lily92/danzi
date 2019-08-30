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
            持“专业化、职业化，共同成长”的人才理念，为迎接集团战略发展需要，人力资源率先变革，
            于2013年发起组织优化项目，项目坚持“精兵简政、专业职业、系统管理，完成使命”的原则，通过组织架构优化调整、
            人岗匹配测量、薪酬绩效体系改革、内部竞聘机制的建立、导师制的夯实等措施，以“六丹计划”为人才梯队建设的基石....
          </div>
          <div class="dram-btn">
            <nuxt-link to="/recruit/list" class="a1 trans">
              员工理念
            </nuxt-link>
            <nuxt-link to="/recruit/list" class="a2 trans">
              成长机制
            </nuxt-link>
            <nuxt-link to="/recruit/listdetail" class="a3 trans">
              招聘岗位
            </nuxt-link>
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
  a{ display: inline-block; width: 105px; height: 60px; line-height: 60px; padding-left: 33px;}
  .a1{ background:url('~@/assets/images/index/icon-dram-1.png') no-repeat 10px center #ffffff; }
  .a1:hover{background:url('~@/assets/images/index/icon-dram-11.png') no-repeat 10px center #0aa5ea; color: #fff; }
  .a2{ background:url('~@/assets/images/index/icon-dram-2.png') no-repeat 10px center #ffffff; }
  .a2:hover{background:url('~@/assets/images/index/icon-dram-22.png') no-repeat 10px center #0aa5ea; color: #fff; }
  .a3{ background:url('~@/assets/images/index/icon-dram-3.png') no-repeat 10px center #ffffff; }
  .a3:hover{background:url('~@/assets/images/index/icon-dram-33.png') no-repeat 10px center #0aa5ea; color: #fff; }
}
.flex-npwarp{ flex-wrap: nowrap; align-items: center;padding-bottom: 20px;}
</style>

<script>
export default {

}
</script>
