/**
 * 程序入口
 */
import Vue from 'vue'
import app from './App.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router.config.js'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)

import 'mint-ui/lib/style.css'

import moment from 'moment'

Vue.filter('timeFormat',function(timeStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(timeStr).format(pattern);
})

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//引入图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

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

Mock.mock('getCommentsById',{
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

Mock.mock('getImagesById',{
  "code":0,
  "message":"请求成功",
  "data|7":[{
      "id|+1":187,
      'img_url':'@image()',
      "title": "@ctitle(2,7)",
      "zhaiyao":"@cparagraph",
      "click|1-100":20,
      "add_time":'@date' + " " + '@time',
  }]
})

Mock.mock('getThumbsImageListById',{
  "code":0,
  "message":"请求成功",
  "data|4":[{
      'src':'@image()'
  }]
})

Mock.mock('getGoodsList',{
  "code":0,
  "message":"请求成功",
  "data|7":[{
    "id|+1":187,
    'img_url':'@image()',
    "title": "@ctitle(7,35)",
    "market_price|4888-5888":4889,
    "sell_price|2000-4888": 2001,
    "stock_quantity|1-100":20,
    "goods_no":"@float(0)",
    "add_time":'@date' + " " + '@time'
  }]
})

var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router
})