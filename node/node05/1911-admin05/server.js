const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//启动服务器的时候同时启动数据库
const db = require('./db/connect')

//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//静态资源路径
app.use('/public', express.static(path.join(__dirname, './public')))

/*
  路由引入文件上传的路由uploadRouter上传图片的路由，foodRouter对事物列表增删改查的路由
*/
let uploadRouter = require('./router/uploadRouter')
let foodRouter = require('./router/foodRouter')
app.use('/admin/food', foodRouter)//这边写的/admin/food回头打开postman路径也要加上/admin/food
app.use('/admin/upload', uploadRouter)
app.listen(3000, () => {
  console.log(`/**
  *　　　　　　　 ┏┓　 ┏┓+ +
  *　　　　　　　┏┛┻━━━┛┻┓ + +
  *　　　　　　　┃　　　　　　┃ 　
  *　　　　　　　┃　　　━　　 ┃ ++ + + +
  *　　　　　　 ████━████  ┃+
  *　　　　　　　┃　　　　　　　┃ +
  *　　　　　　　┃　　　┻　　　┃
  *　　　　　　　┃　　　　　　┃ + +
  *　　　　　　　┗━┓　　　┏━┛
  *　　　　　　　　 ┃　　　┃　　　　　　　　　　　
  *　　　　　　　　 ┃　　　┃ + + + +
  *　　　　　　　　 ┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
  *　　　　　　　　 ┃　　　┃ + 　　　　神兽保佑,代码无bug　　
  *　　　　　　　　 ┃　　　┃
  *　　　　　　　　 ┃　　　┃　　+　　　　　　　　　
  *　　　　　　　　 ┃　 　 ┗━━━┓ + +
  *　　　　　　　　 ┃ 　　　　   ┣┓
  *　　　　　　　　 ┃ 　　　　　 ┏┛
  *　　　　　　　　 ┗┓┓┏━┳┓┏┛ + + + +
  *　　　　　　　　  ┃┫┫ ┃┫┫
  *　　　　　　　　  ┗┻┛ ┗┻┛+ + + +
  */`)
})