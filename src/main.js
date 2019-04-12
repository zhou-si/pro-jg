import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/js/rem.js';
import Vant from 'vant';
import 'vant/lib/index.css';

import {post,get} from '../src/api/config'
import {APIS} from './api/serviceAPIS'

//定义全局变量
Vue.prototype.$httpPost = post;
Vue.prototype.$httpGet = get;
Vue.prototype.APIS = APIS;



Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  APIS,
  render: h => h(App)
}).$mount('#app')
