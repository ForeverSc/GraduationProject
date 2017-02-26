import bills from '../../api/bills'
import * as types from '../mutations-types'
import {Indicator, MessageBox, Toast} from 'mint-ui'

const state = {
  orderInfo: {}
};

const getters = {
  orderInfo: state => {
    switch (state.orderInfo.state) {
      case 0 :
        state.orderInfo.stateText = '待接单';
        break;
      case 1 :
        state.orderInfo.stateText = '已接单，制作配送中';
        break;
      case 2 :
        state.orderInfo.stateText = '已完成';
        break;
      case 3 :
        state.orderInfo.stateText = '未完成';
        break;
      default:
        break;
    }
    return state.orderInfo;
  }
};

const actions = {
  getOrderInfoById({commit}, data){
    Indicator.open()
    bills.getOrderInfoById(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if (res.errCode === '000000') {
          commit(types.GET_ORDER_INFO_SUCCESS, res.data)
        } else {
          commit(types.GET_ORDER_INFO_FAIL, {errMsg: res.result})
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.GET_ORDER_INFO_FAIL, {errMsg: err})
      })
  },
  ensureReceived({commit}, data){
    Indicator.open()
    bills.ensureReceived(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if (res.errCode === '000000') {
          commit(types.ENSURE_RECEIVED_ORDER_SUCCESS)
        } else {
          commit(types.ENSURE_RECEIVED_ORDER_FAIL, {errMsg: res.result})
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.ENSURE_RECEIVED_ORDER_FAIL, {errMsg: err})
      })
  },
  cancelOrder({commit}, data){
    Indicator.open()
    bills.cancelOrder(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if (res.errCode === '000000') {
          commit(types.CANCEL_ORDER_SUCCESS)
        } else {
          commit(types.CANCEL_ORDER_FAIL, {errMsg: res.result})
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.CANCEL_ORDER_FAIL, {errMsg: err})
      })
  },
};

const mutations = {
  [types.GET_ORDER_INFO_SUCCESS](state, orderInfo){
    state.orderInfo = orderInfo
  },
  [types.GET_ORDER_INFO_FAIL](state, {errMsg}){
    MessageBox.alert(errMsg)
  },
  [types.ENSURE_RECEIVED_ORDER_SUCCESS](state){
    Toast({
      message: '确认收货成功！'
    })
  },
  [types.ENSURE_RECEIVED_ORDER_FAIL](state, {errMsg}){
    MessageBox.alert(errMsg)
  },
  [types.CANCEL_ORDER_SUCCESS](state){
    Toast({
      message: '取消订单成功！'
    })
  },
  [types.CANCEL_ORDER_FAIL](state, {errMsg}){
    MessageBox.alert(errMsg)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}




