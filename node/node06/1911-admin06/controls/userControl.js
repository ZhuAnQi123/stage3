
//文件作用：1.注册：查找用户名是否存在，存在就返回‘邮箱已注册’，不存在执行注册
//         2.登录：查看是否与数据库存入用户名密码匹配

const UserModel = require("../db/model/userModel")
let userReg = async (mail,pass)=>{
//  1. 邮箱是否重复
let isExst = await UserModel.findOne({mail})
let result
if(isExst){
  throw '邮箱已注册'
}else{
  result = await UserModel.insertMany({mail,pass})
}
//  2. 插入数据库，下面这个return不在都行，为代码规范
return result
}

// 用户登录
let userLogin = async (mail,pass)=>{
  let result = await UserModel.findOne({mail,pass})
  if(result){
    return result
  }else{
    throw '用户名或密码不存在'
  }
}
module.exports={
  userReg,
  userLogin
}