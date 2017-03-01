import users from '../../api/users'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import { Indicator, MessageBox, Toast } from 'mint-ui'
import router from '../../router'

const state = {};

const getters = {};

const actions = {
  register({commit}, data){
    if(validator.isEmpty(data.username)){
      MessageBox.alert('用户名不能为空！')
      return
    }
    if(validator.isEmpty(data.tel)){
      MessageBox.alert('联系电话不能为空！')
      return
    }
    if(validator.isEmpty(data.address)){
      MessageBox.alert('收货地址不能为空！')
      return
    }
    if(validator.isEmpty(data.password)){
      MessageBox.alert('密码不能为空！')
      return
    }
    if(!validator.isEqual(data.password, data.rePassword)){
      MessageBox.alert('两次输入的密码不一致！')
      return
    }
    Indicator.open()
    delete data.rePassword
    users.register(data)
         .then(response => {
           Indicator.close()
           let data = response.data
           if(data.errCode === '000000'){
             commit(types.REGISTER_SUCCESS)
           }else{
             commit(types.REGISTER_FAIL, { errMsg: data.result })
           }
         })
        .catch(err => {
          Indicator.close()
          commit(types.REGISTER_FAIL, { errMsg: err })
        })
  }
};

const mutations = {
  [types.REGISTER_SUCCESS](state){
    Toast({
      message: '注册成功！',
      duration: 800
    })
    router.push('/login')
  },
  [types.REGISTER_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}




