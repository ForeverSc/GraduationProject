import users from '../../api/users'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import router from '../../router'
import { MessageBox, Loading, Message } from 'element-ui'

const state = {
  loginStatus: false,
  shopName: ''
};

const getters = {
  loginStatus: state => state.loginStatus,
  shopName: state => state.shopName
};

const actions = {
  login({commit}, data){
    if(validator.isEmpty(data.shopName)){
      MessageBox.alert('用户名不能为空！')
      return
    }
    if(validator.isEmpty(data.password)){
      MessageBox.alert('密码不能为空！')
      return
    }
    let loading = Loading.service()
    let shopName = data.shopName
    users.login(data)
      .then(response => {
        loading.close()
        let data = response.data
        if(data.errCode === '000000'){
          commit(types.LOGIN_SUCCESS, { shopName })
        }else{
          commit(types.LOGIN_FAIL, { errMsg: data.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.LOGIN_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.LOGIN_SUCCESS](state, { shopName }){
    Message({
      message: '登录成功！',
      type: 'success',
      duration: 800
    })
    state.shopName = shopName
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




