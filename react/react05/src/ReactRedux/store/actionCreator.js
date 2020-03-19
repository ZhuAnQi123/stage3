import  {CHANGE_NAME,CHANGE_AGE}from './actionType'
export default {
  //之前的写法
  // changename(){
  //   let action={
  //     type:CHANGE_NAME,
  //     payload:'李雷雷'
  //   }
  //   Store.dispatch(action)
  // }

  //引用react-redux的写法：[CHANGE_NAME]是为了取出常量
  [CHANGE_NAME](){
    let action={
      type:CHANGE_NAME,
      payload:'李雷雷'
    }
    return action
  },
  [CHANGE_AGE](){
    let action={
      type:CHANGE_AGE,
      payload:88
    }
    return action
  }
}