// 作业2：用node 写一个注册登录的接口 和发送邮件功能关联
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json数据格式
app.use(bodyParser.json())
// 1.接受前端数据 req(包含前端传递的数据)
// 2.处理数据
// 3.返回结果 res response的缩写 给前端返回结果
// 4.返回数据格式 json 至少包含2-3个字段  错误码 错误信息 数据

app.get('/logIn', (req, res) => {
    let { userName, passWord } = req.query //req.query拿前端穿的数据
    if (userName === 'anqi' && passWord === '123') {
        res.send({ err: 0, msg: '登录ok' })
    } else {
        res.send({ err: -1, msg: '登录失败' })
    }
})

app.post('/reg', (req, res) => {
    //接受post数据并且用第三方模块body-parser协助解析
    let { userName, passWord } = req.body
    res.send({ err: 0, msg: '注册ok' })
})

// 监听3000端口号启动一个node服务器
// 本地服务器 域名 http://localhost:3000/login
app.listen(3000, () => {
    console.log('服务器启动')
})