import bills from '../../api/bills'
import * as types from '../mutations-types'
import { Indicator, MessageBox, Toast } from 'mint-ui'
import router from '../../router'

const state = {
  orderList: []
};

const getters = {
  orderList: state => state.orderList
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




