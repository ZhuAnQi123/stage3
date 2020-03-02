/*
创建文件夹 mkdir
删除文件夹 rmdir
修改文件夹 rename
读取文件夹 readdir
*/

// 001.引入文件相关的模块
//【1】异步的方式
const fs = require('fs')
// console.log(1)
// //在此目录下创建一个叫 hehe的文件夹
// fs.mkdir('./hehe',(err)=>{
//   console.log(2)//打印顺序为 1 3 2 创建完后打印null目录下会多一个文件夹。
// })
// console.log(3)

//【2】同步的方式
// let result = fs.mkdirSync('./haha')
// console.log(result)


//002.删除文件夹
fs.rmdir('./hehe',(err)=>{
  if(err){ console.log('删除失败')}
  else{console.log('删除成功')}
})
let reuslt  = fs.rmdirSync('./test')
console.log(reuslt)


//003.重命名文件夹
// fs.rename('./xixi','./demo',(err)=>{
//   console.log(err)
// })
// fs.readdir('./',(err,infos)=>{
//   // err 读取状态  infos 读取到的内容
//   console.log(err,infos)
// })