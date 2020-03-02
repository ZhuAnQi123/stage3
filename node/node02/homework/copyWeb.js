// 作业1.爬取一个网站 并且将图片下载到本地
// 001.网址https://music.163.com/
// 002.网址下载到本地
const https = require('https')
const fs = require('fs')
const cheerio = require("cheerio")
let url = 'https://music.163.com/'
https.get(url, (res) => {
    //请求成功回调
    let rawData = ''
    res.on('data', (chunk) => {
        //监听数据改变
        rawData += chunk;
    })
    res.on('end', () => {
        // 监听数据加载完成
        fs.writeFile('./网易云.html', rawData, (err) => {
            if (err) {
                console.log('fail to download');
            } else {
                console.log('successfully download');
            }
        })
        const $ = cheerio.load(rawData)

        //怎么用writeFile创建一张图片？
        fs.writeFile('./wangYi.png', $('img').eq(0).attr('src'), 'binary', (err) => {
            console.log(err)
        })

    })
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
})

