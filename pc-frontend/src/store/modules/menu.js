import shops from '../../api/shops'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import router from '../../router'
import { MessageBox, Loading, Message } from 'element-ui'

const state = {
  shopMenu: []
};

const getters = {
  dishTable: state => state.dishTable
};

const actions = {
  getShopMenu({commit}, data){
    let loading = Loading.service()
    shops.getShopMenu(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_SHOP_MENU_SUCCESS, res.data)
        }else{
          commit(types.GET_SHOP_MENU_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.GET_SHOP_MENU_FAIL, { errMsg: err })
      })
  },
  updateShopMenu({commit}, data){
    let loading = Loading.service()
    shops.updateShopMenu(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.UPDATE_SHOP_MENU_SUCCESS)
        }else{
          commit(types.UPDATE_SHOP_MENU_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.UPDATE_SHOP_MENU_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.GET_SHOP_MENU_SUCCESS](state, data){
    state.shopMenu = data
  },
  [types.GET_SHOP_MENU_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  },
  [types.UPDATE_SHOP_MENU_SUCCESS](state){
    Message({
      message: '菜单保存成功！',
      type: 'success'
    })
  },
  [types.UPDATE_SHOP_MENU_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}




