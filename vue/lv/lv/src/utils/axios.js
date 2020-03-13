//拦截器。在数据请求前后做状态捕获


//请求拦截器的作用是在请求发送前进行一些操作，例如在每个请求体里加上token，统一做了处理如果以后要改也非常容易。
import axios from 'axios'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  console.log(error);
  // Do something with request error
  return Promise.reject(error);
});


//响应拦截器的作用是在接收到响应后进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页。
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axios