const  express = require('express')
const app = express()
//安装  npm install ejs
// 要使用ejs的模板引擎默认指定文件叫views
app.set('view engine','ejs')
//第一个参数写‘/text’回头就在localhost：3000/text下打开
app.get('/test',(req,res)=>{
  // 渲染一个模板引擎文件👇
  res.render('hehe',{name:'王一',age:'15'})
})
app.listen(3000,()=>{
  console.log('servet start')
})