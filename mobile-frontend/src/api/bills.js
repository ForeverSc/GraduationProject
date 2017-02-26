import { httpService } from '../util/axios'

export default {
  order(data){
    return httpService.post('/bills/order', data || {})
  },
  getOrderListByUsername(data){
    return httpService.post('/bills/getOrderListByUsername', data || {})
  },
  getOrderInfoById(data){
    return httpService.post('/bills/getOrderInfoById', data || {})
  },
  ensureReceived(data){
    return httpService.post('/bills/ensureReceived', data || {})
  },
  cancelOrder(data){
    return httpService.post('/bills/cancelOrder', data || {})
  }
}

