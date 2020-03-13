import Vue from 'vue'
import App from './App.vue'
import './style/reset.css'
import store from './store'
import  'animate.css/animate.css'
import router from './router'

// 将 axios 挂载到vue的原型上  组件继承实例,所以vue原型上的属性组件也有
import axios from  './utils/axios'
Vue.prototype.$axios = axios 

Vue.config.productionTip = false

// 图片懒加载
import VueLazyload from  'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/favicon.ico',
  loading: '/favicon.ico',
  attempt: 1
})

//注意！！！！！！！！！
// 使用vuex的时候将store挂载在vue实力上
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
