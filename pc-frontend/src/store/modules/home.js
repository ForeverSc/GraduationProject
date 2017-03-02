import bills from '../../api/bills'
import * as types from '../mutations-types'
import { MessageBox, Loading, Message } from 'element-ui'

const state = {
  orderWaitingList: []
};

const getters = {
  orderWaitingList: state => state.orderWaitingList
};

const actions = {
  getOrderListByShopName({commit}, data){
    let loading = Loading.service()
    bills.getOrderListByShopName(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_SHOP_ORDER_LIST_SUCCESS, res.data)
        }else{
          commit(types.GET_SHOP_ORDER_LIST_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.GET_SHOP_ORDER_LIST_FAIL, { errMsg: err })
      })
  },
  ensureOrder({commit}, data){
    let loading = Loading.service()
    bills.ensureOrder(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.ENSUER_ORDER_SUCCESS, res.data)
        }else{
          commit(types.ENSURE_ORDER_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.ENSURE_ORDER_FAIL, { errMsg: err })
      })
  },
  cancelOrder({commit}, data){
    let loading = Loading.service()
    bills.cancelOrder(data)
      .then(response => {
        loading.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.CANCEL_ORDER_SUCCESS, res.data)
        }else{
          commit(types.CANCEL_ORDER_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        loading.close()
        commit(types.CANCEL_ORDER_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.GET_SHOP_ORDER_LIST_SUCCESS](state, orderWaitingList){
    state.orderWaitingList = orderWaitingList
  },
  [types.GET_SHOP_ORDER_LIST_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  },
  [types.ENSUER_ORDER_SUCCESS](state, { orderId }){
    state.orderWaitingList.forEach(function (cur, index, array) {
      if(cur._id === orderId){
        array.splice(index, 1)
      }
    })
  },
  [types.ENSURE_ORDER_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  },
  [types.CANCEL_ORDER_SUCCESS](state, { orderId }){
    state.orderWaitingList.forEach(function (cur, index, array) {
      if(cur._id === orderId){
        array.splice(index, 1)
      }
    })
  },
  [types.CANCEL_ORDER_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}




