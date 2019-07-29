/**
 * 程序入口
 */
import Vue from 'vue'
import app from './App.vue'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router.config.js'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)

import moment from 'moment'

Vue.filter('timeFormat',function(timeStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  moment(timeStr).format(pattern);
})

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

/**
 * 数据mock
 */
import Mock from './lib/mock/mock.js'

Mock.mock('getNewsList',{
  "code":0,
  "message":"请求成功",
  "data|27":[{
      "id|+1":187,
      'img_url':'@image()',
      "title": "@ctitle(3,7)",
      "add_time":'@date' + " " + '@time',
      "zhaiyao":"@cparagraph",
      "click|1-100":20
  }]
})

Mock.mock('getNewsCommentsById',{
  "code":0,
  "message":"请求成功",
  "data|5":[{
      "user_name": "@cname",
      "add_time":'@date' + " " + '@time',
      "content":"@cparagraph"
  }]
})

Mock.mock('getAllCategory',{
  "code":0,
  "message":"请求成功",
  "data|8":[{
    "id|+1":187,
    "title": "@ctitle(2,7)"
  }]
})

var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router
})