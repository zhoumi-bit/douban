import Vue from 'vue'
import Router from 'vue-router'

import ShouYe from '../pages/shouye'
import Reg from '../pages/reg'
import Login from '../pages/login'
import Move from '../pages/move'
import Book from '../pages/book'
import Video from '../pages/video'
import Group from '../pages/group'
import Seacher from '../pages/seacher'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shouye',
      name: 'ShouYe',
      component: ShouYe
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/move',
      name: 'Move',
      component: Move
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/seacher',
      name: 'Seacher',
      component: Seacher
    },
  ]
})
