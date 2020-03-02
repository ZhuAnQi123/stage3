Node课程笔记

## Node 简介

### 客户端的JavaScript是怎样的

- 什么是 JavaScript？
  +是一个脚本语言
  +运行在浏览器（浏览器的js解析内核  v8）
  +实现用户的交互 （interactive）
  + 变量  赋值   循环 逻辑 判断 分支 对象   函数。。。。
  + dom 操作
  + bom 操作
  + ajax 
- JavaScript 的运行环境？
  +浏览器内核解析内核   es6  

- 浏览器中的 JavaScript 可以做什么？


- 浏览器中的 JavaScript 不可以做什么？（不安全）
  +访问数据库
  +不能对文件进行操作    
  +对os 进行操作
  +原因 是不安全  和浏览器运行机制有关
- 在开发人员能力相同的情况下编程语言的能力取决于什么？

  +cordova hbuilder    平台  platform
  +java   java虚拟机        （运行平台）
  +php    php虚拟机
  +c#     .net framework   mono
  +js     解析内核  chrome v8 
- JavaScript 只可以运行在浏览器中吗？
  +不是

### 为什么是JavaScript
+ node js 不是因为js 产生的
+ node 选择了js
+ Ryan dahl
+ 2009  2 月份 node有想法
+ 2009  5 月份 githup 开源
+ 2009  11月份  jsconf  讲解推广node
+ 2010年底    被xxx公司收购
+ 2018  发布有重大bug
+ npm 
+ githup 世界上最大的同性交友网站   码云  

### what is node ？

- Node.js 是一个基于Chrome V8 引擎的JavaScript运行环境
- Node.js使用了一个事件驱动、非阻塞式I/O的模型,使其轻量又高效
- Node.js的包管理工具npm,是全球最大的开源库生态系统
- 官网 http://nodejs.cn/
- npm  插件官网：https://www.npmjs.com/

## 环境配置

### Node的安装

- 安装包安装
    + 官网下载对应的安装包
    + 一路next
