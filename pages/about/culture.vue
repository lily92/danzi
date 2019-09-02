<template>
  <div class="culture positionr">
    <!-- <img src="~/assets/images/about/wenhua-bg.jpg" alt srcset class="w100"> -->
    <div class=" flex-item">
      <ul class="cluture-list flex">
        <li v-for="(item,i) in list" :key="'c-list'+i" class="trans" :data-id="item.id" @click="linkDetail(item.id)">
          <div>
            <div class="positionr">
              <img src="~/assets/images/about/cultrure-item-bg.png" alt srcset class="w100">
              <div class="positionb flex-item">
                <img :src="item.img" alt srcset class="w100">
              </div>
            </div>
          </div>
          <div class="text-center bgf positionr text padding25">
            <div class="c-icon trans">
              <img :src="item.icon" alt srcset class="w100">
            </div>
            <p class="fon20">
              {{ item.title }}
            </p>
            <p class="fon16 color6">
              {{ item.desc }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.culture{ background: url('~@/assets/images/about/wenhua-bg.jpg') no-repeat center; background-size: cover; padding: 50px 0;}
.cluture-list {
  align-items: center;
  justify-content: space-between; width: 100%; padding: 0 5%;
  li {
    width: 22%; cursor: pointer;
  }
  li:hover{ transform: translateY(-10px);}
  .c-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #232323;
    border-radius: 50%;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    img {
      border-radius: 50%;
    }
  }
  li:hover .i-icon {
    background: #00a2e9;
  }
}
@media screen and  (max-width: 767px){
  .cluture-list li{ width: 47%; margin-bottom: 15px;}
  .fon20{ margin-top: 15px;}
}
</style>
<script>
export default {
  layout: 'single',
  async asyncData({ $axios }) {
    const res = await $axios.$post('culture/list')
    return {
      list: res.list,
    }
  },
  methods: {
    linkDetail(id) {
      this.$router.push({ path: '/about/cultureDetail?culutreId=' + id })
    },
  },
}
</script>
