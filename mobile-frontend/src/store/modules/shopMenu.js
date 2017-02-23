import shops from '../../api/shops'
import bills from '../../api/bills'
import * as types from '../mutations-types'
import validator from '../../util/validator'
import { Indicator, MessageBox, Toast } from 'mint-ui'
import router from '../../router'

const state = {
  shopMenu: []
};

const getters = {
  shopMenu: state => state.shopMenu,
  total: state => {
    let total = 0
    state.shopMenu.forEach(function (cur, index, array) {
      total += cur.dishPrice * cur.dishNum
    })
    return total
  }
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
  },
  clearMenu({ commit, state, getters}, { username, shopName }){
    let data = {
      username,
      shopName,
      dishs: [],
      total: 0
    }
    data.total = getters.total

    state.shopMenu.forEach(function (cur, index, array) {
      let dish = {}
      if(cur.dishNum > 0){
        dish.dishName = cur.dishName
        dish.dishPrice = cur.dishPrice
        dish.dishNum = cur.dishNum
      }
      data.dishs.push(dish)
    })

    let alertTXT = ''
    data.dishs.forEach(function (cur, index, array) {
      alertTXT += cur.dishName+ '*' + cur.dishNum + ','
    })
    alertTXT+= '总共'+ data.total+ '元'

    if(data.total<=0){
      return
    }

    MessageBox.confirm(alertTXT).then(()=>{
      Indicator.open()
      bills.order(data).then(response=>{
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.ORDER_SUCCESS)
        }else{
          commit(types.ORDER_FAIL, { errMsg: res.result })
        }
      }).catch(err=>{
        Indicator.close()
        commit(types.ORDER_FAIL, { errMsg: err })
      })
    },()=>{})
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
  },
  [types.ORDER_SUCCESS](state){
    Toast({
      message: '下单成功！',
      duration: 800
    })
  },
  [types.ORDER_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}




