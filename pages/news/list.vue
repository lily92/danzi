<template>
  <div class="bgf7 padding25">
    <div class="container">
      <ul class="new-list clearfix row">
        <li v-for="(item,i) in newList" :key="'new'+i" class="col-md-4 col-sm-6" @click="goDetail(item.newId)">
          <div class="positionr">
            <img src="~/assets/images/bg-new.jpg" alt srcset class="w100">
            <div class="positionb">
              <div class="positionr ">
                <img src="~/assets/images/new-img.jpg" alt srcset class="w100">
                <div class="positionb flex-item">
                  <img src="~/assets/images/new-img.jpg" alt srcset class="w100">
                </div>
              </div>
            </div>
            <div class="new-desc flex flex-align-between trans">
              <p class="color6">
                {{ item.newDate }}
              </p>
              <p class="fon16 line2" :data-newid="item.newId">
                {{ item.newTitle }}
              </p>
              <p class="fon16 line22" :data-newid="item.newId">
                {{ item.newDesc }}
              </p>
              <div class="tag">
                <a v-for="(sub,index) in item.tag" :key="'tag'+index" :href="sub.url">
                  {{ sub.name }}
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Paging
        :current-page="currentPage"
        :page-count="pageCount"
        :pager-count="pagerCount"
        @change="change"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.new-list {
  li {
    cursor: pointer; margin-bottom: 30px;
  }
  .new-desc {
    min-height: 35%;
    background: #fff;
    bottom: 0;
    width: 100%;
    padding: 15px;
    position: absolute; transition: .3s linear all;
    height: auto;
    p{ width: 100%}
    div{ width: 100%}
  }
  .line22 {
    margin: 5px 0;
    height: 48px;
    overflow: hidden; display: none;
  }
  .tag a {
    background: #00a2e9;
    color: #fff;
    padding: 2px 5px;
    margin-right: 3px;
    margin-bottom: 3px;
  }
  li:hover {
    .new-desc {
      min-height: 100%;
      transition: .3s linear all;
      max-height: 100%;
    }
    .line22 {
      height: auto;
      max-height: 80%;
      display: block;
    }
    .line2{ display: none;}
    .color6 {
      color: #333;
    }
  }
}
@media screen  and (max-width: 767px){
  .new-list {
    li{ margin-bottom: 15px;}
  }
}
</style>
<script>
import Paging from '~/components/Paging.vue'
export default {
  components: {
    Paging,
  },
  data() {
    return {
      currentPage: 1,
      pageCount: 1,
      pagerCount: 5,
      newList: [],
    }
  },
  watch: {
    $route() {
      if (!this.$route.query.currentPage) {
        this.currentPage = 1
      } else {
        this.currentPage = Number(this.$route.query.currentPage)
      }
      this.getList(this.currentPage)
    },
  },
  mounted() {
    if (this.$route.query.currentPage) {
      this.currentPage = Number(this.$route.query.currentPage)
    }
    this.getList(this.currentPage)
  },
  methods: {
    getList(page) {
      this.$axios
          .$post('news/list', { size: 6, page: page, type: this.$route.query.id })
          .then((res) => {
            if (res.code === '1001') {
              this.newList = res.list
              this.pageCount = Number(res.totalPage)
            }
          })
    },
    change(page) {
      this.currentPage = page
      this.$router.push({
        query: { id: this.$route.query.id, currentPage: this.currentPage },
      })
    },
    goDetail(newId, typeId) {
      this.$router.push({ path: '/news/listdetail?newid=' + newId + '&cid=' + this.$route.query.id })
    },
  },
}
</script>
