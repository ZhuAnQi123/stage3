

/* STEPS：
1.前端先请求自己的服务器
2.我方服务器发起服务器请求 ---(通过cors跨域)---请求目标服务器
3.将网路请求的结果返回给前端
使用axios（我是一个请求网址的东西） 发起服务器请求
*/

const express = require('express')//--我是express框架
const app = express()
const path = require('path')
const axios = require('axios')//------axios是基于promise用于向网址发请求的
const cors = require('cors')//-------我是用于跨域的
app.use(cors())//使用全局第三方中间件cors，放到起始位置，来实现跨域问题


//step1：第一个get--先给自己服务器发请求
app.get('/cors', (req, res) => {
  console.log('请求到了')//---到这一步，就是请求到了自己的服务器
 
  // step2:我方服务器发起服务器请求请求目标服务器
  let url = 'http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.2209329929181545'
  axios.get(url)
    .then((data) => {
      // step3:console.log(data.data)----这里data是一个对象装着一大堆东西，将请求的东西返回给前端
      res.send(data.data)
    })
})
app.listen(3000, () => {
  console.log('服务器启动')
})