import users from '../../api/users'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import { Indicator, MessageBox, Toast } from 'mint-ui'
import router from '../../router'

const state = {
  loginStatus: false,
  username: ''
};

const getters = {
  loginStatus: state => state.loginStatus,
  username: state => state.username
};

const actions = {
  login({commit}, data){
    if(validator.isEmpty(data.username)){
      MessageBox.alert('用户名不能为空！')
      return
    }
    if(validator.isEmpty(data.password)){
      MessageBox.alert('密码不能为空！')
      return
    }
    Indicator.open()
    let username = data.username
    users.login(data)
      .then(response => {
        Indicator.close()
        let data = response.data
        if(data.errCode === '000000'){
          commit(types.LOGIN_SUCCESS, { username })
        }else{
          commit(types.LOGIN_FAIL, { errMsg: data.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.LOGIN_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.LOGIN_SUCCESS](state, { username }){
    Toast({
      message: '登录成功！',
      duration: 800
    })
    state.username = username
    state.loginStatus = true
    router.push('/home')
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




