import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/work-design',
      name: 'work-design',
      component: () => import(/* webpackChunkName: "works" */ './views/Work-Design.vue')
    },

    {
      path: '/articles',
      name: 'articles',
      component: () => import(/* webpackChunkName: "blog" */ './views/Articles.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
