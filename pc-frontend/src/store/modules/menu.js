import shops from '../../api/shops'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import router from '../../router'

const state = {
};

const getters = {
};

const actions = {
  logout({commit}, data){
    Indicator.open()
    shops.logout(data)
      .then(response => {
        Indicator.close()
        let data = response.data
        if(data.errCode === '000000'){
          commit(types.LOGOUT_SUCCESS)
        }else{
          commit(types.LOGOUT_FAIL, { errMsg: data.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.LOGOUT_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.LOGIN_SUCCESS](state, { username }){
    Toast({
      message: '登录成功！',
      duration: 800
    })
    state.username = ''
    state.loginStatus = false
    router.push('/login')
  },
  [types.LOGIN_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}



