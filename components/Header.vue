<template>
  <div ref="header">
    <header id="header" class="header active">
      <div style="display:none">
        {{ fristMenu }}
      </div>
      <div class="container">
        <div class="header-right flex-item pull-right">
          <nav>
            <ul class="flex-item">
              <li
                v-for="(item,index) in navlist"
                :key="'b'+item.id+index"
                :class="{'active':item.isShow}"
                @mouseenter="showPhoneMenu(index)"
              >
                <nuxt-link
                  class="links"
                  :to="item.link"
                  :class="{'current':item.id === fristMenu.id}"
                >
                  <span>{{ item.menu }}</span>
                  <span v-show="item.submenu !=null" class="icon-down" />
                </nuxt-link>

                <<<<<<< HEAD
                <dl v-show="item.submenu !=null" class="flex nav-dl">
                  =======
                  <dl v-show="item.submenu.length>0" class="flex nav-dl" @mouseleave="hideDown(index)">
                    >>>>>>> ecd61d97322c3f8c5b78a05e7b72dd9d3964f2f5
                    <dd>
                      <span class="colorb fon48">{{ item.txtOne }}</span>
                      <span class="color3 fon20">{{ item.txtTwo }}</span>
                    </dd>
                    <dd v-for="(subitem, i) in item.submenu" :key="'a'+subitem.id+i">
                      <nuxt-link
                        :to="subitem.link"
                        :data-menuid="subitem.id"
                        @click.native="hideDown(i)"
                      >
                        <div class="positionr w100 overflow-hidden">
                          <img src="~/assets/images/index/nav-img-bg.jpg" alt srcset class="w100">
                          <div class="positionb scale">
                            <img :src="subitem.img" alt srcset class="w100">
                          </div>
                        </div>
                        <p class="animated delay15 fadeInUp">
                          {{ subitem.name }}
                        </p>
                      </nuxt-link>
                    </dd>
                  </dl>
                </dl>
              </li>
            </ul>
          </nav>

          <div id="nav_btn" class="nav-btn visible-xs" @click="showMenu(false)">
            <span />
          </div>
        </div>
        <div class="logo">
          <a href="/?loading=1">
            <img src="../assets/images/logo.png" alt srcset>
          </a>
        </div>
      </div>
    </header>
    <!--end header -->

    <!-- star nav-fix -->
    <div class="nav-fix flex-item hidden-lg hidden-md hidden-sm" :class="{'active':showMenuFix}">
      <!--star  nav-btn -->
      <div class="nav-btn nav-btn-fix nav-btn-close" @click="showMenu(true)">
        <span />
      </div>
      <!--star header -->
      <p class="nav-fix-logo hidden-xs">
        <nuxt-link to="/">
          <img src="../assets/images/logo.png" alt srcset>
        </nuxt-link>
      </p>
      <div class="col-sm-12 flex-item container phone-nav">
        <div class="col-sm-7 flex-item nav-all col-xs-12">
          <dl
            v-for="(item,index) in navlist "
            :key="item.id"
            class="col-sm-4 col-xs-12"
            :class="{'active':item.isShow}"
          >
            <dt>
              <div class="pull-right phone-more visible-xs" @click="showPhoneMenu(index)">
                <span v-show="item.isShow || item.submenu ==null ">-</span>
                <span v-show="!item.isShow && item.submenu !=null ">+</span>
              </div>
              <nuxt-link :to="item.link" @click.native="showMenu(true)">
                {{ item.menu }}
              </nuxt-link>
            </dt>
            <div class="dd-list visible-xs">
              <dd v-for="(subitem,i) in item.submenu " :key="i">
                <nuxt-link :to="subitem.link" @click.native="showMenu(true)">
                  {{ subitem.name }}
                </nuxt-link>
              </dd>
            </div>
            <!-- pc -->
            <div class="dd-list hidden-xs">
              <dd v-for="(subitem,i) in item.submenu " :key="i">
                <nuxt-link
                  :to="subitem.link"
                  @click.native="showMenu(true,subitem.id)"
                >
                  {{ subitem.name }}
                </nuxt-link>
              </dd>
            </div>
            <!-- end pc nav -->
          </dl>
        </div>
      </div>
    </div>
    <!-- end nav-fix -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from '~/helper/utils.js'
