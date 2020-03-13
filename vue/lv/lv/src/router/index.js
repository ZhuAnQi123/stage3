import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Cart from '../components/Cart'
import Homepage from '../components/Homepage'
import My from '../components/My'
import Hot from '../components/Hot'
import classification from '../components/classification'
import ListPage from '../components/ListPage'


const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/cart',
    component: Cart
  },{
    path: '/hot',
    component: Hot
  },{
    path: '/my',
    component: My
  },{
    path: '/classification',
    component: classification,
    children:[
      {
        path: '/classification/:id',
        component: ListPage
      }
    ]
  },
]
const router = new VueRouter({
  routes
})

export default router
