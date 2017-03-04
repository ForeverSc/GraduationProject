import users from '../../api/users'
import * as types from '../mutations-types'
import { Indicator, MessageBox, Toast } from 'mint-ui'

const state = {
  tel: '',
  address: ''
};

const actions = {
  getUserInfo({commit}, data){
    Indicator.open()
    users.getUserInfo(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_USER_INFO_SUCCESS, res.data)
        }else{
          commit(types.GET_USER_INFO_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.GET_USER_INFO_FAIL, { errMsg: err })
      })
  },
  updateUserInfo({commit}, data){
    Indicator.open()
    users.updateUserInfo(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.UPDATE_USER_INFO_SUCCESS)
        }else{
          commit(types.UPDATE_USER_INFO_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.UPDATE_USER_INFO_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.GET_USER_INFO_SUCCESS](state, user){
    state.tel = user.tel
    state.address = user.address
  },
  [types.GET_USER_INFO_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  },
  [types.UPDATE_USER_INFO_SUCCESS](state){
    Toast({
      title: '提示',
      message: '信息修改成功！'
    })
  },
  [types.UPDATE_USER_INFO_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }
};

export default {
  state,
  actions,
  mutations
}





