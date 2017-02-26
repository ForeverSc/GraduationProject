import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
//modules
import register from './modules/register'
import login from './modules/login'
import shopInfo from './modules/shopInfo'
import menu from './modules/menu'
import home from './modules/home'
import orders from './modules/orders'
import historyOrders from './modules/historyOrders'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    register,
    login,
    shopInfo,
    menu,
    home,
    orders,
    historyOrders
  },
  actions,
  mutations
})
