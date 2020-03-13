### react 是什么
用户描述用户界面的js库 (v)
angular   mvc 
vue       mvvm 
facebook 
15.6   2018上半年 15.6 
16     2018年下半年  16 

### jsx 语法糖   javascript xhtml
用jsx 来描述组件的虚拟dom
class 也是语法糖
```
<div id='test' class='hehe'>
  <p id='p'>
    <div></div>
  </p>
  <span>呵呵</span>
</div>


React.createElemet('div',{id:"test",className："hehe"},[
  React.crateElment('p',{id:p},[
    React.crateElment('div',{id:p，text:"呵呵"},[])
  ])
   React.crateElment('span',{id:p，text:"呵呵"},[])
])
```
### 大括号语法
⚪可插入语法
1.JS简单的计算 <h1>我爱你{5000 * 2}年</h1>
2.JS 内置的函数 <h1>我爱你{parseInt(10000.6)}年</h1>
3.插入变量 const year = 10000;<h1>我爱你{year}年</h1>
注意，变量可以存储 JSX 语法：
```
const a = <span>我爱你<em className="spec">10000</em>年</span>;
```
4.插入函数的执行{sum()} 和 允许插入IIFE。
5.插入三元运算符
```
<h1>我爱你{3 > 8 ? 9 : 10000}年</h1>
```
6.插入自定义组件{<App><App/>}

⚪不可插入语法：
1.不能插入 for 循环
2.不能插入if语句
3.不能插入while语句
4.不能插入函数的声明
5.不能插入对象

⚪src 动态属性值
基本使用请记住 "大包引" ，大括号包住引号。
```
var star = 0 ;<img src = {`images/${star}.png`} />
```

⚪行内样式
口诀：双大括号，标准JSON，省略 px，属性驼峰。
注意：即使不需要将style属性变动态，也需要写成这样，这是规定。


xhtml 严格模式的HTML
1. 必须只有一个根源 
2. 标签必须闭合，尤其是单标签，单标签必须写末尾反斜杠：例如<img />
3.表格标签必须添加 tbody 标签。
4.class 要避讳为变为 className，因为 class 在 JS 里面是关键字。



### 创建组件
引入文件 提供 react reactdom对象 帮助浏览器解析jsx
组件名一定要大写
```
let Component = React.createClass({
  render(){
    return ( jsx )
  }
})
ReactDOM.render(组件名，要挂载的元素)
```
### 数据承载
state 组件内部的数据 可以尽心修改 getInitailState 生命周期初始化
props 来自于组件外部的数据 组件内部不能修改
      用过getDefaultProps 进行初始化
      外部传递和组件内部初始化同时存在以外部传递优先
### 数据绑定 
{} 存放变量表达式 
1. 基本数据类型 数字 字符串 基本用户
2. 对象  不能直接绑定
3. 数组  数组的每一项都会被拆分出来
4. 布尔值 null undefined 在页面不会直接显示 配置3元表达式或者其他的表达式

### 指令
react中不存在这种东西 我们自己去实现相同的效果

1. 列表渲染
  数组在绑定的时候会被拆解开来 通常结合map实现对数据的处理
2. 条件渲染
  a. 三元表达式控制渲染
  b. || 或运算符控制渲染
  c. 函数的返回控制渲染
3. 属性绑定
   希望属性的值是变量
   <img src={变量或者表达式}>
   注意类名要用className
4. 事件绑定 v-on:click
   react事件和原生事件类似只需要把事件名写成小驼峰就ok
   原生 <div onclick=''></div>
   react <div onClick=''></div>
   1.
   onClick={(e)=>{
     事件处理代码
   }}  
   2. 不带参数 默认参数是事件对象 千万别加()
   onClick={this.fun}
   3. 带参数 通过bind实现  默认参数会放到最后方
   onClick={this.fun.bind(null,4,6)}

### 数据变页面变不变
  react 中不像vue有数据响应式  要通过setState触发页面的修改 
  this.setState({要修改的数据:修改的内容},cb)
  setState  是一个异步方法参数一时要修改的数据
  参数2是修改成功之后的回调

### 组件嵌套
 react不想vue 全局和局部组件之分
 组件的嵌套关系随意 虽在外部谁是爸爸

### 插槽
和vue中组件标签汇总存放的内容默认不会被渲染 react中没有slot 
组件对象下 props.children可以用来获取组件标签中的内容 
### ref 
可以绑定dom 也可以绑定组件
通过组件对象下的 refs进行获取
### react组件通信
父子通信  props  refs
子父通信  props
亲兄弟通信 状态提升
远亲通信  全局状态管理 redux

#### 作业
1. 9*9 乘法表
2. 表格隔行变色 下拉菜单能控制隔行变色的颜色
3. todolist react 版
4. bind call  apply