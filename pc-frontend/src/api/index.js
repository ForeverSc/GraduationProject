import { fileService } from '../util/axios'

export default {
  uploadFile(data){
    return fileService.post('/uploadFile', data || {})
  }
}
