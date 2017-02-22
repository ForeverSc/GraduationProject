import shops from '../../api/shops'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import { Indicator, MessageBox, Toast } from 'mint-ui'
import router from '../../router'

const state = {
  shopMenu: []
};

const getters = {
  shopMenu: state => state.shopMenu
};

const actions = {
  getShopMenu({commit}, data){
    Indicator.open()
    shops.getShopMenu(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_SHOP_MENU_SUCCESS, res.data)
        }else{
          commit(types.GET_SHOP_MENU_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.GET_SHOP_MENU_FAIL, { errMsg: err })
      })
  },
  addDishNum({commit}, index){
    commit(types.ADD_SHOP_DISH_NUM_SUCCESS, index)
  },
  subDishNum({commit}, index){
    commit(types.SUB_SHOP_DISH_NUM_SUCCESS, index)
  }
};

const mutations = {
  [types.GET_SHOP_MENU_SUCCESS](state, shopMenu){
    shopMenu.forEach(function (cur, index, array) {
      cur.dishNum = 0
    })
    state.shopMenu = shopMenu
  },
  [types.GET_SHOP_MENU_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  },
  [types.ADD_SHOP_DISH_NUM_SUCCESS](state, index ){
    state.shopMenu[index].dishNum ++
  },
  [types.SUB_SHOP_DISH_NUM_SUCCESS](state, index ){
    if(state.shopMenu[index].dishNum > 0)
      state.shopMenu[index].dishNum --
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}




