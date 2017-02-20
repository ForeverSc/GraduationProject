import shops from '../../api/shops'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import router from '../../router'
import { MessageBox, Loading, Message } from 'element-ui'

const state = {};

const getters = {};

const actions = {
  register({commit}, data){
    if(validator.isEmpty(data.shopName)){
      MessageBox.alert('店铺名名不能为空！')
      return
    }
    if(validator.isEmpty(data.shopTel)){
      MessageBox.alert('店铺电话不能为空！')
      return
    }
    if(validator.isEmpty(data.shopAddr)){
      MessageBox.alert('店铺地址不能为空！')
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
    let loading = Loading.service()
    delete data.rePassword
    shops.register(data)
         .then(response => {
           loading.close()
           let res = response.data
           if(res.errCode === '000000'){
             commit(types.REGISTER_SUCCESS)
           }else{
             commit(types.REGISTER_FAIL, { errMsg: res.result })
           }
         })
        .catch(err => {
          loading.close()
          commit(types.REGISTER_FAIL, { errMsg: err })
        })
  }
};

const mutations = {
  [types.REGISTER_SUCCESS](state){
    Message({
      message: '注册成功！',
      type: 'success',
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