export default {
  name: 'Headers',
  props: ['navi', 'navl', 'navid'],
  data() {
    return {
      showLoading: true,
      showHeader: true,
      nowIndex: 1,
      icon: '+',
      showMenuFix: false,
      showIndex: null,
      navlistIndex: -1,
      selectType: 1,
      isShowhead: false,
    }
  },
  computed: {
    ...mapGetters(['currentMenus']),
    fristMenu() {
      const menus = this.currentMenus.filter((i) => i)
      if (!menus[0]) {
        return this.navlist
      } else {
        return menus[0]
      }
    },
    navlist() {
      return this.$store.state.head.nav.map((item, index) => {
        return { ...item, isShow: this.navlistIndex === index }
      })
    },
    setNavFix() {
      return this.$store.state.showNavFix
    },
    curIndex() {
      return this.$store.state.head.index
    },
  },
  mounted() {},
  methods: {
    hideHeader() {
      this.isShowhead = false
    },
    headerM(boolean) {
      if (boolean) {
        this.isShowhead = true
      } else {
        this.isShowhead = false
      }
    },
    showMenu(isClose) {
      this.showMenuFix = !this.showMenuFix
    },
    hideDown(index) {
      debounce(() => {
        this.navlistIndex = this.navlistIndex === index ? -1 : index
      }, 200)
    },

    showPhoneMenu(index) {
      debounce(() => {
        this.navlistIndex = this.navlistIndex === index ? -1 : index
      }, 400)
    },
  },
}
</script>

<style lang="scss" scoped>
$colorb: #00a2e9;
.delay15{ animation-delay: 1.5s}
.logo-fix {
  position: fixed;
  left: 40px;
  top: 20px;
  z-index: 99;
}
#header {
  transform: translateY(-100%);
  transition: 0.5s linear all;
  z-index: 11;
  border-bottom: 2px solid $colorb;
}
#header.active {
  transform: translateY(0);
}
#header .container {
  width: 100%;
  padding: 0;
}
.nav-btn {
  display: block;
  width: 40px;
  padding: 15px;
  span {
    width: 20px;
    height: 4px;
    background: #000;
    display: block;
    position: relative;
  }
  span::before {
    display: block;
    content: "";
    width: 15px;
    height: 4px;
    background: #000;
    position: absolute;
    left: 0;
    top: -8px;
  }
  span::after {
    display: block;
    content: "";
    width: 10px;
    height: 4px;
    background: #000;
    position: absolute;
    left: 0;
    top: 8px;
  }
}
.nav-btn-close {
  span {
    width: 20px;
    transform: rotate(45deg);
    transition: 0.5s linear all;
  }
  span::before {
    width: 0;
    transition: 0.5s linear all;
  }
  span::after {
    width: 20px;
    transform: rotate(90deg) translate(-8px);
    transition: 0.5s linear all;
  }
}

.logo {
  padding-top: 20px;
}
/*nav*/
.nav-btn-fix {
  position: fixed;
  right: 42px;
  top: 34px;
  z-index: 99999;
}
.nav-btn-fix span {
  background: #fff;
}
.nav-btn-fix span::after,
.nav-btn-fix span::before {
  background: #fff;
}

