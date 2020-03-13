import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Recommend from '../components/Recommend'
import Singer from '../components/Singer/index.vue'
import Rank from '../components/Rank'
import My from '../components/My'
import Detail from 'components/Detail'


const router = new VueRouter({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children:[
        {
          path:':singermid',
          name:'detail',
          component:Detail
        }
      ]
    }, {
      path: '/rank',
      component: Rank
    }, {
      path: '/my',
      component: My
    }, {
      //这个默认路径的意思是一打开默认就是recommend页面
      path: '/',
      redirect: '/recommend'
    }
  ]
})

export default router
