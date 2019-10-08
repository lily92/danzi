export const state = () => ({
  head: {
    nav: [],
    index: 0,
    showNavFix: false,
    FunNav: [],
  },
  menuId: -1,
  islogin: false,
  ProductClassfy: [],
  Location: [],
  menuName: '',
  link: '',
})

export const mutations = {
  setHeadNav(state, payload) {
    state.head.nav = payload
  },
  setFundationHeadNav(state, payload) {
    state.head.FunNav = payload
  },
  /**
   * this.$store.commit('setHeadIndex', xxIndex)
   * @param {object} state
   * @param {number} payload
   */
  setHeadIndex(state, payload) {
    state.head.index = payload
  },
  setNavFix(state, payload) {
    state.head.showNavFix = payload
  },
  setLogin(state, payload) {
    state.islogin = payload
  },
  setMenuId(state, payload) {
    state.menuId = payload
  },
  setLocation(state, payload) {
    state.Location = payload
  },
  setMenuName(state, payload) {
    state.menuName = payload
  },
  setLink(state, payload) {
    state.link = payload
  },

}

export const actions = {
  async nuxtServerInit(store, context) {
    const { dispatch } = store
    await dispatch('apiHeadNav')
  },
  // async
  async apiHeadNav({ commit }) {
    const res = await this.$axios.$post('common/nav')
    if (res.code === '1001') {
      commit('setHeadNav', res.navList)
    }
  },

}

export const getters = {
  currentMenus(state) {
    const { route: { fullPath = '', query: { cid } }, head: { nav = [] } = {} } = state
    const currentMenuIf = (ii) => fullPath.includes(ii.link) || (+cid && +cid === ii.id)
    const currentMenu = { ...nav.find((i) => fullPath.includes(i.link) || i.submenu.find(currentMenuIf)) }

    let currentSubMenu
    if (currentMenu && currentMenu.submenu instanceof Array) {
      currentSubMenu = { ...currentMenu.submenu.find(currentMenuIf) }
      delete currentMenu.submenu
    }
    // console.log(currentMenu)
    return [currentMenu || null, currentSubMenu || null]
  },
}


