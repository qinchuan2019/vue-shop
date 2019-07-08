/**
 * 程序入口
 */
import Vue from 'vue'
import app from './App.vue'
import {Header} from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router.config.js'

Vue.use(VueRouter)

Vue.component(Header.name,Header)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router
})