- nvm安装(有一个类似的工具：n)
    + Node Version Manager（Node版本管理工具）
    
    + 由于以后的开发工作可能会在多个Node版本中测试，而且Node的版本也比较多，所以需要这么款工具来管理
    
    + [下载地址](https://github.com/coreybutler/nvm-windows/releases)
    
      ```
      基本命令
      nvm -v 查看版本号
      nvm list 查看列表
      nvm install 版本号  安装node
      nvm uninstall 版本号  卸载node
      ```
    
      
    
      
### 相关版本

- node版本常识  
  + 偶数版本为稳定版  （0.6.x ，0.8.x ，0.10.x）
  + 奇数版本为非稳定版（0.7.x ，0.9.x ，0.11.x）
  + LTS（Long Term Support）
  + [LTS和Current区别](https://blog.csdn.net/u012532033/article/details/73332099)
- 操作方式：
  + 重新下载最新的安装包；
  + 覆盖安装即可；
- 问题：
  + 以前版本安装的很多全局的工具包需要重新安装
  + 无法回滚到之前的版本
  + 无法在多个版本之间切换（很多时候我们要使用特定版本）

### Windows下常用的命令行操作

- 切换当前目录（change directory）：cd
- 创建目录（make directory）：mkdir
- 查看当前目录列表（directory）：dir
  + 别名：ls（list）
- 清空当前控制台：cls
  + 别名：clear
- 删除文件：del
  + 别名：rm

> 注意：所有别名必须在新版本的 PowerShell （linux系统）中使用

### 常见问题
- Python环境丢失
 + Node中有些第三方的包是以C/C++源码的方式发布的，需要安装后编译,确保全局环境中可以使用python命令,python 版本推荐2.7.0
- 环境变量丢失
 + 部分电脑安装完毕之后没有环境变量需要手动配置
 + Windows中环境变量分为系统变量和用户变量
 + 环境变量的变量名是不区分大小写的
 + PATH 变量：只要添加到 PATH 变量中的路径，都可以在任何目录下
 + 目的可以在任何地方调起node命令

 >
##模块,包 commonjs

### commonjs规范

前端模块化：AMD,CMD,Commonjs

Node 应用由模块组成，采用 CommonJS 模块规范。

##### 定义module

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

##### 暴露接口

 CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

 ```javascript
 	var x = 5;
	var addX = function (value) {
	  return value + x;
	};
	module.exports.x = x;
	module.exports.addX = addX;
 ```
##### 引用

 require方法用于加载模块。

 ```
 	var example = require('./example.js');
	console.log(example.x); // 5
	console.log(example.addX(1)); // 6
 ```
### 模块的分类

* 内置模块
```
	const process = require('process')
	const path = require('path')
	console.log(process.version)
	console.log(path.resolve('../'))
```
* 第三方模块
```
    const request=require("request");
	console.log(request)
	request.get('http://api.douban.com/v2/movie/in_theaters', (err, response, body) => {
	  if (!err) {
	    // console.log(body);
	    console.log(JSON.parse(body))
	  } else {
	    console.log(err);
	  }
	})
```
* 自定义模块

###npm 使用入门

 官网:[https://www.npmjs.com/](https://www.npmjs.com/)

 安装：无需安装

 查看当前版本：

 ```
 $ npm -v
 ```

 更新：

 ```
 $ npm install npm@latest -g

 ```
 初始化工程

 ```
 $ npm init

 $ npm init --yes 默认配置
 ```

 安装包

 使用npm install会读取package.json文件来安装模块。安装的模块分为两类
 dependencies和devDependencies，分别对应生产环境需要的安装包和开发环境需要的安装包。

 ```
 $ npm install

 $ npm install <package_name> 

 $ npm install <package_name> --save

 $ npm install <package_name> --save-dev
 ```
 更新模块

 ```
 $ npm update
 ```
 卸载模块

 ```
 $ npm uninstall <package_name>

 $ npm uninstall --save lodash
 ```

配置npm源

* 临时使用, 安装包的时候通过--registry参数即可

  	$ npm install express --registry https://registry.npm.taobao.org

* 全局使用
	```
	  $ npm config set registry https://registry.npm.taobao.org
	  // 配置后可通过下面方式来验证是否成功
	  npm config get registry
	  // 或
	  npm info express
	```

* cnpm 使用
    ```
    	 // 安装cnpm
		  npm install -g cnpm --registry=https://registry.npm.taobao.org

		  // 使用cnpm安装包
		  cnpm install express
    ```

>

### 常用的内置模块

node 常用内置api  

(1) URL 网址解析
    解析URL相关网址信息
    url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
    url.format(urlObject)
    url.resolve(from, to)
(2) QueryString 参数处理
    querystring.escape(str)
    querystring.unescape(str)
    querystring.parse(str[, sep[, eq[, options]]])
    querystring.stringify(obj[, sep[, eq[, options]]])
(3) HTTP 模块概要
	http.createServer([options][, requestListener])
	http.get(options[, callback])
	简易的爬虫
    代理跨域处理
(4) 事件 events 模块
(5) 文件fs模块
    打印目录树
(6) Stream 流模块 
    歌词播放
    音乐下载
(8) request 方法


2、Node.js 基础应用
1、应用 HTTP 模块编写一个小爬虫工具
(1) 利用爬虫获取“拉勾网”首页列表数据 
(2) 通过 npm 安装 cheerio 模块获得数据
2、后端表单的提交
要求:
(1) 应用 request post 模拟提交表单

### 文件读取

Node中文件读取的方式主要有：

> fs.readFile(file[, options], callback(error, data))

```javascript
fs.readFile('c:\\demo\1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

> fs.readFileSync(file[, options])

```javascript
try {
  //readFileSync为同步处理读取文件，必须采用 try catch方法
  const data = fs.readFileSync('c:\\demo\1.txt', 'utf8');
  console.log(data);
} catch(e) {
  // 文件不存在，或者权限错误----throw将错误抛出去
  throw e;
}
```

> fs.createReadStream(path[, options])

```javascript
const stream = fs.createReadStream('c:\\demo\1.txt');
let data = ''
stream.on('data', (trunk) => {
  data += trunk;  //trunk是每一次传输的一部分
});
stream.on('end', () => {  //加载完成
  console.log(data);
});
```

> *由于Windows平台下默认文件编码是GBK，在Node中不支持，可以通过[iconv-lite](https://github.com/ashtuchkin/iconv-lite)解决*


### Readline模块【逐行读取】文本内容

```javascript
const readline = require('readline');
const fs = require('fs');

  /* 👇 readline.Interface 👇类的实例是使用 readline.createInterface() 方法构造的。 
  每个实例都关联一个 input 可读流和一个 output 可写流。 
  output 流用于为到达的用户输入打印提示，并从 input 流读取。*/
const rl = readline.createInterface({
  input: fs.createReadStream('sample.txt')
});

rl.on('line', (line) => { //line事件--取读文件每一行
  console.log('Line from file:', line);
});
```


### 文件写入

Node中文件写入的方式主要有：

> fs.writeFile(file, data[, options], callback(error))

```javascript
fs.writeFile('c:\\demo\a.txt', new Date(), (error) => {
  console.log(error);
});
```

> fs.writeFileSync(file, data[, options])

```javascript
try {
  fs.writeFileSync('c:\\demo\a.txt', new Date());
} catch (error) {
  // 文件夹不存在，或者权限错误
  console.log(error);
}
```

> fs.createWriteStream(path[,option])

```javascript
var streamWriter = fs.createWriteStream('c:\\demo\a.txt');
setInterval(() => {
  streamWriter.write(`${new Date}\n`, (error) => {
    console.log(error);
  });
}, 1000);
```
###node中的异步操作


- fs模块对文件的几乎所有操作都有同步和异步两种形式
- 例如：readFile() 和 readFileSync()---分别为异步/同步
- 区别：
  + 同步调用会阻塞代码的执行，异步则不会
  + 异步调用会将读取任务下达到任务队列，直到任务执行完成才会回调
  + 异常处理方面，同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数

```javascript
console.time('sync');
try {
  var data = fs.readFileSync(path.join('C:\\Users\\iceStone\\Downloads', 'H.mp4'));
  // console.log(data);
} catch (error) {
  throw error;
}
console.timeEnd('sync');

console.time('async');
fs.readFile(path.join('C:\\Users\\iceStone\\Downloads', 'H.mp4'), (error, data) => {
  if (error) throw error;
  // console.log(data);
});
console.timeEnd('async');
```
#####  promise 对象的使用

参考资料：[JavaScript  Promise迷你书](http://liubin.org/promises-book/#what-is-promise)

* what is Promise *
Promise是抽象异步处理对象以及对其进行各种操作的组件。Promise并不是从JavaScript中发祥的概念。
Promise最初被提出是在 E语言中， 它是基于并列/并行处理设计的一种编程语言。
现在JavaScript也拥有了这种特性，这就是JavaScript Promise

使用了回调函数的异步处理

```javascript

----
getAsync("fileA.txt", function(error, result){
    if(error){// 取得失败时的处理
        throw error;
    }
    // 取得成功时的处理
});
----
<1> 传给回调函数的参数为(error对象， 执行结果)错误优先处理
```

使用了回调函数的异步处理

```javascript
----
var promise = getAsyncPromise("fileA.txt"); 
promise.then(function(result){
    // 获取文件内容成功时的处理
}).catch(function(error){
    // 获取文件内容失败时的处理--只用写一次，所有失败的都会传过来
});
----
<1> 返回promise对象
```

* 创建Promise对象 *

```
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
    resolve('成功处理')
    reject('错误处理')
});
```
* 使用实例 *

1. 创建一个priomise 对象并返回`new Promise(fn)`
2. 在fn 中指定异步等处理
	* 处理结果正常---调用`resolve(处理结果值)`
	* 处理结果错误---调用 `reject(Error对象)`

```javascript
function asyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 16);
    });
}

