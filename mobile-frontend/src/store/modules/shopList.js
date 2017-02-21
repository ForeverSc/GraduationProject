import shops from '../../api/shops'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import { Indicator, MessageBox, Toast } from 'mint-ui'
import router from '../../router'

const state = {
  shopList: []
};

const getters = {
  shopList: state => state.shopList
};

const actions = {
  getShopList({commit}, data){
    Indicator.open()
    shops.getShopList(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_SHOP_LIST_SUCCESS, res.data)
        }else{
          commit(types.GET_SHOP_LIST_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.GET_SHOP_LIST_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.GET_SHOP_LIST_SUCCESS](state, shopList){
    state.shopList = shopList
  },
  [types.GET_SHOP_LIST_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}




