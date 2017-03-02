import shops from '../../api/shops'
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
    shops.login(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.LOGIN_SUCCESS, { shopName })
        }else{
          commit(types.LOGIN_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.LOGIN_FAIL, { errMsg: err })
      })
  },
  logout({commit}, data){
    let loading = Loading.service()
    shops.logout(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.LOGOUT_SUCCESS)
        }else{
          commit(types.LOGOUT_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.LOGOUT_FAIL, { errMsg: err })
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
  },
  [types.LOGOUT_SUCCESS](state){
    Message({
      message: '登出成功！',
      type: 'success',
      duration: 8000
    })
    state.shopName = ''
    state.loginStatus = false
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




