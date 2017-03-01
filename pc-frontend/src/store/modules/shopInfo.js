import shops from '../../api/shops'
import * as types from '../mutations-types'
import { MessageBox, Loading, Message } from 'element-ui'

const state = {
  shopTel: '',
  shopAddr: '',
  shopDetail: '',
  shopLogo: []
};

const getters = {
  shopTel: state => state.shopTel,
  shopAddr: state => state.shopAddr,
  shopDetail: state => state.shopDetail,
  shopLogo: state => state.shopLogo
};

const actions = {
  getShopInfo({commit}, data){
    let loading = Loading.service()
    shops.getShopInfo(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_SHOP_INFO_SUCCESS, res.data)
        }else{
          commit(types.GET_SHOP_INFO_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.GET_SHOP_INFO_FAIL, { errMsg: err })
      })
  },
  updateShopInfo({commit}, data){
    let loading = Loading.service()
    shops.updateShopInfo(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.UPDATE_SHOP_INFO_SUCCESS)
        }else{
          commit(types.UPDATE_SHOP_INFO_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.UPDATE_SHOP_INFO_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.GET_SHOP_INFO_SUCCESS](state, data){
    state.shopTel = data.shopTel
    state.shopAddr = data.shopAddr
    state.shopDetail = data.shopDetail
    state.shopLogo = [data.shopLogo]
  },
  [types.GET_SHOP_INFO_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  },
  [types.UPDATE_SHOP_INFO_SUCCESS](state){
    Message({
      message: '保存成功！',
      type: 'success'
    })
  },
  [types.UPDATE_SHOP_INFO_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}