asyncFunction().then(function (value) {
    console.log(value);    // => 'Async Hello world'
}).catch(function (error) {
    console.log(error);
});
```

* Promise的状态

用new Promise 实例化的promise对象有以下三个状态。

* **"has-resolution" - Fulfilled**   resolve(成功)时。

* **"has-rejection" - Rejected**     reject(失败)时

* **"unresolved" - Pending**   既不是resolve也不是reject的状态。也就是promise对象刚被创建后的初始化状态等

promise对象的状态，从Pending转换为Fulfilled或Rejected之后， 这个promise对象的状态就不会再发生任何变化。

也就是说，Promise与Event等不同，在.then 后执行的函数可以肯定地说只会被调用一次。

另外，Fulfilled和Rejected这两个中的任一状态都可以表示为Settled(不变的)。

Settled
resolve(成功) 或 reject(失败)。

从Pending和Settled的对称关系来看，Promise状态的种类/迁移是非常简单易懂的。

当promise的对象状态发生变化时，用.then 来定义只会被调用一次的函数。

### 路径模块

在文件操作的过程中，都必须使用物理路径（绝对路径），path模块提供了一系列与路径相关的 API

```javascript
console.log('join用于拼接多个路径部分，并转化为正常格式');
const temp = path.join(__dirname, '..', 'lyrics', './友谊之光.lrc');
console.log(temp);

console.log('获取路径中的文件名');
console.log(path.basename(temp));

console.log('获取路径中的文件名并排除扩展名');
console.log(path.basename(temp, '.lrc'));

console.log('====================================');

console.log('获取不同操作系统的路径分隔符');
console.log(process.platform + '的分隔符为 ' + path.delimiter);

console.log('一般用于分割环境变量');
console.log(process.env.PATH.split(path.delimiter));

console.log('====================================');

console.log('获取一个路径中的目录部分');
console.log(path.dirname(temp));

console.log('====================================');

console.log('获取一个路径中最后的扩展名');
console.log(path.extname(temp));

console.log('====================================');

console.log('将一个路径解析成一个对象的形式');
const pathObject = path.parse(temp);
console.log(pathObject);

console.log('====================================');

console.log('将一个路径对象再转换为一个字符串的形式');
// pathObject.name = '我终于失去了你';
pathObject.base = '我终于失去了你.lrc';
console.log(pathObject);

