import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home' // 首页
import List from '@/pages/List' // 我的行程列表
import Post from '@/pages/Post' // 发布行程
import Sky from '@/pages/Sky' // 大空
import User from '@/pages/User' // 我的
import Regist from '@/pages/Regist' // 注册
import Login from '@/pages/Login' // 登录
import ForgetPassword from '@/pages/ForgetPassword' // 找回密码
import Convene from '@/pages/Convene' // 行程列表
import Recall from '@/pages/Recall' // 待约
import Detail from '@/pages/Detail' // 详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user/list',
      name: 'list',
      component: List
    },
    {
      path: '/user/post',
      name: 'post',
      component: Post
    },
    {
      path: '/user/sky',
      name: 'sky',
      component: Sky
    },
    {
      path: '/user/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/user/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword
    },
    {
      path: '/convene',
      name: 'convene',
      component: Convene
    },
    {
      path: '/recall',
      name: 'recall',
      component: Recall
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
