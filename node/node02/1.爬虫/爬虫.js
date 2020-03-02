/*
将去哪网首页的图片爬到本地
1. 先获取到去哪网的网址  https://www.qunar.com/
2. 将网址下载到本地 http https
3. 分析网址里的内容 图片链接
4. 根据图片链接 下载图片到本地
   xx.html 
   xx.jpg
   xxx.txt
   xxx.doc
   xxx.mp3
*/
// 通过http模块发起网路请求
const https = require('https')
const fs = require('fs')
const cheerio = require("cheerio")
let url = 'https://www.qunar.com/'
https.get(url, (res) => {
  //下边是请求成功的回调。   其中res：请求的返回结果对象
  const { statusCode } = res;       //结构方法获取res中的状态码statusCode
  const contentType = res.headers['content-type'];//类型contentType
  console.log(statusCode, contentType)//这两个要用到时打印  否则不用
  let rawData = ''
  res.on('data', (chunk) => {   // 监听数据改变 --当一个数据片段chunk传递完毕后触发
    rawData += chunk          // 将每一段数据进行拼接    
  })

  res.on('end', () => {        // 数据传输结束 所有数据传输完毕后触发
    //爬虫获取目标文件👇
    // fs.writeFile('./quna.html',rawData,(err)=>{
    //   if(err){
    //     console.log('下载失败哦')
    //   }else{
    //     console.log('下载ok')
    //   }
    // })
    // 用爬虫爬目标文件【中的图片】👇   使用cheerio 分析数据内容
    const $ = cheerio.load(rawData)
    $('img').each((index, el) => {
      console.log('图片' + index)
      console.log($(el).attr('src'))
    })
  })
}).on('error', (e) => {
  // 监听请求的错误
  console.error(`Got error: ${e.message}`);
});

/*
数据的解构
let obj={us:123,ps:456}
let us=obj.us
let ps=obj.ps
let {ps} = obj
*/