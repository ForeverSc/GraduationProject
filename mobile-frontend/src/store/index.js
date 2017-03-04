import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
//modules
import register from './modules/register'
import login from './modules/login'
import logout from './modules/logout'
import shopList from './modules/shopList'
import shopMenu from './modules/shopMenu'
import orderList from './modules/orderList'
import orderInfo from './modules/orderInfo'
import userInfo from './modules/userInfo'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    register,
    login,
    logout,
    shopList,
    shopMenu,
    orderList,
    orderInfo,
    userInfo
  },
  actions,
  mutations
})
