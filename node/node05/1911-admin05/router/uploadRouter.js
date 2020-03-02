// 这个路由负责文件上传

const  express = require('express')
const  multer = require('multer')
const  fs = require('fs')
const  path = require('path')
const  upload = multer({})
const router = express.Router()

//这里参数写hehe回头postman表单的key处写hehe
router.post('/img',upload.single('hehe'),(req,res)=>{
  
  console.log(req.file)//下边的数据都是req.file对象内的参数，图片的信息
  let {buffer,mimetype,size} = req.file 
  // 判断尺寸 1.前端判断 2.后端判断

  if(size >= 200000){
    return res.send({err:-1,msg:'图片尺寸过大'})
  }

  // 限制文件类型 1.前端判断 2.后端判断
  let typs=['jpg','gif','png','jpeg']
  let extName = mimetype.split('/')[1]
  if(typs.indexOf(extName)===-1){
    return  res.send({err:-2,msg:'图片类型错误'})
  }

  // 将文件写到静态资源目录下
  let name= (new Date()).getTime()+`_`+parseInt(Math.random()*999999)
  fs.writeFile(path.join(__dirname,`../public/img/${name}.${extName}`),buffer,(err)=>{
    if(err){
      // http://localhost:3000/public/img/1581646169249_646178.jpeg
      res.send({err:-3,msg:'上传失败请重试'})
    }else{
      //上传成功后在postman输出框返回一个path，浏览器可通过localhost3000:此处填写复制过来的path路径
      res.send({err:0,msg:'上传成功',path:`/public/img/${name}.${extName}`})
    }
  })
})
module.exports = router