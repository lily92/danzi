<template>
  <div class="container">
    <ul class="list clearfix row">
      <li v-for="(item,i) in list" :key="'brand'+i" class="col-sm-3 col-xs-6">
        <div class="bg-bule">
          <div class="list-img positionr">
            <img src="~/assets/images/pinpai-imgbg-1.jpg" alt srcset class="w100">
            <div class="positionb flex-item scale ">
              <img :src="item.img" alt srcset class="w100 trans">
            </div>
          </div>
          <div class="text-center margin-top">
            <p class="line2 max180 nohover">
              {{ item.desc }}
            </p>
            <p class="hover">
              <a target="_blank" :href="item.link" class="max180">查看详情</a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.list {
  li{ margin-bottom: 30px;}
  li .scale{ overflow: hidden;}
  li:hover .scale img{ transform: scale(1.1);}
  .margin-top{ margin-top: 20px;}
  .line2{ height: 42px; overflow: hidden;}
  .bg-bule {
    background: #e8f6ff; padding:20px;
  }
  .max180{ width: 85%; max-width: 180px; margin: 0 auto;}
  .hover{ display: none; opacity: 0;
   a{ background: #00a2e9; color: #fff; display: block;}
  }
  li:hover .hover { display: block; opacity: 1; height: 42px; line-height: 42px;}
  li:hover .nohover{ display: none; opacity: 0;}
}
@media screen  and (max-width: 767px){
  .list {
    .line2{ height: 40px;}
    .margin-top{ margin-top: 10px; }
    .bg-bule{ padding: 10px;}
  }
}
</style>
<script>
export default {
  props: ['list'],
}
</script>
