






//路由其实就是将一个js文件代码分写到其他地方去，让主页面更为简洁的玩意




const express = require('express')
const router = express.Router()

router.get('/add',(req,res)=>{
  res.send('食品添加')
})
// 删除食品
router.get('/del',(req,res)=>{
  res.send('删除添加')
})


module.exports = router


