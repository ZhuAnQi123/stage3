
//网络请求都要在此文件做
import store from './store'
export default {
  // 添加方法
  addlist(msg){
    setTimeout(()=>{
      store.dispatch({
        type:'ADD_LIST',
        payload:msg
      })
    },1000)
  },
  dellist(index){
    store.dispatch({
      type:'DEL_LIST',
      payload:index
    })
  }
}