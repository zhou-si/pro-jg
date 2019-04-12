import Vue from 'vue'
import Router from 'vue-router'
import detailPage from './vue/detail'
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/detail',
            name: 'detail',
            component: detailPage
        }
    ]
})
