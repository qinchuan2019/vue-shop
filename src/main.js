/**
 * 程序入口
 */
import Vue from 'vue'
import app from './App.vue'
import {Header,Swipe,SwipeItem} from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router.config.js'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router
})