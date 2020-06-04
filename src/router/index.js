import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '@/views/List.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '@/views/Create.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/Detail.vue')
  },
  {
    path: '/emit',
    name: 'Emit',
    component: () => import(/* webpackChunkName: "emit" */ '@/views/emit/EmitParent.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "slot" */ '@/views/slot/Slot.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "store" */ '@/views/Store.vue')
  },
  {
    path: '/bus',
    name: 'Bus',
    component: () => import(/* webpackChunkName: "bus" */ '@/views/Bus.vue')
  },
  {
    path: '/etc',
    name: 'Etc',
    component: () => import(/* webpackChunkName: "etc" */ '@/views/etc/Etc.vue')
  }
]

const router = new VueRouter({
  routes,
  base: process.env.VUE_APP_BASE,
  mode: 'history',
  linkActiveClass: 'on',
  linkExactActiveClass: ''
})

export default router
