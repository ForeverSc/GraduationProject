import * as types from './mutations-types'
import { MessageBox, Loading, Message } from 'element-ui'

export default {
  [types.UPLOAD_FILE_SUCCESS](state, data){

  },
  [types.UPLOAD_FILE_FAIL](state, {errMsg}){
    MessageBox.alert(errMsg)
  }
}
