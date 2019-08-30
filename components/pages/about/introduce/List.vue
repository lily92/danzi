<template>
  <ul class="list clearfix row ">
    <li v-for="(item,i) in list" :key="'introduct'+i" class=" col-sm-6">
      <nuxt-link class="positionr" :to="item.link">
        <img src="~/assets/images/about/about-img-bg.jpg" alt="" srcset="" class="w100">
        <div class="positionb">
          <img :src="item.img" alt="" srcset="" class="w100">
        </div>
        <div class="txt flex-item  trans">
          <div>
            <p class="title">
              {{ item.title }}
            </p>
            <p class="line4">
              {{ item.detail }}
            </p>
          </div>
        </div>
        <img src="~/assets/images/about/icon-eye.png" alt="" srcset="" class="eye trans">
      </nuxt-link>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
a{ display: block;}
.txt{ position: absolute; width: 40%; right: 0; height: 100%; background: #fff; top: 0; padding: 15px; transition: .3  linear all;}
.eye{ position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); z-index: 2; display: none ; opacity: 0;}
.title{ font-size: 21px; margin-bottom: 10px;}
.title::before{ display: block; content: ''; width: 27px; border-top: 3px solid #00a2e9; margin-bottom: 10px;}
.list{ margin-bottom: 25px;
 li{margin-top: 25px; cursor: pointer;}
 li:hover .txt{
     width: 100%; align-items: flex-start; justify-content: flex-start; background: rgba($color: #000000, $alpha:0.5); color: #fff;
    .line4{ display: none;}
 }
 li:hover .eye{ display: block; opacity: 1;}
 }
</style>
<script>
export default {
  props: ['list'],
}
</script>
