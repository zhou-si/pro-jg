import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/vue/home'
// import Detail from './views/home/vue/detail'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
