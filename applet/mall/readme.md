前端矩阵 

原生开发
  app 前端  c/s 苹果手机 oc swift  安卓 java 安卓
  游戏 前端  c++ c# lua  javascript 
  软件（pc） 前端  c++ python ....

网页 前端  b/s  javascript 
小程序 前端 javascipt 

###  市面上的小程序 
微信小程序  v
支付宝小程序
抖音小程序
百度小程序
微博小程序 
qq小程序
...

### 微信小程序
1. 原生开发  用wx小程序 提供的语法开发 --我们要学习的
2. vue开发  用vue结合框架写小程序 uni-app wepy mpvue  
3. react开发  用react taro 框架开发
4. angular开发   ？？？？

### 目的 
一周时间 使用wx小程序开发 电商平台
1. wx小程序基础 1-1.5 
2. 电商项目    3-3.5天 
    1. api 接口
3. 打包上线   10分钟
    1. 需要服务器
    2. 需要一个域名 
    3. ssl 认证

公众平台官网：https://mp.weixin.qq.com/


1.网页运行在浏览器，小程序运行在哪里？
小程序不是运行在浏览器上的，小程序是运行在微信上的（webview）
浏览器在小程序开发过程中没啥用，dom bom  window对象 小程序都没有
标签 div  span  小程序里没有 网页的标签 
npm 下载插件包  小程序不能使用npm 下载的网页的插件包 只能用专门为小程序

下载开发者工具 创建初始项目  不要选云开发

### 小程序的框架
xxx.json  小程序或者页面配置
xxx.js    写js业务逻辑
xxx.wxml  wxhtml 用的是wx内置的组件 
xxx.wxss  wxcss 微信的样式

小程序都需要一个app实例 （根实例）包含了若干个页面（实例）
<!-- vue  有一个跟组件 跟组件里有一堆页面组件 -->
## 小程序基本目录结构
app.js  小程序的实例 小程序的入口文件
app.json 小程序的全局配置
app.wxss  小程序的全局样式
pages  小程序里的页面
-home   home页面
  |   
  home.js home页面实例
  home.json  home页面的配置文件
  home.wxss  home页面的样式
  home.wxml  home的页面骨架
-my     我的页面
 ....

 ### 小程序中的样式
 app.wxss 全局样式
 pageName.wxss 页面的局部样式 
 样式使用正常css的使用
 全局和局部冲突就近原则
 响应式 没有rem rpx 
 小程序规定 不管什么手机 with 恒定为 750rpx 小程序设计稿的尺寸 750*1136
 或者vw wh
 无法直接预处理语言
 ### 小程序的页面骨架
 xxx.wxml 文件 不用html标签元素
 只能使用小程序内置的组件标签 详情见文档
 ### 小程序的配置 详情见文档
 app.json 全局配置
 pageName.json 页面配置 
 全局和局部冲突就近原则

 ### 小程序逻辑 
 1. 小程序的生命周期 
    小程序启动
    小程序隐藏
    小程序显示
 2. 页面的生命周期 
     页面加载
     页面卸载 
     页面显示
     页面隐藏
     页面渲染结束
    
### 小程序的数据绑定 
page({
  data:{
    ...数据
  }
})
页面对象下 data里的数据可以通过{{}} 在视图中进行绑定
如果要修改数据  页面实例(this).setData({要修改的key:value})

### 事件
小程序的事件是特制事件和原生js不一样  tap  longtap ..
处理函数卸载js文件
传参是以data开头的属性进行传参 在事件对象里进行接受
```
<button bindtap="处理函数"
 data-hehe='123'
 data-obj="{{ {us:123,ps:456} }}
 data-arr = "{{ [1,2,3,4,5] }}"
></button>
```
### 小程序中的指令
wx：for
wx：if

### 小程序中的网络请求
js 原生ajax 
jq 的ajax 
axios vue react 
requrest 模块
以上方式在小程序全部无效  
在网页上发起请求 js jq axios 都需要http请求对象 都是基于window对象 小程序就没有window对象

小程序的网络请求 使用的是内置的wx.request api  使用方式类似于jq的ajax 
发布线上的要求
1. 请求的域名必须是https协议
2. 请求的域名必须在合法域名列表里
3. 小程序没有跨域问题
开发环境下 没有https 没有域名的合法列表
忽略 https 安全域名的验证

将wx.request 进行二次封装 
axios.post()
axios.get()
asiox.delecte()
.....

网络请求的回调里 经常会找不到this 换成箭头函数就行了

### 小程序路由 
1. 控制页面跳转
2. 传递参数



### 项目启动
竞品分析：http://yimei-h5.bestyuemei.com/ym/shopping-mall/shopping-mall.html

小程序商铺 
1.首页
   a.轮播图
   b.主题展示（新品推荐）
   c.跳转到商品详情页
2.分类
  a.显示类别
  b.根据类别显示商品
  c.跳转到详情页
3.购物车
  a.显示购物车的数据
  b.对商品做操作
  c.下单
4.个人信息 
  a.显示个人信息 
  b.显示订单列表
5.商品详情 
  a.显示商品的信息
  b.加入购物车
6.订单页 
7.修改地址界面

### 阶段1 开发阶段 （真机测试）
api 接口 自己布置
分类 首页.拔的竞品平台的接口
    其余接口是自己写的
功能模块的封装  不是预先封装而是用到在封装
### 阶段二 线上发布
1. 必须有服务器
2. 必须要有域名

### ui框架
https://www.jianshu.com/p/fee85363776f

### api 接口
https://documenter.getpostman.com/view/10570004/SzYW4foC?version=latest

### 小程序登录 
1. 获取code 
2. 调用后端的api 传递code  后端返回 token 。。。
3. 前端验证登录态
### 小程序支付
1. 调用自己后端写的下单接口 后端返回5个参数（时间戳 随机字符串 加密算法 加密字符串 package）
2. 通过下单接口返回的参数调用wx.requestPayment

# 小程序上线 
1. api接口上线   后端或者运维
2. 数据库要上线   后端或者运维
   将本地数据导入到线上的数据库 atlas
   * 将本地的数据库进行导出
   * 将数据库内容导入线上
   * 将api接口切换成线上数据库进行测试
3. https协议    后端或者运维 
   * 需要一个域名 以及认证的域名
     * 域名在阿里云进行购买  购买dns解析（将域名和服务器ip进行绑定）
     * 申请免费的ssl 证书
     * 申请完毕之后将证书进行下载
     * 配置nginx 监听443 指向下载的ssl证书就可以
     * https（443） 和http（80） 进行访问 
   * 需要一个服务器 
   * 服务器上需要配置nginx
4. 前端发起小程序的审核  前端
   * 小程序的接口必须是https协议


## 参考文档
http://note.youdao.com/noteshare?id=e61ab1c0850f666c5aa839163f738754