console.log(path.format(pathObject));

console.log('====================================');

console.log('获取一个路径是不是绝对路径');
console.log(path.isAbsolute(temp));
console.log(path.isAbsolute('../lyrics/爱的代价.lrc'));

console.log('====================================');

console.log('将一个路径转换为当前系统默认的标准格式，并解析其中的./和../');
console.log(path.normalize('c:/develop/demo\\hello/../world/./a.txt'));

console.log('====================================');

console.log('获取第二个路径相对第一个路径的相对路径');
console.log(path.relative(__dirname, temp));

console.log('====================================');

console.log('以类似命令行cd命令的方式拼接路径');
console.log(path.resolve(temp, 'c:/', './develop', '../application'));

console.log('====================================');

console.log('获取不同平台中路径的分隔符（默认）');
console.log(path.sep);

console.log('====================================');

console.log('允许在任意平台下以WIN32的方法调用PATH对象');
// console.log(path.win32);
console.log(path === path.win32);

console.log('====================================');

console.log('允许在任意平台下以POSIX的方法调用PATH对象');
console.log(path === path.posix);
```

### express 

---

官网:[http://www.expressjs.com.cn/](http://www.expressjs.com.cn/)


#### express 环境搭建

安装

```bash
	$ npm install express --save
```

快速开始

```javascript
	const express = require('express')
    const app = express()
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

#### express 路由配置


```javascript
let express=require('express')
let router=express.Router()
// 该路由使用的中间件
router.use((req,res,next)=>{
	 next()
});
// 定义网站主页的路由
router.post('/addFood', function(req, res) {
	console.log('hahaha')
  // res.send('这里是admin的登录');
});
// 定义 about 页面的路由
router.post('/regist', function(req, res) {
  res.send('这里是admin的注册侧');
});

module.exports = router;

app.use('/admin',admin)
```

#### 传递数据的获取

	get
	req.query
	post
	req.body
	body-parser
	
	设置中文格式
	res.set('Content-Type','text/plain,charset=utf8')

#### 请求模拟工具 postman

#### 静态资源配置

```javascript

app.use(express.static('public'))

app.use('/static', express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')))

```

## mongod

