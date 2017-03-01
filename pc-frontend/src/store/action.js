import index from '../api/index'
import * as types from './mutations-types'
import { MessageBox, Loading, Message } from 'element-ui'

export default {
  uploadFile({commit}, data){
    let loading = Loading.service()
    index.uploadFile(data).then(response=>{
      loading.close()
      let res = response.data
      if(res.errCode === '000000'){
        commit(types.UPLOAD_FILE_SUCCESS, res.data)
      }else{
        commit(types.UPLOAD_FILE_FAIL, { errMsg: res.result })
      }
    }).catch(err=>{
      loading.close()
    })
  }
}
