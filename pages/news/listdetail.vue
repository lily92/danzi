<template>
  <div class="bgf7 padding25" :data-menuid="menuId">
    <div class="container bgf  ">
      <div class="main-con">
        <div class="page-title text-center">
          <p class="title fon24" :data-id="newsId">
            {{ title }}
          </p>
          <p class="color9 border-bottom6">
            <span class="date">{{ date }}</span>
          </p>
        </div>
        <div class="con new-con" v-html="detail" />
      </div>
      <div class="page-prevnext flex-item ">
        <nuxt-link v-if="prevId" :to="'/news/listdetail?newid='+prevId+'&cid='+cid" class="trans">
          <span class="fon16">上一篇：</span>
          <br>
          <span class="nowarp">{{ prevTitle }}</span>
        </nuxt-link>
        <nuxt-link v-if="nextId" :to="'/news/listdetail?newid='+nextId+'&cid='+cid" class="trans">
          <span class="fon16">下一篇：</span>
          <br>

          <span class="nowarp">{{ nextTitle }}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'news',
  components: {},
  data() {
    return {
      date: '',
      title: '',
      detail: '',
      prevTitle: '',
      nextTitle: '',
      prevId: '',
      nextId: '',
      cid: '',
    }
  },
  computed: {
    newsId() {
      return this.$route.query.newid
    },
    menuId() {
      return this.$store.state.menuId
    },

  },
  watch: {
    newsId() {
      this.getDetail(this.$route.query.newid)
    },
  },
  mounted() {
    console.log('this.$route.query.newid:' + this.$route.query.newid)
    this.getDetail(this.$route.query.newid)
  },

  methods: {
    getDetail(newId) {
      this.$axios.$post('news/listdetail', { newid: Number(newId) }).then((res) => {
        if (res.code === '1001') {
          window.scroll(0, 0)
          this.date = res.date
          this.title = res.title
          this.detail = res.detail
          this.prevTitle = res.prevTitle
          this.nextTitle = res.nextTitle
          this.cid = res.cid
          if (res.prevId !== null) {
            this.prevId = res.prevId
          } else {
            this.prevId = false
          }
          if (res.nextId !== null) {
            this.nextId = res.nextId
          } else {
            this.nextId = false
          }
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped >
.padding-b40 {
  padding-bottom: 40px;
}
.border-bottom6 {
  border-bottom: 1px solid #e6e6e6;
  padding: 0 0 15px 0;
  margin-bottom: 20px;
}
.new-con {
  min-height: 400px;
}
.date {
  background: url("~@/assets/images/icon-date.png") no-repeat left center;
  padding: 5px 0 5px 15px;
}
.page-prevnext.flex-item {
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 40px;
  a {
    background: #e6e6e6;
    width: 50%;
    display: block;
    padding: 15px;
    text-decoration: none;
  }
  a:hover {
    background: #00a2e9;
    color: #fff;
  }
}
.main-con {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 15px;
}

@media (max-width: 767px) {
  .main-con{ padding: 20px 15px;}
  .page-prevnext.flex-item {
    a {
      width: 100%;
    }
    a.text-right {
      text-align: left;
    }
  }
}
</style>