### 安装配置
> 在`Mongodb`官网下载最新版本的[Mongodb下载地址](https://cloud.mongodb.com/)
> 
> 下载`msi`的`window`安装包，可以装到C盘或者D盘目录下
> 
> # 配置
> 由于我是安装在D盘的环境下
> 
> ```shell
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> ```
> 
> 所以在bin文件夹下找到mongod.exe命令，然后通过管理员执行`mongod --dbpath x路径x`，路径可以是任何地方，我这里选择在D盘的MongoDB目录下，当然路径不要包含特殊的字符串，比如`Program Files (x86)`也不行
> 
> ```shell
> mongod --dbpath D:\mongodb\data\db
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31977540-fc0a5a6e-b96f-11e7-9a2b-34d66d7241c4.png)
> 
> # 命令行
> 经过上面的配置之后，就可以返回bin目录下找到`mongo.exe`命令，并管理员下执行，就可以出现mongodb的命令行模式
> 
> ```shell
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31978099-57bce3ca-b972-11e7-88bd-30f5d68036ed.png)
> 
> 然后就可以使用下面的命令来测试了
>
### mongod
> ```js
> db.help()//帮助
> db.stats()//统计
> ```
> 
> # 显示数据库
> ```js
> show dbs
> ```
> 
> 检查当前选择的数据库
> 
> ```js
> db
> ```
> 
> # 添加数据库
> **数据库名**为数据库创建的名字，使用该命令后会默认切换到对应的数据库，并且在数据库中添加选项，数据库信息才显示，如果默认就有该数据库，那就是切换到对应的数据库里面
> 
> ```js
> use 数据库名
> ```
> 
> # 删除数据库
> 先切换到对应的数据库，然后再执行`db.dropDatabase()`删除该数据库
> 
> ```js
> use 数据库名
> //switched to db 数据库名
> db.dropDatabase()
> ```
> 
> # 显示集合
> 用一下命令可以检查创建的集合
> 
> ```js
> show collections
> ```
> 
> # 添加集合
> 在创建完数据库之后，我们就可以创建集合
> 
> ```js
> db.createCollection(集合名字name，设置参数options[对象类型])
> ```
> 
> **name**是要创建的集合的名称。 **options**是一个文档，用于指定集合的配置
> 
> 参数	类型	描述
> name	String	要创建的集合的名称
> options	Document	(可选)指定有关内存大小和索引的选项
> **options**参数是可选的，因此只需要指定集合的名称。 以下是可以使用的选项列表：
> 
> 字段	类型	描述
> capped	Boolean	(可选)如果为true，则启用封闭的集合。上限集合是固定大小的集合，它在达到其最大大小时自动覆盖其最旧的条目。 如果指定true，则还需要指定size参数。
> autoIndexId	Boolean	(可选)如果为true，则在_id字段上自动创建索引。默认值为false。
> size	数字	(可选)指定上限集合的最大大小(以字节为单位)。 如果capped为true，那么还需要指定此字段的值。
> max	数字	(可选)指定上限集合中允许的最大文档数。
> 由于**option**是可选，我们也可以不带配置项创建集合
> 
> ```js
> db.createCollection("mycollection")
> ```
> 
> # 删除集合
> `db.collection.drop()`用于从数据库中删除集合
> 
> ```js
> db.集合名.drop()
> ```
> 
> 比如我们可以测试以下操作
> 
> ```js
> db.createCollection("wscats")//创建名为wscats的集合
> show collections//显示该数据库所有集合   wscats
> db.wscats.drop()//删除名为wscats的集合
> ```
> 
> # 查看文档
> 最简单查看文档的方法就是`find()`，会检索集合中所有的文档结果
> 
> ```js
> db.集合名.find()
> ```
> 
> 要以格式化的方式显示结果，可以使用`pretty()`方法。
> 
> ```js
> db.集合名.find().pretty()
> ```
> 
> ## 1.固值寻找
> 寻找age集合里面所有含有属性值为wscats的文档结果，相当于`where name = 'wscats'`
> 
> ```js
> db.age.find({name:"wscats"})
> ```
> 
> ## 2.范值寻找
> 操作	语法	示例	等效语句
> 相等	{:}	`db.age.find({"name":"wscats"}).pretty()`	where name = 'wscats'
> 小于	{:{$lt:}}	`db.age.find({"likes":{$lt:50}}).pretty()`	where likes < 50
> 小于等于	{:{$lte:}}	`db.age.find({"likes":{$lte:50}}).pretty()`	where likes <= 50
> 大于	{:{$gt:}}	`db.age.find({"likes":{$gt:50}}).pretty()`	where likes > 50
> 大于等于	{:{$gte:}}	`db.age.find({"likes":{$gte:50}}).pretty()`	where likes >= 50
> 不等于	{:{$ne:}}	`db.age.find({"likes":{$ne:50}}).pretty()`	where likes != 50
> ## 3.AND和OR寻找
> ### AND
> 在find()方法中，如果通过使用`，`将它们分开传递多个键，则mongodb将其视为**AND**条件。 以下是AND的基本语法
> 
> 寻找`_id`为1并且`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $and: [
>          {"_id": 1}, {"name": "wscats"}
>       ]
>    }
> )
> ```
> 
> ### OR
> 在要根据OR条件查询文档，需要使用`$or`关键字。以下是OR条件的基本语法
> 
> 寻找`name`为corrine或者`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $or: [
>          {"name": "corrine"}, {“name“: "wscats"}
>       ]
>    }
> )
> ```
> 
> ### AND和OR等结合
> 相当于语句`where title = "wscats" OR ( title = "corrine" AND _id < 5)`
> 
> ```js
> db.age.find({
>   $or: [{
>     "title": "wscats"
>   }, {
>     $and: [{
>       "title": "corrine"
>     }, {
>       "_id": {
>         $lte: 5
>       }
>     }]
>   }]
> })
> ```
> 
> # 插入文档
> 文档的数据结构和JSON基本一样。
> 所有存储在集合中的数据都是BSON格式。
> BSON是一种类json的一种二进制形式的存储格式,简称**Binary JSON**。
> 
> 要将数据插入到mongodb集合中，需要使用mongodb的`insert()`或`save()`方法。
> 
> ```js
> db.集合名.insert(document)
> ```
> 
> 比如我们可以插入以下数据
> 
> ```js
> db.wscats.insert({
>    _id: 100,
>    title: 'MongoDB Tutorials', 
>    description: 'node_tutorials',
>    by: 'Oaoafly',
>    url: 'https://github.com/Wscats/node-tutorial',
>    tags: ['wscat','MongoDB', 'database', 'NoSQL','node'],
>    num: 100,
> })
> ```
> 
> 也可以支持插入多个，注意传入的是数组形式
> 
> ```js
> db.wscats.insert([{
>    _id: 100,
>    title: ‘Hello’
> },{
>    _id: 101,
>    title: ‘World’
> }])
> ```
> 
> 在插入的文档中，如果不指定_id参数，那么mongodb会为此文档分配一个唯一的ObjectId
> 要插入文档，也可以使用`db.post.save(document)`。如果不在文档中指定_id，那么`save()`方法将与`insert()`方法一样自动分配ID的值。如果指定_id，则将以save()方法的形式替换包含**_id**的文档的全部数据。
> 
> ```js
> db.wscats.save({
>    _id: 111,
>    title: 'Oaoafly Wscats', 
> })
> ```
> 
> # 更新文档
> ## 1.update()方法
> 寻找第一条title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> })
> ```
> 
> 默认情况下，mongodb只会更新一个文档。要更新多个文档，需要将参数`multi`设置为true，还可以配合find方法里面的各种复杂条件判断来筛选结果，然后更新多个文档
> 
> 寻找所有title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> }, {
>   multi: true
> })
> ```
> 
> ## 2.save()方法
> 将`_id`主键为3的文档，覆盖新的值，注意`_id`为必传
> 
> ```
> db.age.save({
>   '_id':3,
>   'title': 'wscats'
> })
> ```
> # 删除文档
> 删除主键`_id`为3的文档，默认是删除多条
> 
> ```js
> db.age.remove({
>   '_id':3
> })
> ```
> 
> 建议在执行`remove()`函数前先执行`find()`命令来判断执行的条件是否正确
> 
> 如果你只想删除第一条找到的记录可以设置**justOne**为1，如下所示
> 
> ```js
> db.age.remove({...},1)
> ```
> 
> 全部删除
> 
> ```js
> db.age.remove({})
> ```
> 
> # Limit与Skip方法
> ## Limit
> 如果你需要在mongodb中读取指定数量的数据记录，可以使用mongodb的Limit方法，`limit()`方法接受一个数字参数，该参数指定从mongodb中读取的记录条数。
> 
> ```js
> db.age.find().limit(数量)
> ```
> 
> ## Skip
> 我们除了可以使用`limit()`方法来读取指定数量的数据外，还可以使用`skip()`方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。
> 
> ```js
> db.age.find().limit(数量).skip(数量)
> //skip()方法默认值为0
> ```
> 
> 所以我们在实现分页的时候就可以用limit来限制每页多少条数据(一般固定一个值)，用skip来决定显示第几页(一个有规律变动的值)
> 
> # 排序
> 在mongodb中使用使用`sort()`方法对数据进行排序，`sort()`方法可以通过参数指定排序的字段，并使用1和-1来指定排序的方式，其中1为升序排列，而-1是用于降序排列。
> 
> 1	升序排列
> -1	降序排列
> ```js
> db.集合名.find().sort({键值(属性值):1})
> ```
> 
> 把`age`集合表重新根据`_id`主键进行降序排列
> 
> ```js
> db.age.find().sort({
>   "_id": -1
> })
> ```
> 
> # Node.js连接
> 安装mongodb的模块
> 
> ```js
> npm install mongodb
> ```
> 
> ## 1.连接数据库
> ```js
> var MongoClient = require('mongodb').MongoClient;
> //结尾是选择数据库名
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
> });
> ```
> 
> ## 2.查询数据
> 注意查询回来的结果需要toArray来遍历处理
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   //选中age集合，并用find方法把结果集拿回来进行处理
>   db.collection("age").find({title: "cba"}).toArray(function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     console.log(result);
>   });
> });
> ```
> 
> 经过测试，读取大于100条的时候会出现报错[官网解释](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/#cursor-batches)，可以尝试用`forEach`代替
> 
> ```js
> db.collection('pokemon').find({})
>   .forEach(function(item){
>       console.log(item)
>   })
> ```
> 
> ### 查询ID
> 查询自动生成的`ObjectId`
> 
> ```js
> var ObjectId = require('mongodb').ObjectId;
> let _id = ObjectId("5bcae50ed1f2c2f5e4e1a76a");
> db.collection('xxx').find({
>     "_id": _id
> }).forEach(function (item) {
>     console.log(item)
> })
> ```
> 
> ## 3.插入数据
> insert函数第一个参数是需要插入的值(可以一个也可以多个)，第二个参数是接受一个回调函数，当值插入成功后回返回插入值得一些关键信息，比如`_id`
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>	const db = client.db("demo");
>   db.collection("age").insert([
>     { 
>       title: "插入的值A"
>     }, {
>       title: "插入的值B"
>     }
>   ], function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     console.log(result)
>   })
> });
> ```
> 
> ## 4.更新数据
> 注意如果不加$set就是完全替换原来的那份(没有设置的属性值将会丢失)，加上$set则只是更新对应的属性值，其余不做改变
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   db.collection("age").update({
>     "_id": 1
>   }, {
>     $set: {
>       title: "你好，世界",
>       skill: "js"
>     }
>   }, function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     //console.log(result);
>   });
> });
> ```
> 
> ## 5.删除数据
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   db.collection("age").remove({
>     "_id": 1
>   }, function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     //console.log(result);
>     //关闭数据库
>     db.close();
>   });
> });
> ```
> 
> ## 6.关闭数据库
> ```js
> db.close();
> ```
> 
> # 封装自定义模块
> 新建`mongo.js`写入以下代码，封装自定义模块，方便其他路由复用，注意`assert`是node自带的断言模块，用于测试代码
> 
> 参考
> 
> * [官网API文档](http://nodejs.cn/api/assert.html)
> * [Node.js的断言模块assert进行单元测试](https://www.cnblogs.com/hong7zai/p/5909914.html)
> 
> ```js
> const MongoClient = require('mongodb').MongoClient;
> const assert = require('assert');
> const url = 'mongodb://localhost:27017';
> const dbName = 'shop';
> function query(callback) {
> 	MongoClient.connect(url, function(err, client) {
> 		assert.equal(null, err);
> 		console.log("Connected successfully to server");
> 		const db = client.db(dbName);
> 		callback(db);
> 		client.close();
> 	});
> }
> module.exports = {
> 	query
> }
> ```
> 
> 在路由文件中引入和使用
> 
> ```js
> var mongo = require('./mongo.js')
> router.post('/addproduct', function(req, res, next) {
> 	mongo.query(function(db) {
> 		db.collection("product").insertMany([req.body], function(err, result) {
> 			console.log("Inserted 1 document into the collection");
> 			res.send('respond with a resource');
> 		});
> 	})
> });
> ```
>
### mongoose 
> 
### 可视化
> * [Robo 3T](https://robomongo.org/)
> * [Studio3t](https://studio3t.com/download-thank-you/?OS=win64)




## Socket

### socket.io

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>socket.io</title>
  <script src="socket.io.js" charset="utf-8"></script>
</head>
<body>
  <h1>gp6 交流区</h1>
  <div id="content" name="name" style="overflow-y: scroll; width: 400px; height: 300px; border: solid 1px #000"></div>
  <br />
  <div>
    <input type="text" id="msg" style="width: 200px;">
  </div>
  <button id="submit">提交</button>
  <script>
    var socket = io.connect('http://10.9.164.98:8081');
    const content = document.getElementById('content')
    document.querySelector('#submit')
      .addEventListener('click', function () {
        var msg2 = msg.value
        socket.emit('receive', msg2)
        msg.value = ''
        content.innerHTML += msg2 + '<br/>'
      }, false)

      socket.on('message', function(msg){
        content.innerHTML += msg + '<br/>'
      })
  </script>
</body>
</html>

```
server.js

```js
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'))

io.on('connection', function (socket) {
  setInterval(function () {
    socket.emit('list', 'abc')
  }, 1000)
  socket.broadcast.emit('list', 'test');
  socket.on('backend', (msg) => {
    console.log(msg);
  })

  socket.on('receive', (msg) => {
    socket.broadcast.emit('message', msg);
  })
});

server.listen(8081, '10.9.164.98');

```
### net模块

serverCode
```js
const net = require('net')

const server = new net.createServer()

let clients = {}
let clientName = 0

server.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('data', (msg) => {
    // console.log('客户端传来：' + msg);
    broadcast(client, msg.toString())
  })

  client.on('error', (e) => {
    console.log('client error' + e);
    client.end()
  })

  client.on('close', (data) => {
    delete clients[client.name]
    console.log(client.name + ' 下线了');
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].write(client.name + ' 说：' + msg)
  }
}

server.listen(9000)
```
clientCode

```js
var net = require('net')
const readline = require('readline')

var port = 9000
var host = '127.0.0.1'

var socket = new net.Socket()

socket.setEncoding = 'UTF-8'

socket.connect(port, host, () => {
  socket.write('hello.')
})

socket.on('data', (msg) => {
  console.log(msg.toString())
  say()
})

socket.on('error', function (err) {
  console.log('error' + err);
})

socket.on('close', function () {
  console.log('connection closeed');
})

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function say() {
  r1.question('请输入：', (inputMsg) => {
    if (inputMsg != 'bye') {
      socket.write(inputMsg + '\n')
    } else {
      socket.destroy()
      r1.close()
    }
  })
}

```
### websocket


```js
const ws = new WebSocket('ws://localhost:8080/')

ws.onopen = () => {
  ws.send('大家好')
}

ws.onmessage = (msg) => {
  const content = document.getElementById('content')
  content.innerHTML += msg.data + '<br/>'
}

ws.onerror = (err) => {
  console.log(err);
}

ws.onclose = () => {
  console.log('closed~');
}
ws.send(msg2)
```

server.js

```js
const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 })

let clients = {}
let clientName = 0

ws.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('message', (msg) => {
    broadcast(client, msg)
  })

  client.on('close', () => {
    delete clients[client.name]
    console.log(client.name + ' 离开了~')
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].send(client.name + ' 说：' + msg)
  }
}

