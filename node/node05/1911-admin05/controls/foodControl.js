

// 将数据库相关的操作抽离处理
const FoodModel = require('../db/model/foodModel')
// 插入食品
let insertFood = async (obj)=>{
  // 调用数据模型插入方法
  let result = await FoodModel.insertMany(obj)
  return result
}
// 查询全部菜品
let findFood  = async ()=>{
  let result = await FoodModel.find()
  return result
}
// 删除菜品 
let delFood = async (_id)=>{
    // _id 就是要删除的菜品主键id
   let result = await FoodModel.deleteOne({_id})
   return result
}
// 修改数据
let updateFood = async (_id,updateInfo)=>{
  // _id 要修改的主键id  updateInfo 修改的目标数据
  let result = await FoodModel.updateOne({_id},updateInfo)
  return  result
}
// 分页查询
let findFoodByPage = async (page,pageSize)=>{
  //所有数据
  let  allFood = await FoodModel.find() 
  // 总数据条数
  let  allCount = allFood.length
  // 每一页的数据
  let result =await FoodModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}
//  分类查询
let  findFoodByType = async (foodType) =>{
  let result = await FoodModel.find({foodType})
  return result
}
// 关键字查询
let findFoodByKw = async (kw)=>{
  // 通过正则表达式匹配关键字
  let regex = new RegExp(kw)
  let result =await  FoodModel.find({$or:[{desc:{$regex:regex}},{name:{$regex:regex}}] })
  return  result
}
module.exports={
  findFoodByKw,
  findFoodByType,
  findFoodByPage,
  insertFood,
  findFood,
  delFood,
  updateFood}