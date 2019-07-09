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
      path: '/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "project" */ './views/Project.vue')
    },

    {
      path: '/article',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ './views/Article.vue')
    },

    {
      path: '/design',
      name: 'design',
      component: () => import(/* webpackChunkName: "design" */ './views/Design.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
