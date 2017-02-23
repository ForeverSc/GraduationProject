import { httpService } from '../util/axios'

export default {
  order(data){
    return httpService.post('/bills/order', data || {})
  }
}
