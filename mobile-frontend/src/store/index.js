import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
//modules
import register from './modules/register'
import login from './modules/login'
import shopList from './modules/shopList'


Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    register,
    login,
    shopList
  },
  actions,
  mutations
})
