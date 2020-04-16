import axios from '../utils/axios'
class Upload {
  getImg(payload){
    let url ='/mall/upload'
    return axios.post(url,payload)
  }
}

export default new Upload()