@media (min-width: 768px) {
  .fon48 {
    font-size: 28px;
  }
  .fon20 {
    font-size: 14px;
  }
  .logo-fix {
    left: 20px;
  }
  .container {
    width: 750px;
  }
  /**header*/
  .header {
    position: fixed;
    width: 100%;
    height: 100px;
    left: 0;
    top: 0;
    z-index: 9;
    background: #fff;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 40px;
  }
  .header-right {
    flex-wrap: nowrap;
  }
  .icon-down {
    display: inline-block;
    width: 17px;
    height: 9px;
    background: url(~@/assets/images/index/icon-down.png) no-repeat center;
  }

  .nav-dl {
    // justify-content: space-between;
    justify-content: center;
    align-items: center;
    a {
      color: #333 !important;
      display: block;
    }
    a:hover { color: $colorb !important}
    dd {
      // flex: 1;
      width: 16.66%;
      padding: 0 20px;
    }
  }
  nav ul.flex-item {
    flex-wrap: nowrap;
  }
  nav ul li {
    font-size: 16px;
  }
  nav ul li a.links {
    position: relative;
    z-index: 3;
  }
  nav ul li a.link {
    position: relative;
    z-index: 3;
  }
  nav ul li a {
    text-decoration: none;
  }
  nav ul li a.current {
    color: $colorb;
  }
  nav ul li.active .icon-down {
    background: url(~@/assets/images/index/icon-up.png) no-repeat center;
  }

  nav ul li.active a.links {
    color: $colorb;
  }
  nav ul li {
    margin: 0 8px;
  }
  nav ul a {
    color: #000;
    display: block;
    line-height: 100px;
    // padding: 0 8px;
    font-size: 13px;
  }

  nav ul a.link.current {
    background: $colorb;
    color: #fff;
  }
  nav ul li dl {
    position: absolute;
    left: 0;
    top: 100px;
    background: #fff;
    width: 100%;
    text-align: center;
    transition: 0.5s linear all;
    opacity: 0;
    z-index: 9;
    padding: 40px 0;
    transform: translateY(-200%);
  }

  nav ul li.active dl {
    transition: 0.3s linear all;
    opacity: 1;
    transform: translateY(0);
  }
  nav ul li:hover,
  nav ul li.active {
    color: $colorb;
  }
  nav ul li:hover a,
  nav ul li.active a {
    color: $colorb;
  }

  nav ul li dl a {
    color: #333;
    font-size: 13px;
    padding: 0;
  }

  nav ul li dl a:hover {
    background: #fff;
    color: $colorb;
  }

  /*nav*/
  .nav-fix-logo {
    padding: 40px 45px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .nav-fix {
    position: fixed;
    z-index: 999;
    background: #008fc4;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    color: #fff;
    opacity: 0;
    transform: scale(0);
    transition: 0.3s linear all;
    dl {
      margin-bottom: 10vh;
    }
    dt {
      font-size: 24px;
      margin-bottom: 2vh;
    }
    dd a {
      font-size: 14px;
      line-height: 24px;
    }
    a {
      color: #fff;
      display: block;
    }
    a:hover {
      text-decoration: underline;
      transform: translateX(3px);
      transition: 0.2s linear all;
    }
  }
  .nav-fix.active {
    opacity: 1;
    transition: 0.3s linear all;
    transform: scale(1);
  }
  .nav-p {
    color: #ffecc3;
    font-size: 24px;
    text-align: center;
  }
  .nav-all {
    align-items: flex-start;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
  nav ul li {
    margin: 0 15px;
  }
  nav ul a {
    // padding: 0 15px;
    font-size: 16px;
  }
  .fon48 {
    font-size: 38px;
  }
  .fon20 {
    font-size: 16px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
  nav ul li {
    margin: 0 30px;
  }
  nav ul a {
    // padding: 0 30px;
  }
  .fon48 {
    font-size: 48px;
  }
  .fon20 {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .logo {
    width: 180px;
  }
}
@media (max-width: 767px) {
  .logo {
    padding: 0;
  }
  .nav-fix {
    display: none;
  }
  .nav-fix.active {
    display: block;
  }
  .margin-b40 {
    margin-bottom: 20px;
  }
  .header {
    justify-content: space-between;
    padding: 10px 10px 10px 20px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: #fff;
  }
  .header-right {
    margin-top: 10px;
  }
  nav {
    display: none;
  }
  nav ul.flex-item {
    display: block;
  }

  .nav-fix {
    z-index: 101;
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    position: fixed;
    overflow-y: scroll;
    overflow: hidden scroll;
    left: 0;
    top: 0;
    align-items: flex-start;
    background: $colorb;
    padding: 75px 0 0 0;
    .container {
      padding: 0;
      max-height: 100vh;
      overflow-y: scroll;
      overflow: hidden scroll;
    }
    .col-xs-12 {
      padding: 0;
    }
  }
  .nav-btn-fix {
    right: 20px;
    top: 20px;
    z-index: 102;
  }
  .nav-btn-fix span {
    background: #000;
  }
  .nav-btn-fix span::after,
  .nav-btn-fix span::before {
    background: #000;
  }
  .nav-all {
    background: $colorb;
    padding-top: 100px;
  }
  .nav-all dl {
    border-bottom: 1px solid #fff;
    overflow: hidden;
    height: 51px;
    transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
  }
  .nav-all dl.active {
    height: auto;
    transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
  }
  .nav-all dl .dd-list {
    transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
    opacity: 0;
    transform: translateY(-500%);
  }
  .nav-all dl.active .dd-list {
    transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
    opacity: 1;
    transform: translateY(0);
  }
  .nav-all dl:first-child dt {
    border-top: 1px solid #fff;
  }
  .nav-all dt {
    line-height: 50px;
    font-size: 16px;
    color: #fff;
    padding-left: 10px;
    background: $colorb;
    position: relative;
    z-index: 99;
  }
  .nav-all dd {
    line-height: 40px;
    padding-left: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
  .nav-all a {
    display: block;
    color: #fff;
  }
  .phone-more {
    width: 50px;
    border-left: 1px solid #fff;
    text-align: center;
    font-size: 20px;
  }

  .btn-more,
  .btn-leader {
    border-width: 1px;
    width: 60% !important;
    line-height: 40px;
    height: 40px;
  }
  .btn-more::after {
    height: 1px;
    top: 19px;
  }
  .leader-title {
    font-size: 25px;
    color: $colorb;
  }
  .leader-title-eng {
    font-size: 16px;
    color: #d9d9d9;
    text-transform: uppercase;
  }
  .show-phone-btn {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 100;
  }
  .show-phone-btn span {
    background: #fff;
  }
  .show-phone-btn span::after,
  .show-phone-btn span::before {
    background: #fff;
  }
}
</style>
