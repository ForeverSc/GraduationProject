import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
//modules

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{

  },
  actions,
  mutations
})
