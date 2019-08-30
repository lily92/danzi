<template>
  <div class="bgf7">
    <div class="container">
      <form action class="flex form padding25">
        <div class="item">
          <select v-model="departmentId" name placeholder="招聘部门" class="select">
            <option value="">
              招聘部门
            </option>
            <option v-for="(item,i) in departmentList" :key="'departmentList'+i" :value="item.id">
              {{ item.text }}
            </option>
          </select>
        </div>
        <div class="item margin20">
          <select v-model="cityId" name placeholder="工作地点" class="select">
            <option value="">
              工作地点
            </option>
            <option v-for="(item,i) in cityList" :key="'cityList'+i" :value="item.id">
              {{ item.text }}
            </option>
          </select>
        </div>
        <div class="flex item flex-nowarp">
          <input v-model="keyword" type="text" placeholder="请输入关键字" class="search-key w100">
          <button class="btn-search" type="button" @click="searchJob()">
            搜索
          </button>
        </div>
      </form>

      <!--star list -->
      <ul class="re-list">
        <li v-for="(item,i) in listJob" :key="'job'+i" class="bgf" :class="{'active':item.isShow}">
          <div class="flex title fon16">
            <div class="item2">
              {{ item.jobName }}
            </div>
            <div class="item1">
              {{ item.apartment }}
            </div>
            <div class="item1">
              {{ item.city }}
            </div>
            <div class="item2">
              {{ item.date }}
            </div>
            <div class>
              <span v-show="item.isShow" class="fon24 lin24" @click="showDetail(i)">×</span>
              <span v-show="!item.isShow" class="fon24 lin24" @click="showDetail(i)">+</span>
            </div>
          </div>
          <div class="re-con trans">
            <div class="flex flex-1">
              <div>工作地点 ： {{ item.city }}</div>
              <div>年龄 ：{{ item.year }}</div>
              <div>薪资待遇 : {{ item.money }}</div>
              <div>发布日期 :{{ item.date }}</div>
            </div>
            <div class="flex flex-1">
              <div>工工作经验 ：{{ item.jinyan }}</div>
              <div>学历 ： {{ item.xueli }}</div>
              <div>招聘人数 : {{ item.renshu }}人</div>
              <div>职位有效期 : {{ item.enddate }}</div>
            </div>
            <div>
              <br>
              <p>
                <b>岗位职责</b>
              </p>
              <div v-html="item.zhize" />
              <br>
              <p>
                <b>任职资格</b>
              </p>

              <div v-html="item.zige" />
            </div>
            <div>
              <a class="send-btn margin25 text-center">如果您适合这个岗位要求，请将您的简历发送到
                {{ item.mail }}
              </a>
            </div>
          </div>
        </li>
      </ul>
      <!--end  list -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.lin24{ line-height: 24px; display: block; width: 24px; height: 24px; text-align: center; cursor: pointer;}
.flex-nowarp {
  flex-wrap: nowrap;
}
.search-key {
  border: 0;
  padding: 3px 10px;
  background: #fff;
}
.btn-search {
  border: 0;
  background: url("~@/assets/images/icon-search.png") no-repeat center #00a2e9;
  font-size: 0;
  min-width: 50px;
  height: 35px;
  flex-shrink: 0;
}
.form {
  .select {
    width: 100%;
    border: 0;
    background: #fff;
    height: 35px;
    border-radius: 0;
  }
  .item {
    flex: 1;
  }
  .margin20 {
    margin: 0 20px;
  }
}
.re-con{  height: 0; display: none;}
.re-list {
  li{ margin-bottom: 30px;}
  li.active .re-con{ height: auto; display: block;}
  .title {
    padding: 20px 15px;
    border-bottom: 1px solid #f7f7f7; align-items: center;
  }
  .item1 {
    flex: 1;
  }
  .item2 {
    flex: 2;
  }
  .re-con {
    padding: 15px;
  }
}
.flex-1{
  div{ flex: 1;}
}
.send-btn{
  display: block; width: 100%; padding: 10px 10px; background: #00a2e9; color: #fff;
}

</style>
<script>
export default {
  layout: 'ny',
  data() {
    return {
      activeIndex: -1,
      departmentId: '',
      cityId: '',
      keyword: '',
    }
  },
  computed: {
    listJob() {
      return this.list.map((item, index) => {
        return { ...item, isShow: this.activeIndex === index }
      })
    },
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('recruit/job')
    const search = await $axios.$post('recruit/searchlist')
    return {
      list: res.list,
      departmentList: search.departmentList,
      cityList: search.cityList,
    }
  },
  methods: {
    showDetail(index) {
      this.activeIndex = this.activeIndex === index ? -1 : index
    },
    searchJob() {
      this.$axios.$post('recruit/job', { 'departmentId': this.departmentId, 'cityId': this.cityId, 'keyword': this.keyword }).then((res) => {
        if (res.code === '1001') {
          this.list = res.list
        }
      })
    },
  },
}
</script>
