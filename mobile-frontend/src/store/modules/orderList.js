import bills from '../../api/bills'
import * as types from '../mutations-types'
import { Indicator, MessageBox, Toast } from 'mint-ui'


const state = {
  orderList: []
};

const getters = {
  orderList: state => {
    state.orderList.forEach(function(order, index, array){
      switch (order.state){
        case 0 : order.stateText = '待接单'; break;
        case 1 : order.stateText = '已接单，制作配送中'; break;
        case 2 : order.stateText = '已完成'; break;
        case 3 : order.stateText = '未完成'; break;
        default: break;
      }
    });
    return state.orderList
  }
};

const actions = {
  getOrderListByUsername({commit}, data){
    Indicator.open()
    bills.getOrderListByUsername(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_ORDER_LIST_SUCCESS, res.data)
        }else{
          commit(types.GET_ORDER_LIST_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.GET_ORDER_LIST_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.GET_ORDER_LIST_SUCCESS](state, orderList){
    state.orderList = orderList
  },
  [types.GET_ORDER_LIST_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}




