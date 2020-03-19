import state from './state'//数据存放文件
export default(prevState = state , actions )=>{
 let newData = prevState 
 //type是一定要的参数

//?payload是由actionCreater传入的参数

 let  {type,payload} = actions
//  修改数据
switch (type) {
  case 'ADD_LIST':
     newData.list.push({msg:payload,finish:false})
    break;
  case  "DEL_LIST":
     newData.list.splice(payload,1)
    break;
  default:
    break;
}
 return newData
}