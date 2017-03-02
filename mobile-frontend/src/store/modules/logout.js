import users from '../../api/users'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import { Indicator, MessageBox, Toast } from 'mint-ui'
import router from '../../router'

const state = {
};

const getters = {
};

const actions = {
  logout({commit}, data){
    Indicator.open()
    users.logout(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.LOGOUT_SUCCESS)
        }else{
          commit(types.LOGOUT_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.LOGOUT_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.LOGOUT_SUCCESS](state){
    router.push('/login')
  },
  [types.LOGOUT_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}




