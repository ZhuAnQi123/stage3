### 作业
1.通过路由实现一个tab切换的效果
2.通过高阶组件实现路由拦截器

### 全局状态管理 

#### Vue全局状态管理 vuex 
state  mutation  action  getter module 辅助函数

#### redux 
多组件共享状态，一个组件发生改变其他的都要变


安装redux
```
npm install redux
```
角色划分

皇帝    store  传递奏折 发布政令
老佛爷  reducer  接受奏折 根据局奏折批阅
平民百姓 component  使用数据 修改数据
文武百官 actionCreator  提交奏折给老佛爷  

##### 多组件共享状态 
1.创建 store 并且和reducer关联
  ```
  import {createStore} from 'redux'
  import Reducer from './reducer'
  let Store = createStore(Reducer)
  export default Store
  ```
2.创建reducer,根据参数里修改前的数据和action 对数据进行修改 并且返回修改后的数据
  ```
  export default(prevState = state , actions )=>{
    newData=  ;
  return newData;
  }
  ```

3. 创建actioncreatore 本质是一个对象 对象里有一堆的函数[注意网络请求要再此发送]
  在内部的函数
  a. 创建action 也是一个对象必须有type 
  b. store.dispatch(action) 提交action给reducer
  ```
  import store from './store'
  export default {

  }
  ```

4.在组件中使用
  a.引入store
  b.使用store下的getState方法，getState方法获取的值就是reducer返回的值
  c.数据更改了但是页面不会发生改变,在componentDidMount()中通过store.subscribe监听全局状态值的改变
  ```
import store from './store/store'

class Box extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render() { 
    let {list} = store.getState()
    return ( 
     
     );
  }
}
  ```




#### redux 模块化
#### redux 异步处理
同vuex中一样 可以将网络请求放到actionCreatore 
1. 减少重复的代码 统一管理api接口
2. 时间旅行 更精准的检测到全局状态值的变化

#### 样式作用域的问题
在react中样式没有作用域 ，当不同组件类名重复又的时候 导致样式覆盖