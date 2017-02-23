import bills from '../../api/bills'
import * as types from '../mutations-types'
import { Indicator, MessageBox, Toast } from 'mint-ui'

const state = {
  orderInfo: {}
};

const getters = {
  orderInfo: state => state.orderInfo
};

const actions = {
  getOrderInfoById({commit}, data){
    Indicator.open()
    bills.getOrderInfoById(data)
      .then(response => {
        Indicator.close()
        let res = response.data
        if(res.errCode === '000000'){
          commit(types.GET_ORDER_INFO_SUCCESS, res.data)
        }else{
          commit(types.GET_ORDER_INFO_FAIL, { errMsg: res.result })
        }
      })
      .catch(err => {
        Indicator.close()
        commit(types.GET_ORDER_INFO_FAIL, { errMsg: err })
      })
  }
};

const mutations = {
  [types.GET_ORDER_INFO_SUCCESS](state, orderInfo){
    state.orderInfo = orderInfo
  },
  [types.GET_ORDER_INFO_FAIL](state, { errMsg }){
    MessageBox.alert(errMsg)
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}