```


## 项目实战

### api接口

* RestfulApi 规范
* 接口文档的生成(apidoc)
* 接口请求方式区别

### 跨域解决

* cors
* jsonp
* proxy

### 身份验证

#### JWT

产生token

```
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
```

验证token 

```
// verify a token symmetric
jwt.verify(token, 'shhhhh', function(err, decoded) {
  console.log(decoded.foo) // bar
});
```

#### Cookie+Session

```
npm install express-session -d --save

app.use(session({
  secret: "weird sheep",
  resave: false,
  saveUninitialized: true,
  cookie: {user:"default",maxAge: 14*24*60*60*1000}
}));
session存值
req.session.user = user;
req.session.isLogin = true;
```

​	

### 图片上传
1. 安装multer模块
```javascript
npm install multer
```

2. 引用模块
它是依赖于express的一个模块
```javascript
//引用express并配置
var express = require("express");
var app = express();
app.listen(3000);
```
```javascript
var multer = require('multer');
/*var upload = multer({
	//如果用这种方法上传，要手动添加文明名后缀
        //如果用下面配置的代码，则可以省略这一句
	dest: 'uploads/'
})*/
```

3. 配置
设置保存文件的地方，并根据上传的文件名对应文件添加后缀
可以通过`filename`属性定制文件保存的格式

|属性值|用途|
|-|-|
|`destination`|设置资源的保存路径。注意，如果没有这个配置项，默认会保存在`/tmp/uploads`下。此外，路径需要自己创建|
|`filename`|设置资源保存在本地的文件名|

```javascript
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});
```

4. 接受文件
`upload.single('xxx')`，xxx与表单中的name属性的值对应
这里虽然用到post请求，但实际上不需要`bodyParser`模块处理
```javascript
app.post('/upload-single', upload.single('logo'), function(req, res, next) {
	console.log(req.file)
	console.log('文件类型：%s', req.file.mimetype);
	console.log('原始文件名：%s', req.file.originalname);
	console.log((req.file.originalname).split("."))
	console.log('文件大小：%s', req.file.size);
	console.log('文件保存路径：%s', req.file.path);
	res.send({
		ret_code: '0'
	});
});
```

5. 多图上传
多图上传只要更改一下地方，前端往file输入框加多一个`multiple="multiple"`属性值，此时就可以在选图的时候多选了，当然也可以并列多个file输入框(不推荐多个上传图片输入框)，这样体验会不好
```html
<input type="file" name="logo" multiple="multiple" />
```
后端也需要相应的改变
```javascript
app.post('/upload-single', upload.single('logo'), function(req, res, next) {
//upload.single('logo')变为upload.array('logo', 2)，数字代表可以接受多少张图片
app.post('/upload-single', upload.array('logo', 2), function(req, res, next) {
```
如果不想有图片数量上传限制，我们可以用`upload.any()`方法
```javascript
app.post('/upload-single', upload.any(), function(req, res, next) {	
	res.append("Access-Control-Allow-Origin","*");
	res.send({
		wscats_code: '0'
	});
});
```

6. 前端部分
- formData表单提交
```html
<form action="http://localhost:3000/upload-single" method="post" enctype="multipart/form-data">
	<h2>单图上传</h2>
	<input type="file" name="logo">
	<input type="submit" value="提交">
</form>
```

- formData表单+ajax提交
```javascript
<form id="uploadForm">
	<p>指定文件名： <input type="text" name="filename" value="" /></p>
	<p>上传文件： <input type="file" name="logo" /></ p>
	<input type="button" value="上传" onclick="doUpload()" />
</form>
```
`FormData`对象，是可以使用一系列的键值对来模拟一个完整的表单，然后使用`XMLHttpRequest`发送这个"表单"

**注意点**

- processData设置为false。因为data值是FormData对象，不需要对数据做处理。
- `<form>`标签添加`enctype="multipart/form-data"`属性。
- cache设置为false，上传文件不需要缓存。
- contentType设置为false。因为是由`<form>`表单构造的FormData对象，且已经声明了属性`enctype="multipart/form-data"`，所以这里设置为false

上传后，服务器端代码需要使用从查询参数名为logo获取文件输入流对象，因为`<input>`中声明的是`name="logo"`

```javascript
function doUpload() {
	$.ajax({
		url: 'http://localhost:3000/upload-single',
		type: 'POST',
		cache: false, //不必须
		data: new FormData($('#uploadForm')[0]),
		processData: false,//必须
		contentType: false,//必须
		success: function(data) {
			console.log(data)
		}
	})
}
```

> 参考文档
[Github MyDemo](https://github.com/Wscats/node-tutorial/tree/master/uploadFiles)
[Github Multer](https://github.com/expressjs/multer)
[MDN FormData对象的使用](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)



 