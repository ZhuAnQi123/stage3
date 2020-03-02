
const express = require('express')//---我是框架
const app = express()

/*跨域资源共享(CORS) 内置中间件，当一个资源从与该资源本身所在的服务器不同的域、
协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。 */
const cors = require('cors')
app.use(cors())

// 使用用户路由
let userRouter = require('./router/userRouter') //引入路由文件
let foodRouter = require('./router/foodRouter')
app.use('/user',userRouter)
app.use('/food',foodRouter)

//下面没有使用用户路由
// app.get('/user/login',(req,res)=>{
//   res.send('这里是登录')
// })

// app.get('/user/reg',(req,res)=>{
//   res.send('这里是注册')
// })

// 添加食品
// app.get('/food/add',(req,res)=>{
//   res.send('食品添加')
// })
// // 删除食品
// app.get('/food/del',(req,res)=>{
//   res.send('删除添加')
// })
http://localhost:3000/hehe/xixi/login
app.listen(3000,()=>{
  console.log('服务器启动')
})