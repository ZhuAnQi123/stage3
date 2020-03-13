import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/base.css'
import  'animate.css/animate.css'
import VueLazyload from 'vue-lazyload'
import axios from  './utils/axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/favicon.ico',    //当图片路径错误时加载的图片
  loading: '/favicon.ico',    //当图片网络慢时加载的图片
  attempt: 1
})