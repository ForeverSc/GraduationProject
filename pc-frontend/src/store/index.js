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

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    register,
    login,
    shopInfo,
    menu,
    home
  },
  actions,
  mutations
})
