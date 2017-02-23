import { httpService } from '../util/axios'

export default {
  order(data){
    return httpService.post('/bills/order', data || {})
  },
  getOrderListByUsername(data){
    return httpService.post('/bills/getOrderListByUsername', data || {})
  }
}
